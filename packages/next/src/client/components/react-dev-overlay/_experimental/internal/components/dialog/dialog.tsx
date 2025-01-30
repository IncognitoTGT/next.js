import * as React from 'react'
import { useOnClickOutside } from '../../hooks/use-on-click-outside'

export type DialogProps = {
  children?: React.ReactNode
  type: 'error' | 'warning'
  'aria-labelledby': string
  'aria-describedby': string
  className?: string
  onClose?: () => void
}

const CSS_SELECTORS_TO_EXCLUDE_ON_CLICK_OUTSIDE = [
  '[data-next-mark]',
  '[data-issues-open]',
  '#nextjs-dev-tools-menu',
]

const Dialog: React.FC<DialogProps> = function Dialog({
  children,
  type,
  className,
  onClose,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  ...props
}) {
  const [dialog, setDialog] = React.useState<HTMLDivElement | null>(null)
  const [role, setRole] = React.useState<string | undefined>(
    typeof document !== 'undefined' && document.hasFocus()
      ? 'dialog'
      : undefined
  )
  const onDialog = React.useCallback((node: HTMLDivElement | null) => {
    setDialog(node)
  }, [])

  useOnClickOutside(dialog, CSS_SELECTORS_TO_EXCLUDE_ON_CLICK_OUTSIDE, (e) => {
    e.preventDefault()
    return onClose?.()
  })

  const ref = React.useRef<HTMLDivElement | null>(null)
  const [height, pristine] = useMeasureHeight(ref)

  // Make HTMLElements with `role=link` accessible to be triggered by the
  // keyboard, i.e. [Enter].
  React.useEffect(() => {
    if (dialog == null) {
      return
    }

    const root = dialog.getRootNode()
    // Always true, but we do this for TypeScript:
    if (!(root instanceof ShadowRoot)) {
      return
    }
    const shadowRoot = root
    function handler(e: KeyboardEvent) {
      const el = shadowRoot.activeElement
      if (
        e.key === 'Enter' &&
        el instanceof HTMLElement &&
        el.getAttribute('role') === 'link'
      ) {
        e.preventDefault()
        e.stopPropagation()

        el.click()
      }
    }

    function handleFocus() {
      // safari will force itself as the active application when a background page triggers any sort of autofocus
      // this is a workaround to only set the dialog role if the document has focus
      setRole(document.hasFocus() ? 'dialog' : undefined)
    }

    shadowRoot.addEventListener('keydown', handler as EventListener)
    window.addEventListener('focus', handleFocus)
    window.addEventListener('blur', handleFocus)
    return () => {
      shadowRoot.removeEventListener('keydown', handler as EventListener)
      window.removeEventListener('focus', handleFocus)
      window.removeEventListener('blur', handleFocus)
    }
  }, [dialog])

  return (
    <div
      ref={onDialog}
      data-nextjs-dialog
      tabIndex={-1}
      role={role}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-modal="true"
      className={className}
      {...props}
      // [x] dont animate on initial load
      // [x] no duplicate dom
      // [x] responds to overflow growth
      style={{
        height,
        ...(!pristine && {
          transition: 'height 250ms var(--timing-swift)',
        }),
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  )
}

export { Dialog }

function useMeasureHeight(
  ref: React.RefObject<HTMLDivElement | null>
): [number, boolean] {
  const [pristine, setPristine] = React.useState<boolean>(true)
  const [height, setHeight] = React.useState<number>(0)

  React.useEffect(() => {
    const el = ref.current

    if (!el) {
      return
    }

    const observer = new ResizeObserver(() => {
      const { height: h } = el.getBoundingClientRect()
      setHeight((prevHeight) => {
        if (prevHeight !== 0) {
          setPristine(false)
        }
        return h
      })
    })

    observer.observe(el)
    return () => {
      observer.disconnect()
      setPristine(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [height, pristine]
}
