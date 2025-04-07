function selectOption(option) {
    const inputOutputArea = document.getElementById('input-output-area');
    inputOutputArea.innerHTML = ''; // 清空之前的内容

    if (option === 1) {
        inputOutputArea.innerHTML = `
            <h2>方案1 输入变量</h2>
            <div>
                <label>水平总长度 L:</label><input type="number" id="L" maxlength="10"><br>
                <label>垂直总长度 h:</label><input type="number" id="h" maxlength="10"><br>
                <label>左端到第一尖点 L1:</label><input type="number" id="L1" maxlength="10"><br>
                <label>第二尖点到右端 L2:</label><input type="number" id="L2" maxlength="10"><br>
                <label>铜排厚度 T:</label><input type="number" id="T" maxlength="10"><br>
            </div>
            <button onclick="calculateOption1()">计算</button>
            <div id="output"></div>
        `;
    } else if (option === 2) {
        inputOutputArea.innerHTML = `
            <h2>方案2 输入变量</h2>
            <div>
                <label>垂直总长度 h:</label><input type="number" id="h2" maxlength="10"><br>
                <label>左端到第一尖点 L1:</label><input type="number" id="L12" maxlength="10"><br>
                <label>第二尖点到右端 L2:</label><input type="number" id="L22" maxlength="10"><br>
                <label>铜排厚度 T:</label><input type="number" id="T2" maxlength="10"><br>
            </div>
            <button onclick="calculateOption2()">计算</button>
            <div id="output2"></div>
        `;
    } else if (option === 3) {
        inputOutputArea.innerHTML = `
            <h2>方案3 输入变量</h2>
            <div>
                <label>水平总长度 L:</label><input type="number" id="L3" maxlength="10"><br>
                <label>左端到第一尖点 L1:</label><input type="number" id="L13" maxlength="10"><br>
                <label>第一尖点到右端 L2:</label><input type="number" id="L23" maxlength="10"><br>
                <label>铜排厚度 T:</label><input type="number" id="T3" maxlength="10"><br>
            </div>
            <button onclick="calculateOption3()">计算</button>
            <div id="output3"></div>
        `;
    } else if (option === 4) {
        inputOutputArea.innerHTML = `
            <h2>方案4 输入变量</h2>
            <div>
                <label>水平总长度 L:</label><input type="number" id="L4" maxlength="10"><br>
                <label>垂直总长度 h:</label><input type="number" id="h4" maxlength="10"><br>
                <label>左端到第一尖点 L1:</label><input type="number" id="L14" maxlength="10"><br>
                <label>第二尖点到右端 L2:</label><input type="number" id="L24" maxlength="10"><br>
                <label>铜排厚度 T:</label><input type="number" id="T4" maxlength="10"><br>
            </div>
            <button onclick="calculateOption4()">计算</button>
            <div id="output4"></div>
        `;
    } else if (option === 5) {
        inputOutputArea.innerHTML = `
            <h2>方案5 输入变量</h2>
            <div>
                <label>水平总长度 L1:</label><input type="number" id="L51" maxlength="10"><br>
                <label>水平长度 L2:</label><input type="number" id="L52" maxlength="10"><br>
                <label>垂直总长度 h:</label><input type="number" id="h5" maxlength="10"><br>
                <label>垂直长度 h1:</label><input type="number" id="h51" maxlength="10"><br>
                <label>垂直长度 h2:</label><input type="number" id="h52" maxlength="10"><br>
                <label>铜排厚度 T:</label><input type="number" id="T5" maxlength="10"><br>
            </div>
            <button onclick="calculateOption5()">计算</button>
            <div id="output5"></div>
        `;
    } else if (option === 6) {
        inputOutputArea.innerHTML = `
            <h2>方案6 输入变量</h2>
            <div>
                <label>输入变量1:</label><input type="number" id="var1" maxlength="10"><br>
                <label>输入变量2:</label><input type="number" id="var2" maxlength="10"><br>
                <label>铜排厚度 T:</label><input type="number" id="T6" maxlength="10"><br>
            </div>
            <button onclick="calculateOption6()">计算</button>
            <div id="output6"></div>
        `;
    }
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

    document.getElementById('output').innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯内角 α: ${alpha.toFixed(2)}°</p>
        <p class="output-variable">折弯扣除数 BD: ${BD.toFixed(2)}</p>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">铜排展开长度 L展: ${L展.toFixed(2)}</p>
        <p class="output-variable">第一折弯线位置 M1: ${M1.toFixed(2)}</p>
        <p class="output-variable">第二折弯线位置 M2: ${M2.toFixed(2)}</p>
    `;
}

function calculateOption2() {
    const h = parseFloat(document.getElementById('h2').value);
    const L1 = parseFloat(document.getElementById('L12').value);
    const L2 = parseFloat(document.getElementById('L22').value);
    const T = parseFloat(document.getElementById('T2').value);

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

    let K = 0.5;
    let BD = 2 * (R + T) - Math.PI * (R + K * T) / 2;
    let L展 = L1 + h + L2 - 2 * BD;
    let M1 = L1 - R - T + Math.PI * (R + K * T) / 4;
    let M2 = L2 - R - T + Math.PI * (R + K * T) / 4;

    document.getElementById('output2').innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯扣除数 BD: ${BD.toFixed(2)}</p>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">铜排展开长度 L展: ${L展.toFixed(2)}</p>
        <p class="output-variable">第一折弯线位置 M1: ${M1.toFixed(2)}</p>
        <p class="output-variable">第二折弯线位置 M2: ${M2.toFixed(2)}</p>
    `;
}

