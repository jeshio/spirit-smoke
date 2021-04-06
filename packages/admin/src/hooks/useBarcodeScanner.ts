import { useCallback, useEffect, useState } from 'react'

/**
 * При активном режиме считывает весь ввод с клавиатуры
 * и записывает его в строку.
 * При вводе 'Enter' собранная строка отправляется в обработчик и сбрасывается
 * с готовностью принять следующий ввод
 */
const useBarcodeScanner = ({ isActive, onEnter }: { isActive: boolean; onEnter: (value: string) => void }) => {
  const [currentScannerString, setCurrentScannerString] = useState('')

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      e.preventDefault()
      const { key } = e

      if (key === 'Enter') {
        onEnter(currentScannerString)
        setCurrentScannerString('')
        return
      }

      setCurrentScannerString((prev) => `${prev}${key}`)
    },
    [onEnter, setCurrentScannerString, currentScannerString]
  )

  useEffect(() => {
    if (isActive) {
      window.addEventListener('keypress', handleKeyDown)
    }

    return () => window.removeEventListener('keypress', handleKeyDown)
  }, [isActive, handleKeyDown])
}

export default useBarcodeScanner
