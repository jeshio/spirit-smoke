function base64ToArrayBuffer(base64: string) {
  const binaryString = window.atob(base64)
  const binaryLen = binaryString.length
  const bytes = new Uint8Array(binaryLen)
  for (let i = 0; i < binaryLen; i += 1) {
    const ascii = binaryString.charCodeAt(i)
    bytes[i] = ascii
  }
  return bytes
}

const saveByteArray = (() => {
  const a = document.createElement('a')
  document.body.appendChild(a)
  a.style.display = 'none'

  return (data: Uint8Array[], name: string) => {
    const blob = new Blob(data, { type: 'octet/stream' })
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = name
    a.click()
    window.URL.revokeObjectURL(url)
  }
})()

const downloadBase64 = (base64: string, filename: string) => {
  const sampleBytes = base64ToArrayBuffer(base64)
  saveByteArray([sampleBytes], filename)
}

export default downloadBase64
