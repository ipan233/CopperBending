# Copper Bending 铜排折弯展开计算
本项目主要针对铜排折弯的平弯，目前有5种常见折弯图形。其他特殊图形一般都可以分解成这几种。如有特殊图形，可以提[issue](https://github.com/ipan233/CopperBending/issues)。
### 注意：
1. 本项目方案图形标注尺寸位置为外尺寸！
2. 折弯半径与折弯设备有关，目前是不可自定义的，如果有自定义的需求，欢迎提出。

## 方案一的铜排折弯倾斜角θ推导过程

根据方程 
$$
h - T = \left(L - L1 - L2 + 2KT\tan\frac{\theta}{2}\right)\tan\theta
$$
推导出 θ 的表达式如下：

**步骤解析：**

1. **变量替换**：
   $$
   令 x = \tan\frac{\theta}{2}，则 tan\theta = \frac{2x}{1 - x^2}
   $$
2. **代入方程**：将替换后的tan θ代入原方程：
   $$
   h - T = \left(L - L1 - L2 + 2KTx\right) \cdot \frac{2x}{1 - x^2}
   $$
3. **整理方程**：两边乘以 \(1 - x^2\) 并展开，得到二次方程：
   $$
   (h - T + 4KT)x^2 + 2(L - L1 - L2)x - (h - T) = 0
   $$
4. **求根公式**：应用二次方程求根公式解得 x：
   $$
   x = \frac{-(L - L1 - L2) \pm \sqrt{(L - L1 - L2)^2 + (h - T)^2 + 4KT(h - T)}}{h - T + 4KT}
   $$
   
5. **反解角度**：由于 
   $$
   x = \tan\frac{\theta}{2}
   $$
   故：
   $$
   \theta = 2\arctan\left( \frac{-(L - L1 - L2) + \sqrt{(L - L1 - L2)^2 + (h - T)^2 + 4KT(h - T)}}{h - T + 4KT} \right)
   $$
   

**最终公式：**
$$
\theta = 2\arctan\left( \frac{-(L - L1 - L2) + \sqrt{(L - L1 - L2)^2 + (h - T)^2 + 4KT(h - T)}}{h - T + 4KT} \right)
$$