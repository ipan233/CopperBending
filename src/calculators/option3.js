import { getR, K, toRad, toDeg, calcBD } from './utils.js'

/**
 * 方案3：斜面弯（两折弯点，角度不同）
 * 输入: { L, h, L1, L2, T }
 */
export function calculate({ L, h, L1, L2, T }) {
  const R = getR(T)
  if (R === null) throw new Error('不支持的铜排厚度 T，仅支持 T≤6、8~10、12~15')

  const L3 = Math.sqrt((L - L1) ** 2 + (h - L2) ** 2)
  const theta_rad = Math.atan((h - L2) / (L - L1))
  const alpha = 180 - toDeg(theta_rad)
  const beta  = 90  + toDeg(theta_rad)

  const BDa = calcBD(alpha, R, T)
  const BDb = calcBD(beta,  R, T)

  const L展 = L1 + L3 + L2 - BDa - BDb

  const M1 = L1 + (0.5 * (R + K * T) - (R + T)) * Math.tan(toRad((180 - alpha) / 2))
  const M2 = L展 - (0.5 * (R + K * T) - (R + T)) * Math.tan(toRad((180 - beta)  / 2))

  return [
    { label: '折弯内角 α',        value: alpha, unit: '°' },
    { label: '折弯内角 β',        value: beta,  unit: '°' },
    { label: '折弯扣除数 BD1',    value: BDa },
    { label: '折弯扣除数 BD2',    value: BDb },
    { label: '折弯内径 R',        value: R },
    { label: '铜排展开长度 L展',  value: L展 },
    { label: '第一折弯线位置 M1', value: M1 },
    { label: '第二折弯线位置 M2', value: M2 },
  ]
}
