# Copper Bending 铜排折弯展开计算
本项目主要针对铜排折弯的平弯，目前有4种常见折弯图形。其他特殊图形一般都可以分解成这几种。如有特殊图形，可以提[issue](https://github.com/ipan233/CopperBending/issues)。
### 注意：
1. 本项目方案图形标注尺寸位置为外尺寸！

2. 折弯半径与折弯设备有关，目前是不可自定义的，如果有自定义的需求，欢迎提出。

#   

## 方案一的铜排折弯倾斜角θ推导过程

根据方程 

![公式](https://latex.codecogs.com/png.image?\dpi{130}h%20-%20T%20=%20\left(L%20-%20L1%20-%20L2%20+%202KT\tan\frac{\theta}{2}\right)\tan\theta)

推导出 θ 的表达式如下：

**步骤解析：**

1. **变量替换**：

![公式](https://latex.codecogs.com/png.image?\dpi{130}x%20=%20\tan\frac{\theta}{2},%20%5Cquad%20\tan\theta%20=%20\frac{2x}{1%20-%20x^2})

2. **代入方程**：将替换后的tan θ代入原方程：

![公式](https://latex.codecogs.com/png.image?\dpi{130}h%20-%20T%20=%20\left(L%20-%20L1%20-%20L2%20+%202KTx\right)\cdot\frac{2x}{1%20-%20x^2})

3. **整理方程**：两边乘以 \(1 - x^2\) 并展开，得到二次方程：

![公式](https://latex.codecogs.com/png.image?\dpi{130}(h%20-%20T%20+%204KT)x^2%20+%202(L%20-%20L1%20-%20L2)x%20-%20(h%20-%20T)%20=%200)

4. **求根公式**：应用二次方程求根公式解得 x：

![公式](https://latex.codecogs.com/png.image?\dpi{130}x%20=%20\frac{-(L%20-%20L1%20-%20L2)\%20\pm\%20\sqrt{(L%20-%20L1%20-%20L2)^2%20+%20(h%20-%20T)^2%20+%204KT(h%20-%20T)}}{h%20-%20T%20+%204KT})
   
5. **反解角度**：由于 

![公式](https://latex.codecogs.com/png.image?\dpi{130}x%20=%20\tan\frac{\theta}{2})

**故，最终公式：**

![公式](https://latex.codecogs.com/png.image?\dpi{130}\theta%20=%202\arctan\left(\frac{-(L%20-%20L1%20-%20L2)%20+%20\sqrt{(L%20-%20L1%20-%20L2)^2%20+%20(h%20-%20T)^2%20+%204KT(h%20-%20T)}}{h%20-%20T%20+%204KT}\right))

