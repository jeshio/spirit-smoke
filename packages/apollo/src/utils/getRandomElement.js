export default function getRandomElement(elements) {
  const randomIndex = Math.round(Math.random() * (elements.length - 1))
  return elements[randomIndex]
}
