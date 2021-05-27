/* eslint-disable @typescript-eslint/unbound-method */
import { useCallback, useEffect, useRef } from 'react'

// максимальное время между вводом символов
const TIME_THRESHOLD = 50
// минимальная длина строки, чтобы считать ввод - вводом со сканера
const STR_LENGTH_THRESHOLD = 4

/**
 * При активном режиме считывает весь ввод с клавиатуры
 * и записывает его в строку.
 * При вводе 'Enter' собранная строка отправляется в обработчик и сбрасывается
 * с готовностью принять следующий ввод
 */
const useBarcodeScanner = ({
  isActive = true,
  onEnter,
  disableInputSetter,
}: {
  isActive?: boolean
  onEnter: (value: string) => void
  /** Не вставлять считанную строку в зафокусированный инпут */
  disableInputSetter?: boolean
}) => {
  const timer = useRef<number>()
  const inputValue = useRef('')

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault()
      clearTimeout(timer.current)
      const { key } = e

      // завершающий ввод со сканера
      if (inputValue.current.length >= STR_LENGTH_THRESHOLD && key === 'Enter') {
        onEnter(inputValue.current)
        inputValue.current = ''
        return
      }

      /* eslint-disable @typescript-eslint/unbound-method */
      timer.current = setTimeout(() => {
        if (!disableInputSetter && 'value' in (document.activeElement as any)) {
          const inputHtml = document.activeElement as HTMLInputElement
          const tag = inputHtml.tagName.toLowerCase()
          let nativeInputValueSetter: ((v: any) => void) | undefined

          switch (tag) {
            case 'input':
              nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set
              break
            case 'textarea':
              nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')
                ?.set
              break
            default:
          }

          const oldSelectionStart = inputHtml.selectionStart || 0
          const oldSelectionEnd = inputHtml.selectionEnd || 0

          const cursorLengthFromTheEnd = inputHtml.value.length - oldSelectionEnd
          const newValue = `${inputHtml.value.slice(0, oldSelectionStart)}${inputValue.current}${inputHtml.value.slice(
            oldSelectionEnd
          )}`

          // ставим новое значение в инпут
          nativeInputValueSetter?.call(inputHtml, newValue)

          // устанавливаем курсор в нужное место в новой строке
          inputHtml.selectionStart = newValue.length - cursorLengthFromTheEnd
          inputHtml.selectionEnd = inputHtml.selectionStart

          // trigger onChange
          const ev2 = new Event('input', { bubbles: true })
          inputHtml.dispatchEvent(ev2)
        }

        inputValue.current = ''
      }, TIME_THRESHOLD)
      /* eslint-enable @typescript-eslint/unbound-method */

      inputValue.current += key
    },
    [timer, inputValue, onEnter]
  )

  useEffect(() => {
    if (isActive) {
      window.addEventListener('keypress', handleKeyDown)
    }

    return () => window.removeEventListener('keypress', handleKeyDown)
  }, [isActive, handleKeyDown])
}

export default useBarcodeScanner
