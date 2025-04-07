function selectOption(option) {
    const inputOutputArea = document.getElementById('input-output-area');
    inputOutputArea.innerHTML = ''; // 清空之前的内容

    if (option === 1) {
        inputOutputArea.innerHTML = `
            <div class="input-section">
                <h2>方案1 输入变量</h2>
                <label>水平总长度 L:</label><input type="number" id="L"><br>
                <label>垂直总长度 h:</label><input type="number" id="h"><br>
                <label>左端到第一尖点 L1:</label><input type="number" id="L1"><br>
                <label>第二尖点到右端 L2:</label><input type="number" id="L2"><br>
                <label>铜排厚度 T:</label><input type="number" id="T"><br>
                <button onclick="calculateOption1()">计算</button>
            </div>
            <div class="output-section">
                <h2>方案1 输出变量</h2>
                <label>折弯内角 α:</label><input type="text" id="alpha" class="output-value" readonly><br>
                <label>折弯扣除数 BD:</label><input type="text" id="BD" class="output-value" readonly><br>
                <label>折弯内径 R:</label><input type="text" id="R" class="output-value" readonly><br>
                <label>铜排展开长度 L展:</label><input type="text" id="L展" class="output-value" readonly><br>
                <label>第一折弯线位置 M1:</label><input type="text" id="M1" class="output-value" readonly><br>
                <label>第二折弯线位置 M2:</label><input type="text" id="M2" class="output-value" readonly><br>
            </div>
        `;
    }
    // 其他方案的输入输出逻辑...
}

function calculateOption1() {
    const L = parseFloat(document.getElementById('L').value);
    const h = parseFloat(document.getElementById('h').value);
    const L1 = parseFloat(document.getElementById('L1').value);
    const L2 = parseFloat(document.getElementById('L2').value);
    const T = parseFloat(document.getElementById('T').value);

    let R;
    if (T <= 6) {
        R = 12;
    } else if (T >= 8 && T <= 10) {
        R = 16;
    } else if (T >= 12 && T <= 15) {
        R = 20;
    } else {
        alert("不支持的铜排厚度T");
        return;
    }

    let term1 = (L - L1 - L2) * h - T * Math.sqrt((L - L1 - L2) ** 2 + h ** 2 - T ** 2);
    let term2 = (L - L1 - L2) ** 2 - T ** 2;
    let theta = Math.atan(term1 / term2) * (180 / Math.PI);
    let alpha = 180 - theta;

    let K = 0.5;
    let SB = (R + K * T) * Math.tan((theta / 2) * (Math.PI / 180));
    let SB2 = (R + T) * Math.tan((theta / 2) * (Math.PI / 180));
    let BA = (theta * Math.PI / 180) * (R + K * T);
    let BD = 2 * SB - BA;

    let L_total = (L1 - SB2 + SB) + Math.sqrt((L - (L1 - SB2 + SB) - (L2 - SB2 + SB)) ** 2 + (h - T) ** 2) + (L2 - SB2 + SB);
    let L展 = L_total - 2 * BD;

    let M1 = L1 - SB2 + SB;
    let M2 = M1 + (L - (L1 - SB2 + SB) - (L2 - SB2 + SB));

    // 显示输出变量
    document.getElementById('alpha').value = alpha.toFixed(2);
    document.getElementById('BD').value = BD.toFixed(2);
    document.getElementById('R').value = R;
    document.getElementById('L展').value = L展.toFixed(2);
    document.getElementById('M1').value = M1.toFixed(2);
    document.getElementById('M2').value = M2.toFixed(2);
}

// 其他方案的计算逻辑...
