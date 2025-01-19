(function(){"use strict";var __webpack_modules__={246:function(e,t,s){const n=s(215);e.exports=n.default},215:function(e,t,s){Object.defineProperty(t,"__esModule",{value:true});t["default"]=void 0;var n=_interopRequireDefault(s(310));var o=_interopRequireDefault(s(17));var r=_interopRequireDefault(s(132));var a=s(757);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}async function loader(e){const t=this.getOptions(r.default);const s=this.async();let i;try{i=(0,a.getSassImplementation)(this,t.implementation)}catch(e){s(e);return}const c=typeof t.sourceMap==="boolean"?t.sourceMap:this.sourceMap;const l=await(0,a.getSassOptions)(this,t,e,i,c);const p=typeof t.webpackImporter==="boolean"?t.webpackImporter:true;if(p){const e=t.api==="modern"||t.api==="modern-compiler";if(!e){const{includePaths:e}=l;l.importer.push((0,a.getWebpackImporter)(this,i,e))}else{l.importers.push((0,a.getModernWebpackImporter)(this,i,[]))}}let u;try{u=(0,a.getCompileFn)(this,i,t)}catch(e){s(e);return}let d;try{d=await u(l)}catch(e){if(e.span&&typeof e.span.url!=="undefined"){this.addDependency(n.default.fileURLToPath(e.span.url))}else if(typeof e.file!=="undefined"){this.addDependency(o.default.normalize(e.file))}s((0,a.errorFactory)(e));return}let f=d.sourceMap?d.sourceMap:d.map?JSON.parse(d.map):null;if(f&&c){f=(0,a.normalizeSourceMap)(f,this.rootContext)}if(typeof d.loadedUrls!=="undefined"){d.loadedUrls.filter((e=>e.protocol==="file:")).forEach((e=>{const t=n.default.fileURLToPath(e);if(o.default.isAbsolute(t)){this.addDependency(t)}}))}else if(typeof d.stats!=="undefined"&&typeof d.stats.includedFiles!=="undefined"){d.stats.includedFiles.forEach((e=>{const t=o.default.normalize(e);if(o.default.isAbsolute(t)){this.addDependency(t)}}))}s(null,d.css.toString(),f)}var i=t["default"]=loader},757:function(__unused_webpack_module,exports,__nccwpck_require__){Object.defineProperty(exports,"__esModule",{value:true});exports.errorFactory=errorFactory;exports.getCompileFn=getCompileFn;exports.getModernWebpackImporter=getModernWebpackImporter;exports.getSassImplementation=getSassImplementation;exports.getSassOptions=getSassOptions;exports.getWebpackImporter=getWebpackImporter;exports.getWebpackResolver=getWebpackResolver;exports.normalizeSourceMap=normalizeSourceMap;var _url=_interopRequireDefault(__nccwpck_require__(310));var _path=_interopRequireDefault(__nccwpck_require__(17));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getDefaultSassImplementation(){let sassImplPkg="sass";try{require.resolve("sass-embedded");sassImplPkg="sass-embedded"}catch(ignoreError){try{eval("require").resolve("sass")}catch(_ignoreError){try{eval("require").resolve("node-sass");sassImplPkg="node-sass"}catch(e){sassImplPkg="sass"}}}return __nccwpck_require__(438)}function getSassImplementation(e,t){let s=t;if(!s){s=getDefaultSassImplementation()}if(typeof s==="string"){s=require(s)}const{info:n}=s;if(!n){throw new Error("Unknown Sass implementation.")}const o=n.split("\t");if(o.length<2){throw new Error(`Unknown Sass implementation "${n}".`)}const[r]=o;if(r==="dart-sass"){return s}else if(r==="node-sass"){return s}else if(r==="sass-embedded"){return s}throw new Error(`Unknown Sass implementation "${r}".`)}function isProductionLikeMode(e){return e.mode==="production"||!e.mode}function proxyCustomImporters(e,t){return[].concat(e).map((e=>function proxyImporter(...s){const n={...this,webpackLoaderContext:t};return e.apply(n,s)}))}async function getSassOptions(e,t,s,n,o){const r=t.sassOptions?typeof t.sassOptions==="function"?t.sassOptions(e)||{}:t.sassOptions:{};const a={...r,data:t.additionalData?typeof t.additionalData==="function"?await t.additionalData(s,e):`${t.additionalData}\n${s}`:s};if(!a.logger){const s=t.warnRuleAsWarning!==false;const n=e.getLogger("sass-loader");const formatSpan=e=>`Warning on line ${e.start.line}, column ${e.start.column} of ${e.url||"-"}:${e.start.line}:${e.start.column}:\n`;const formatDebugSpan=e=>`[debug:${e.start.line}:${e.start.column}] `;a.logger={debug(e,t){let s="";if(t.span){s=formatDebugSpan(t.span)}s+=e;n.debug(s)},warn(t,o){let r="";if(o.deprecation){r+="Deprecation "}if(o.span){r+=formatSpan(o.span)}r+=t;if(o.span&&o.span.context){r+=`\n\n${o.span.start.line} | ${o.span.context}`}if(o.stack&&o.stack!=="null"){r+=`\n\n${o.stack}`}if(s){const t=new Error(r);t.name="SassWarning";t.stack=null;e.emitWarning(t)}else{n.warn(r)}}}}const i=t.api==="modern"||t.api==="modern-compiler";const{resourcePath:c}=e;if(i){a.url=_url.default.pathToFileURL(c);if(!a.style&&isProductionLikeMode(e)){a.style="compressed"}if(o){a.sourceMap=true}if(typeof a.syntax==="undefined"){const e=_path.default.extname(c);if(e&&e.toLowerCase()===".scss"){a.syntax="scss"}else if(e&&e.toLowerCase()===".sass"){a.syntax="indented"}else if(e&&e.toLowerCase()===".css"){a.syntax="css"}}a.loadPaths=[].concat((a.loadPaths?a.loadPaths.slice():[]).map((e=>_path.default.isAbsolute(e)?e:_path.default.join(process.cwd(),e)))).concat(process.env.SASS_PATH?process.env.SASS_PATH.split(process.platform==="win32"?";":":"):[]);a.importers=a.importers?Array.isArray(a.importers)?a.importers.slice():[a.importers]:[]}else{a.file=c;if(!a.outputStyle&&isProductionLikeMode(e)){a.outputStyle="compressed"}if(o){a.sourceMap=true;a.outFile=_path.default.join(e.rootContext,"style.css.map");a.sourceMapContents=true;a.omitSourceMapUrl=true;a.sourceMapEmbed=false}const s=_path.default.extname(c);if(s&&s.toLowerCase()===".sass"&&typeof a.indentedSyntax==="undefined"){a.indentedSyntax=true}else{a.indentedSyntax=Boolean(a.indentedSyntax)}a.importer=a.importer?proxyCustomImporters(Array.isArray(a.importer)?a.importer.slice():[a.importer],e):[];if(t.webpackImporter===false&&a.importer.length===0){a.importer=undefined}a.includePaths=[].concat(process.cwd()).concat((a.includePaths?a.includePaths.slice():[]).map((e=>_path.default.isAbsolute(e)?e:_path.default.join(process.cwd(),e)))).concat(process.env.SASS_PATH?process.env.SASS_PATH.split(process.platform==="win32"?";":":"):[]);if(typeof a.charset==="undefined"){a.charset=true}}return a}const MODULE_REQUEST_REGEX=/^[^?]*~/;const IS_MODULE_IMPORT=/^~([^/]+|[^/]+\/|@[^/]+[/][^/]+|@[^/]+\/?|@[^/]+[/][^/]+\/)$/;const IS_PKG_SCHEME=/^pkg:/i;function getPossibleRequests(e,t=false,s=false){let n=e;if(t){if(MODULE_REQUEST_REGEX.test(e)){n=n.replace(MODULE_REQUEST_REGEX,"")}if(IS_PKG_SCHEME.test(e)){n=`${n.slice(4)}`;return[...new Set([n,e])]}if(IS_MODULE_IMPORT.test(e)||IS_PKG_SCHEME.test(e)){n=n[n.length-1]==="/"?n:`${n}/`;return[...new Set([n,e])]}}const o=_path.default.extname(n).toLowerCase();if(o===".css"){return[]}const r=_path.default.dirname(n);const a=r==="."?"":`${r}/`;const i=_path.default.basename(n);const c=_path.default.basename(n,o);return[...new Set([].concat(s?[`${a}_${c}.import${o}`,`${a}${c}.import${o}`]:[]).concat([`${a}_${i}`,`${a}${i}`]).concat(t?[e]:[]))]}function promiseResolve(e){return(t,s)=>new Promise(((n,o)=>{e(t,s,((e,t)=>{if(e){o(e)}else{n(t)}}))}))}async function startResolving(e){if(e.length===0){return Promise.reject()}const[{possibleRequests:t}]=e;if(t.length===0){return Promise.reject()}const[{resolve:s,context:n}]=e;try{return await s(n,t[0])}catch(s){const[,...n]=t;if(n.length===0){const[,...t]=e;return startResolving(t)}e[0].possibleRequests=n;return startResolving(e)}}const IS_SPECIAL_MODULE_IMPORT=/^~[^/]+$/;const IS_NATIVE_WIN32_PATH=/^[a-z]:[/\\]|^\\\\/i;function getWebpackResolver(e,t,s=[]){const n=t&&(t.info.includes("dart-sass")||t.info.includes("sass-embedded"));const o=promiseResolve(e({alias:[],aliasFields:[],conditionNames:[],descriptionFiles:[],extensions:[".sass",".scss",".css"],exportsFields:[],mainFields:[],mainFiles:["_index","index"],modules:[],restrictions:[/\.((sa|sc|c)ss)$/i],preferRelative:true}));const r=promiseResolve(e({alias:[],aliasFields:[],conditionNames:[],descriptionFiles:[],extensions:[".sass",".scss",".css"],exportsFields:[],mainFields:[],mainFiles:["_index.import","_index","index.import","index"],modules:[],restrictions:[/\.((sa|sc|c)ss)$/i],preferRelative:true}));const a=promiseResolve(e({dependencyType:"sass",conditionNames:["sass","style","..."],mainFields:["sass","style","main","..."],mainFiles:["_index","index","..."],extensions:[".sass",".scss",".css"],restrictions:[/\.((sa|sc|c)ss)$/i],preferRelative:true}));const i=promiseResolve(e({dependencyType:"sass",conditionNames:["sass","style","..."],mainFields:["sass","style","main","..."],mainFiles:["_index.import","_index","index.import","index","..."],extensions:[".sass",".scss",".css"],restrictions:[/\.((sa|sc|c)ss)$/i],preferRelative:true}));return(e,t,c)=>{if(!n&&!_path.default.isAbsolute(e)){return Promise.reject()}const l=t;const p=l.slice(0,5).toLowerCase()==="file:";if(p){try{t=_url.default.fileURLToPath(l)}catch(e){t=t.slice(7)}}let u=[];const d=!IS_SPECIAL_MODULE_IMPORT.test(t)&&!IS_PKG_SCHEME.test(t)&&!p&&!l.startsWith("/")&&!IS_NATIVE_WIN32_PATH.test(l);if(s.length>0&&d){const a=getPossibleRequests(t,false,c);if(!n){u=u.concat({resolve:c?r:o,context:_path.default.dirname(e),possibleRequests:a})}u=u.concat(s.map((e=>({resolve:c?r:o,context:e,possibleRequests:a}))))}const f=getPossibleRequests(t,true,c);u=u.concat({resolve:c?i:a,context:_path.default.dirname(e),possibleRequests:f});return startResolving(u)}}const MATCH_CSS=/\.css$/i;function getModernWebpackImporter(e,t,s){const n=getWebpackResolver(e.getResolve,t,s);return{async canonicalize(t,s){const{fromImport:o}=s;const r=s.containingUrl?_url.default.fileURLToPath(s.containingUrl.toString()):e.resourcePath;let a;try{a=await n(r,t,o)}catch(e){return null}e.addDependency(_path.default.normalize(a));return _url.default.pathToFileURL(a)},async load(t){const s=_path.default.extname(t.pathname);let n;if(s&&s.toLowerCase()===".scss"){n="scss"}else if(s&&s.toLowerCase()===".sass"){n="indented"}else if(s&&s.toLowerCase()===".css"){n="css"}else{n="scss"}try{const s=await new Promise(((s,n)=>{const o=_url.default.fileURLToPath(t);e.fs.readFile(o,"utf8",((e,t)=>{if(e){n(e);return}s(t)}))}));return{contents:s,syntax:n}}catch(e){return null}}}}function getWebpackImporter(e,t,s){const n=getWebpackResolver(e.getResolve,t,s);return function importer(t,s,o){const{fromImport:r}=this;n(s,t,r).then((t=>{e.addDependency(_path.default.normalize(t));o({file:t.replace(MATCH_CSS,"")})})).catch((()=>{o({file:t})}))}}let nodeSassJobQueue=null;const sassModernCompilers=new WeakMap;function getCompileFn(e,t,s){const n=t.info.includes("dart-sass")||t.info.includes("sass-embedded");if(n){if(s.api==="modern"){return e=>{const{data:s,...n}=e;return t.compileStringAsync(s,n)}}if(s.api==="modern-compiler"){return async s=>{const n=e._compiler;const{data:o,...r}=s;if(n){if(!sassModernCompilers.has(n)){const e=await t.initAsyncCompiler();if(!sassModernCompilers.has(n)){sassModernCompilers.set(n,e);n.hooks.shutdown.tap("sass-loader",(()=>{e.dispose()}))}}return sassModernCompilers.get(n).compileStringAsync(o,r)}return t.compileStringAsync(o,r)}}return e=>new Promise(((s,n)=>{t.render(e,((e,t)=>{if(e){n(e);return}s(t)}))}))}if(s.api==="modern"||s.api==="modern-compiler"){throw new Error("Modern API is not supported for 'node-sass'")}if(nodeSassJobQueue===null){const e=Number(process.env.UV_THREADPOOL_SIZE||4);const s=__nccwpck_require__(175);nodeSassJobQueue=s.queue(t.render.bind(t),e-1)}return e=>new Promise(((t,s)=>{nodeSassJobQueue.push.bind(nodeSassJobQueue)(e,((e,n)=>{if(e){s(e);return}t(n)}))}))}const ABSOLUTE_SCHEME=/^[A-Za-z0-9+\-.]+:/;function getURLType(e){if(e[0]==="/"){if(e[1]==="/"){return"scheme-relative"}return"path-absolute"}if(IS_NATIVE_WIN32_PATH.test(e)){return"path-absolute"}return ABSOLUTE_SCHEME.test(e)?"absolute":"path-relative"}function normalizeSourceMap(e,t){const s=e;if(typeof s.file!=="undefined"){delete s.file}s.sourceRoot="";s.sources=s.sources.map((e=>{const s=getURLType(e);if(s==="absolute"&&/^file:/i.test(e)){return _url.default.fileURLToPath(e)}else if(s==="path-relative"){return _path.default.resolve(t,_path.default.normalize(e))}return e}));return s}function errorFactory(e){let t;if(e.formatted){t=e.formatted.replace(/^Error: /,"")}else{({message:t}=e)}const s=new Error(t,{cause:e});s.stack=null;return s}},175:function(e){e.exports=require("next/dist/compiled/neo-async")},17:function(e){e.exports=require("path")},438:function(e){e.exports=require("sass")},310:function(e){e.exports=require("url")},132:function(e){e.exports=JSON.parse('{"title":"Sass Loader options","type":"object","properties":{"implementation":{"description":"The implementation of the sass to be used.","link":"https://github.com/webpack-contrib/sass-loader#implementation","anyOf":[{"type":"string"},{"type":"object"}]},"api":{"description":"Switch between old and modern API for `sass` (`Dart Sass`) and `Sass Embedded` implementations.","link":"https://github.com/webpack-contrib/sass-loader#sassoptions","enum":["legacy","modern","modern-compiler"]},"sassOptions":{"description":"Options for `node-sass` or `sass` (`Dart Sass`) implementation.","link":"https://github.com/webpack-contrib/sass-loader#sassoptions","anyOf":[{"type":"object","additionalProperties":true},{"instanceof":"Function"}]},"additionalData":{"description":"Prepends/Appends `Sass`/`SCSS` code before the actual entry file.","link":"https://github.com/webpack-contrib/sass-loader#additionaldata","anyOf":[{"type":"string"},{"instanceof":"Function"}]},"sourceMap":{"description":"Enables/Disables generation of source maps.","link":"https://github.com/webpack-contrib/sass-loader#sourcemap","type":"boolean"},"webpackImporter":{"description":"Enables/Disables default `webpack` importer.","link":"https://github.com/webpack-contrib/sass-loader#webpackimporter","type":"boolean"},"warnRuleAsWarning":{"description":"Treats the \'@warn\' rule as a webpack warning.","link":"https://github.com/webpack-contrib/sass-loader#warnruleaswarning","type":"boolean"}},"additionalProperties":false}')}};var __webpack_module_cache__={};function __nccwpck_require__(e){var t=__webpack_module_cache__[e];if(t!==undefined){return t.exports}var s=__webpack_module_cache__[e]={exports:{}};var n=true;try{__webpack_modules__[e](s,s.exports,__nccwpck_require__);n=false}finally{if(n)delete __webpack_module_cache__[e]}return s.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__=__nccwpck_require__(246);module.exports=__webpack_exports__})();