function calculateOption3() {
    const L = parseFloat(document.getElementById('L3').value);
    const L1 = parseFloat(document.getElementById('L13').value);
    const L2 = parseFloat(document.getElementById('L23').value);
    const T = parseFloat(document.getElementById('T3').value);

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

    let K = 0.5;
    let theta = Math.acos((L - L1) / L2);
    let alpha = 180 - theta * (180 / Math.PI);
    let BD = 2 * (R + T) * Math.tan(((180 - alpha) / 2) * (Math.PI / 180)) - ((180 - alpha) * Math.PI / 180) * (R + K * T);
    let L展 = L1 + L2 - BD;
    let M1 = (L1 + L2 - BD) / 2;
    let M2 = 0;

    document.getElementById('output3').innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯内角 α: ${alpha.toFixed(2)}°</p>
        <p class="output-variable">折弯扣除数 BD: ${BD.toFixed(2)}</p>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">铜排展开长度 L展: ${L展.toFixed(2)}</p>
        <p class="output-variable">第一折弯线位置 M1: ${M1.toFixed(2)}</p>
        <p class="output-variable">第二折弯线位置 M2: ${M2.toFixed(2)}</p>
    `;
}

function calculateOption4() {
    const L = parseFloat(document.getElementById('L4').value);
    const h = parseFloat(document.getElementById('h4').value);
    const L1 = parseFloat(document.getElementById('L14').value);
    const L2 = parseFloat(document.getElementById('L24').value);
    const T = parseFloat(document.getElementById('T4').value);

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

    let K = 0.5;
    let L3 = Math.sqrt((L - L1) ** 2 + (h - L2) ** 2);
    let theta = Math.atan((h - L2) / (L - L1));
    let alpha = 180 - theta * (180 / Math.PI);
    let beta = 90 - theta * (180 / Math.PI);
    let BDα = 2 * (R + T) * Math.tan(((180 - alpha) / 2) * (Math.PI / 180)) - ((180 - alpha) * Math.PI / 180) * (R + K * T);
    let BDβ = 2 * (R + T) * Math.tan(((180 - beta) / 2) * (Math.PI / 180)) - ((180 - beta) * Math.PI / 180) * (R + K * T);
    let L展 = L1 + L3 + L2 - BDα - BDβ;
    let M1 = L1 + (0.5 * (R + K * T) - (R + T)) * Math.tan(((180 - alpha) / 2) * (Math.PI / 180));
    let M2 = L展 - (0.5 * (R + K * T) - (R + T)) * Math.tan(((180 - beta) / 2) * (Math.PI / 180));

    document.getElementById('output4').innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯内角 α: ${alpha.toFixed(2)}°</p>
        <p class="output-variable">折弯内角 β: ${beta.toFixed(2)}°</p>
        <p class="output-variable">折弯扣除数 BD1: ${BDα.toFixed(2)}</p>
        <p class="output-variable">折弯扣除数 BD2: ${BDβ.toFixed(2)}</p>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">铜排展开长度 L展: ${L展.toFixed(2)}</p>
        <p class="output-variable">第一折弯线位置 M1: ${M1.toFixed(2)}</p>
        <p class="output-variable">第二折弯线位置 M2: ${M2.toFixed(2)}</p>
    `;
}

function calculateOption5() {
    const L1 = parseFloat(document.getElementById('L51').value);
    const L2 = parseFloat(document.getElementById('L52').value);
    const h = parseFloat(document.getElementById('h5').value);
    const h1 = parseFloat(document.getElementById('h51').value);
    const h2 = parseFloat(document.getElementById('h52').value);
    const T = parseFloat(document.getElementById('T5').value);

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

    // 方案5的计算逻辑待补充
    // 这里可以添加相应的计算逻辑

    document.getElementById('output5').innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">其他输出变量: 待补充</p>
    `;
}

// 方案6的计算逻辑可以在这里添加
function calculateOption6() {
    const var1 = parseFloat(document.getElementById('var1').value);
    const var2 = parseFloat(document.getElementById('var2').value);
    const T = parseFloat(document.getElementById('T6').value);

    // 方案6的计算逻辑待补充

    document.getElementById('output6').innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">其他输出变量: 待补充</p>
    `;
}
