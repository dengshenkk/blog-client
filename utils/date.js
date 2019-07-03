/**
 * 格式化日期时间
 * @param value
 * @param type
 * @returns {*}
 */
export function formatDate(value, type = 'yyyy-MM-DD HH:mm:ss') {
  if (!value) {
    return new Error('value be required')
  }

  let date = new Date(value)
  let Y = date.getFullYear()
  let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  let D = date.getDay() < 10 ? '0' + date.getDay() : date.getDay()
  let H = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  let types = {
    'yyyy-MM-DD HH:mm:ss': `${Y}-${M}-${D} ${H}:${m}:${s}`,
    'yyyy-MM-DD': `${Y}-${M}-${D}`,
    'HH:mm:ss': `${H}:${m}:${s}`
  }
  return types[type]
}
