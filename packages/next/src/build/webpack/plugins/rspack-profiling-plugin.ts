// A basic implementation to allow loaders access to loaderContext.currentTraceSpan

import type { Span } from '../../../trace'

import {
  NormalModule,
  type Compiler,
  type RspackPluginInstance,
} from '@rspack/core'

const pluginName = 'RspackProfilingPlugin'
const moduleSpansByCompilation = new WeakMap()

export class RspackProfilingPlugin implements RspackPluginInstance {
  runWebpackSpan: Span

  constructor({ runWebpackSpan }: { runWebpackSpan: Span }) {
    this.runWebpackSpan = runWebpackSpan
  }

  apply(compiler: Compiler) {
    compiler.hooks.compilation.tap(
      { name: pluginName, stage: -Infinity },
      (compilation) => {
        moduleSpansByCompilation.set(compilation, new WeakMap())
        const compilationSpan = this.runWebpackSpan.traceChild(
          `compilation-${compilation.name}`
        )

        const moduleHooks = NormalModule.getCompilationHooks(compilation)
        moduleHooks.loader.tap(
          pluginName,
          (loaderContext: any, module: any) => {
            const moduleSpan = moduleSpansByCompilation
              .get(compilation)
              ?.get(module)
            loaderContext.currentTraceSpan = moduleSpan
          }
        )

        compilation.hooks.buildModule.tap(pluginName, (module: any) => {
          const span = compilationSpan.traceChild('build-module')
          span.setAttribute('name', module.userRequest)
          span.setAttribute('layer', module.layer)

          moduleSpansByCompilation?.get(compilation)?.set(module, span)
        })

        compilation.hooks.succeedModule.tap(pluginName, (module: any) => {
          moduleSpansByCompilation?.get(compilation)?.get(module)?.stop()
        })
      }
    )
  }
}
