import { getR, K, toRad, calcBD } from './utils.js'

/**
 * 方案4：水平弯 + 直角弯组合
 * 图形在 h2 中间处一分为二：上半部分为水平弯，下半部分为直角弯
 * 输入: { L1, L2, h, h1, h2, T }
 */
export function calculate({ L1, L2, h, h1, h2, T }) {
  const R = getR(T)
  if (R === null) throw new Error('不支持的铜排厚度 T，仅支持 T≤6、8~10、12~15')

  // ---- 水平弯部分 ----
  const dH = h - h1 - h2
  const dL = L2 - T
  const theta_rad = 2 * Math.atan(
    (-dH + Math.sqrt(dH ** 2 + dL ** 2 + 4 * K * T * dL)) /
    (dL + 4 * K * T)
  )
  const alpha = 180 - (theta_rad * 180 / Math.PI)
  const BD = calcBD(alpha, R, T)

  const L斜 = dL / Math.sin(theta_rad) -
    2 * Math.tan(theta_rad / 2) * (R + K * T)

  const L展1 = h1 + h2 / 2 +
    2 * Math.tan(theta_rad / 2) * (R + T) + L斜 - 2 * BD

  const M1 = h1 - BD / 2
  const M2 = L展1 - (h2 / 2 - BD / 2)

  // ---- 直角弯部分 ----
  const L展2 = L1 + h2 / 2 - 2 * (R + T) + Math.PI * (R + K * T) / 2
  const M3   = L展1 + h2 / 2 - (R + T) + Math.PI * (R + K * T) / 4

  const L展 = L展1 + L展2

  return [
    { label: '折弯内径 R',                  value: R },
    { label: '水平弯折弯内角 α',            value: alpha, unit: '°' },
    { label: '水平弯折弯扣除数 BD',         value: BD },
    { label: '铜排展开长度 L展',            value: L展 },
    { label: '第一折弯线位置 M1（水平弯）', value: M1 },
    { label: '第二折弯线位置 M2（水平弯）', value: M2 },
    { label: '第三折弯线位置 M3（直角弯）', value: M3 },
  ]
}
