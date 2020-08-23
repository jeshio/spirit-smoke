/**
 * Преобразует значение цены к числу с 2-мя цифрами после запятой
 * @param value цена
 */
module.exports = function numberToPrice(value) {
  console.log('numberToPrice');
  return (typeof value === 'number'
    ? parseFloat(value.toFixed(2))
    : value)
}