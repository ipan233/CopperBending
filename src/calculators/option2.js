import { getR, K, toRad, toDeg, calcBD } from './utils.js'

/**
 * 方案2：L 形弯（单折弯点）
 * 输入: { L, L1, L2, T }
 */
export function calculate({ L, L1, L2, T }) {
  const R = getR(T)
  if (R === null) throw new Error('不支持的铜排厚度 T，仅支持 T≤6、8~10、12~15')

  const theta_rad = Math.acos((L - L1) / L2)
  const alpha = 180 - toDeg(theta_rad)
  const BD = calcBD(alpha, R, T)

  const L展 = L1 + L2 - BD
  const M1 = L展 / 2

  return [
    { label: '折弯内角 α',       value: alpha, unit: '°' },
    { label: '折弯扣除数 BD',    value: BD },
    { label: '折弯内径 R',       value: R },
    { label: '铜排展开长度 L展', value: L展 },
    { label: '第一折弯线位置 M1', value: M1 },
  ]
}
