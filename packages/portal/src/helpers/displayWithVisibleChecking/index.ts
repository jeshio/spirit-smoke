import { display, DisplayProps } from 'styled-system'

export interface DisplayWithVisibleCheckingProps {
  visible?: boolean | boolean[]
}

export default function displayWithVisibleChecking({
  visible,
  ...props
}: DisplayWithVisibleCheckingProps & DisplayProps) {
  if (visible === false) {
    return 'display: none'
  }

  if (Array.isArray(visible)) {
    const _display = props.display
    const newDisplayProp = [...visible].map((v, i) =>
      v ? (Array.isArray(_display) ? _display[i] || _display[_display.length - 1] : _display) : 'none !important'
    )
    return display({
      ...props,
      display: [...newDisplayProp, ...(Array.isArray(_display) ? _display.slice(newDisplayProp.length) : [])],
    })
  }

  return display(props)
}
