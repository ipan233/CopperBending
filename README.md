# Copper Bending 铜排折弯展开计算

本项目主要针对铜排折弯的平弯，目前有 4 种常见折弯图形。其他特殊图形一般都可以分解成这几种。如有特殊图形，可以提 [issue](https://github.com/ipan233/CopperBending/issues)。

### 在线工具地址：[Copper Bending](https://copper-bending.vercel.app/)

---

## 注意事项

1. 本项目方案图形标注尺寸位置为**外尺寸**。
2. 折弯半径与折弯设备有关，目前不可自定义；如有需求欢迎提 issue。
3. 所有尺寸单位均为 **mm**，角度单位为 **°（度）**。

---

## 通用参数说明

| 符号 | 含义 |
|------|------|
| T | 铜排厚度 |
| R | 折弯内径（由 T 决定：T≤6 时 R=T；8≤T≤10 时 R=1.5T；12≤T≤15 时 R=2T）|
| K | 中性层系数，取 K=0.5 |
| BD | 折弯扣除数（Bend Deduction） |
| α / β | 折弯内角（折弯后两段之间的夹角）|
| L展 | 铜排展开总长度 |
| M | 折弯线位置（从展开料一端量起）|

折弯扣除数公式：

![BD公式](https://latex.codecogs.com/png.image?\dpi{130}BD=2(R+T)\tan\frac{\alpha}{2}-\frac{\pi(R+KT)(180^\circ-\alpha)}{180^\circ})

---

## 方案一：水平偏移弯（双折弯）

**适用场景：** 铜排在同一平面内产生水平偏移，两端平行，有垂直高度差 h。

**输入参数：** L（水平总长）、h（垂直总长）、L1（第一尖点）、L2（第二尖点）、T（铜排厚度）

### 折弯角 θ 的推导过程

根据斜段的几何约束，斜段的垂直投影等于 h-T，水平投影等于斜段长度乘以 cosθ，建立方程：

![方案一原始方程](https://latex.codecogs.com/png.image?\dpi{130}h-T=\left(L-L_1-L_2+2KT\tan\frac{\theta}{2}\right)\tan\theta)

**步骤一：变量替换**

令 ![x定义](https://latex.codecogs.com/png.image?\dpi{130}x=\tan\dfrac{\theta}{2})，利用二倍角公式：

![二倍角](https://latex.codecogs.com/png.image?\dpi{130}\tan\theta=\frac{2x}{1-x^2})

**步骤二：代入方程**

![代入后](https://latex.codecogs.com/png.image?\dpi{130}h-T=\left(L-L_1-L_2+2KTx\right)\cdot\frac{2x}{1-x^2})

**步骤三：两边乘以 (1-x²) 并展开，整理为一元二次方程**

令 dL = L-L1-L2，dH = 
 h-T，则方程化为：

![二次方程](https://latex.codecogs.com/png.image?\dpi{130}(dH+4KT)x^2+2\cdot%20dL\cdot%20x-dH=0)

**步骤四：用求根公式解 x（取正根）**

![求根](https://latex.codecogs.com/png.image?\dpi{130}x=\frac{-dL+\sqrt{dL^2+dH^2+4KT\cdot%20dH}}{dH+4KT})

**步骤五：反解角度**

![最终角度](https://latex.codecogs.com/png.image?\dpi{130}\theta=2\arctan\left(\frac{-(L-L_1-L_2)+\sqrt{(L-L_1-L_2)^2+(h-T)^2+4KT(h-T)}}{h-T+4KT}\right))

### 展开计算

- 折弯内角：α = 180° - θ
- 斜段真实长度：

![L斜](https://latex.codecogs.com/png.image?\dpi{130}L_{\text{斜}}=\frac{h-T}{\sin\theta}-2\tan\frac{\theta}{2}(R+KT))

- 展开总长：

![L展1](https://latex.codecogs.com/png.image?\dpi{130}L_{\text{展}}=L_1+L_2+2\tan\frac{\theta}{2}(R+T)+L_{\text{斜}}-2\cdot%20BD)

- 折弯线位置：M1 = L1 - BD/2，M2 = L展 - (L2 - BD/2)

---

## 方案二：L 形弯（单折弯）

**适用场景：** 铜排只有一处折弯，折后两段成一定夹角，整体呈 L 形。

**输入参数：** L（水平总长）、L1（第一尖点）、L2（第二尖点）、T（铜排厚度）

### 折弯角 θ 的推导过程

铜排折弯后，第二段（外尺寸长度为 L2）的水平投影等于 L - L1，即：

![方案二几何](https://latex.codecogs.com/png.image?\dpi{130}L_2\cos\theta=L-L_1)

因此直接反解：

![方案二角度](https://latex.codecogs.com/png.image?\dpi{130}\theta=\arccos\frac{L-L_1}{L_2})

折弯内角：

![方案二内角](https://latex.codecogs.com/png.image?\dpi{130}\alpha=180^\circ-\theta)

### 展开计算

- 展开总长：

![方案二L展](https://latex.codecogs.com/png.image?\dpi{130}L_{\text{展}}=L_1+L_2-BD)

- 折弯线位置：M1 = L展 / 2

---

## 方案三：斜面偏移弯（双折弯，两角不同）

**适用场景：** 铜排两端不平行，经过两次不同角度的折弯，形成带斜面的偏移形态。

**输入参数：** L（水平总长）、h（垂直总长）、L1（第一尖点）、L2（第二尖点）、T（铜排厚度）

### 折弯角推导过程

**步骤一：由勾股定理求斜段长度 L3**

![L3](https://latex.codecogs.com/png.image?\dpi{130}L_3=\sqrt{(L-L_1)^2+(h-L_2)^2})

**步骤二：斜段与水平方向的夹角 θ**

![theta3](https://latex.codecogs.com/png.image?\dpi{130}\theta=\arctan\frac{h-L_2}{L-L_1})

**步骤三：两处折弯内角**

第一处折弯位于水平段与斜段之间，斜段上扬角为 θ，折弯内角为：

![alpha3](https://latex.codecogs.com/png.image?\dpi{130}\alpha=180^\circ-\theta)

第二处折弯位于斜段与垂直段之间。斜段已相对水平面倾斜 θ，垂直段与水平面成 90°，两段夹角为 90°-θ，故折弯内角为：

![beta3](https://latex.codecogs.com/png.image?\dpi{130}\beta=180^\circ-(90^\circ-\theta)=90^\circ+\theta)

### 展开计算

- 分别对 α、β 计算折弯扣除数 BD1（对应 α）、BD2（对应 β）
- 展开总长：

![方案三L展](https://latex.codecogs.com/png.image?\dpi{130}L_{\text{展}}=L_1+L_3+L_2-BD_1-BD_2)

- 折弯线位置（从中性层偏移量推算）：

![M1_3](https://latex.codecogs.com/png.image?\dpi{130}M_1=L_1-\left[(R+T)-\frac{R+KT}{2}\right]\tan\frac{180^\circ-\alpha}{2})

![M2_3](https://latex.codecogs.com/png.image?\dpi{130}M_2=L_{\text{展}}-\left\{L_2-\left[(R+T)-\frac{R+KT}{2}\right]\tan\frac{180^\circ-\beta}{2}\right\})

---

## 方案四：斜向偏移弯 + 直角弯（三折弯组合）

**适用场景：** 铜排先经过一段竖向斜向偏移弯（方案一的旋转版），再接一个标准 90° 直角弯，整体呈复合弯形。

**输入参数：** L1（水平总长）、L2（水平宽度）、h（垂直总长）、h1（第一段垂直长）、h2（中间段垂直长）、T（铜排厚度）

---

### 第一部分：斜向偏移弯

此部分为方案一的竖向版本，水平与垂直方向对调。令：

![dH_dL定义](https://latex.codecogs.com/png.image?\dpi{130}dH=h-h_1-h_2,\quad%20dL=L_2-T)

几何约束方程（斜段的水平投影等于 dL）：

![方案四原始方程](https://latex.codecogs.com/png.image?\dpi{130}dL=\left(dH+2KT\tan\frac{\theta}{2}\right)\tan\theta)

与方案一推导完全对称，令 x = tan(θ/2)，同理整理得二次方程：

![方案四二次方程](https://latex.codecogs.com/png.image?\dpi{130}(dL+4KT)x^2+2\cdot%20dH\cdot%20x-dL=0)

解得（取正根）：

![方案四theta](https://latex.codecogs.com/png.image?\dpi{130}\theta=2\arctan\left(\frac{-dH+\sqrt{dH^2+dL^2+4KT\cdot%20dL}}{dL+4KT}\right))

- 折弯内角：α = 180° - θ
- 斜段真实长度：

![方案四L斜](https://latex.codecogs.com/png.image?\dpi{130}L_{\text{斜}}=\frac{dL}{\sin\theta}-2\tan\frac{\theta}{2}(R+KT))

- 第一部分展开长：

![方案四L展1](https://latex.codecogs.com/png.image?\dpi{130}L_{\text{展1}}=h_1+\frac{h_2}{2}+2\tan\frac{\theta}{2}(R+T)+L_{\text{斜}}-2\cdot%20BD)

- 折弯线位置：

![方案四M1M2](https://latex.codecogs.com/png.image?\dpi{130}M_1=h_1-\frac{BD}{2},\quad%20M_2=L_{\text{展1}}-\left(\frac{h_2}{2}-\frac{BD}{2}\right))

---

### 第二部分：标准 90° 直角弯

直角弯弧长采用中性层弧长公式：

![方案四L展2](https://latex.codecogs.com/png.image?\dpi{130}L_{\text{展2}}=L_1+\frac{h_2}{2}-2(R+T)+\frac{\pi(R+KT)}{2})

- 第三折弯线位置：

![方案四M3](https://latex.codecogs.com/png.image?\dpi{130}M_3=L_{\text{展1}}+\frac{h_2}{2}-(R+T)+\frac{\pi(R+KT)}{4})

---

### 汇总

- 铜排展开总长：

![方案四L展总](https://latex.codecogs.com/png.image?\dpi{130}L_{\text{展}}=L_{\text{展1}}+L_{\text{展2}})

- 共三条折弯线：M1（偏移弯第一折）、M2（偏移弯第二折）、M3（直角弯）

---

## 贡献与反馈

如发现计算误差或有新方案需求，欢迎提 [issue](https://github.com/ipan233/CopperBending/issues) 或提交 PR。
