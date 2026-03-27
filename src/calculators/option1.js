import { getR, K, toRad, toDeg, calcBD } from './utils.js'

/**
 * 方案1：水平弯（两折弯点，有垂直偏移）
 * 输入: { L, h, L1, L2, T }
 */
export function calculate({ L, h, L1, L2, T }) {
  const R = getR(T)
  if (R === null) throw new Error('不支持的铜排厚度 T，仅支持 T≤6、8~10、12~15')

  const dL = L - L1 - L2
  const dH = h - T
  const theta_rad = 2 * Math.atan(
    (-dL + Math.sqrt(dL ** 2 + dH ** 2 + 4 * K * T * dH)) /
    (dH + 4 * K * T)
  )
  const theta = toDeg(theta_rad)
  const alpha = 180 - theta
  const BD = calcBD(alpha, R, T)

  const L斜 = dH / Math.sin(theta_rad) -
    2 * Math.tan(theta_rad / 2) * (R + K * T)

  const L展 = L1 + L2 +
    2 * Math.tan(theta_rad / 2) * (R + T) + L斜 - 2 * BD

  const M1 = L1 - BD / 2
  const M2 = L展 - (L2 - BD / 2)

  return [
    { label: '折弯内角 α',       value: alpha, unit: '°' },
    { label: '折弯扣除数 BD',    value: BD },
    { label: '折弯内径 R',       value: R },
    { label: '铜排展开长度 L展', value: L展 },
    { label: '第一折弯线位置 M1', value: M1 },
    { label: '第二折弯线位置 M2', value: M2 },
  ]
}
