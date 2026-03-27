export const K = 0.5

/**
 * 根据铜排厚度 T 查找折弯内径 R
 * @param {number} T
 * @returns {number|null} R，不支持时返回 null
 */
export function getR(T) {
  if (T <= 6)                  return 12
  if (T >= 8  && T <= 10)      return 16
  if (T >= 12 && T <= 15)      return 20
  return null
}

/** 角度转弧度 */
export const toRad = (deg) => deg * (Math.PI / 180)

/** 弧度转角度 */
export const toDeg = (rad) => rad * (180 / Math.PI)

/**
 * 通用折弯扣除数（外尺寸）
 * @param {number} alpha - 折弯内角（度）
 * @param {number} R     - 折弯内径
 * @param {number} T     - 铜排厚度
 * @returns {number}
 */
export function calcBD(alpha, R, T) {
  const innerAngle = 180 - alpha
  return (
    2 * (R + T) * Math.tan(toRad(innerAngle / 2)) -
    toRad(innerAngle) * (R + K * T)
  )
}
