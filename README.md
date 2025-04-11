# CopperBending 铜排折弯展开计算
本项目主要针对铜排折弯的平弯，目前有5种常见折弯图形。其他特殊图形一般都可以分解成这几种。如有特殊图形，可以提[issue](https://github.com/ipan233/CopperBending/issues)。
### 注意：
1. 本项目方案图形标注尺寸位置为外尺寸！
2. 折弯半径与折弯设备有关，目前是不可自定义的，如果有自定义的需求，欢迎提出。

h - T = \left(L - L1 - L2 + 2KT\tan\frac{\theta}{2}\right)\tan\theta

\[
x = \frac{-(L - L1 - L2) \pm \sqrt{(L - L1 - L2)^2 + (h - T)^2 + 4KT(h - T)}}{h - T + 4KT}
\]
