function selectOption(option) {
    // 隐藏首页的图形界面
    document.querySelector('.image-grid').style.display = 'none'; // 隐藏图形界面
    document.getElementById('input-output-area').style.display = 'block'; // 显示输入输出区域
    const inputOutputArea = document.getElementById('input-output-area');
    inputOutputArea.innerHTML = ''; // 清空之前的内容

    // 添加返回按钮
    inputOutputArea.innerHTML += `<button onclick="goBack()" class="return-btn">返回首页</button><br>`;

    if (option === 1) {
        inputOutputArea.innerHTML += `
            <div class="option-container">
                <div class="image-section">
                    <img src="picture/image1.png" alt="方案1" class="scheme-image">
                </div>
                <div class="input-section">
                    <h2>方案1</h2>
                    <h3>输入变量</h3>
                    <div>
                        <div class="input-group">
                            <label>水平总长度 L:</label>
                            <input type="number" id="L" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>垂直总长度 h:</label>
                            <input type="number" id="h" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>第一尖点 L1:</label>
                            <input type="number" id="L1" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>第二尖点 L2:</label>
                            <input type="number" id="L2" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>铜排厚度 T:</label>
                            <input type="number" id="T" maxlength="10">
                        </div>
                        <button onclick="calculateOption1()" class="calc-btn">计算</button>
                        <div id="output" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    } else if (option === 2) {
        inputOutputArea.innerHTML += `
            <div class="option-container">
                <div class="image-section">
                    <img src="picture/image2.png" alt="方案2" class="scheme-image">
                </div>
                <div class="input-section">
                    <h2>方案2</h2>
                    <h3>输入变量</h3>
                    <div>
                        <div class="input-group">
                            <label>垂直总长度 h:</label>
                            <input type="number" id="h2" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>第一尖点 L1:</label>
                            <input type="number" id="L12" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>第二尖点 L2:</label>
                            <input type="number" id="L22" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>铜排厚度 T:</label>
                            <input type="number" id="T2" maxlength="10">
                        </div>
                        <button onclick="calculateOption2()" class="calc-btn">计算</button>
                        <div id="output2" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    } else if (option === 3) {
        inputOutputArea.innerHTML += `
            <div class="option-container">
                <div class="image-section">
                    <img src="picture/image3.png" alt="方案3" class="scheme-image">
                </div>
                <div class="input-section">
                    <h2>方案3</h2>
                    <h3>输入变量</h3>
                    <div>
                        <div class="input-group">
                            <label>水平总长度 L:</label>
                            <input type="number" id="L3" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>第一尖点 L1:</label>
                            <input type="number" id="L13" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>第二尖点 L2:</label>
                            <input type="number" id="L23" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>铜排厚度 T:</label>
                            <input type="number" id="T3" maxlength="10">
                        </div>
                        <button onclick="calculateOption3()" class="calc-btn">计算</button>
                        <div id="output3" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    } else if (option === 4) {
        inputOutputArea.innerHTML += `
            <div class="option-container">
                <div class="image-section">
                    <img src="picture/image4.png" alt="方案4" class="scheme-image">
                </div>
                <div class="input-section">
                    <h2>方案4</h2>
                    <h3>输入变量</h3>
                    <div>
                        <div class="input-group">
                            <label>水平总长度 L:</label>
                            <input type="number" id="L4" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>垂直总长度 h:</label>
                            <input type="number" id="h4" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>第一尖点 L1:</label>
                            <input type="number" id="L14" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>第二尖点 L2:</label>
                            <input type="number" id="L24" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>铜排厚度 T:</label>
                            <input type="number" id="T4" maxlength="10">
                        </div>
                        <button onclick="calculateOption4()" class="calc-btn">计算</button>
                        <div id="output4" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    } else if (option === 5) {
        inputOutputArea.innerHTML += `
            <div class="option-container">
                <div class="image-section">
                    <img src="picture/image5.png" alt="方案5" class="scheme-image">
                </div>
                <div class="input-section">
                    <h2>方案5</h2>
                    <h3>输入变量</h3>
                    <div>
                        <div class="input-group">
                            <label>水平总长度 L1:</label>
                            <input type="number" id="L51" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>水平长度 L2:</label>
                            <input type="number" id="L52" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>垂直总长度 h:</label>
                            <input type="number" id="h5" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>垂直长度 h1:</label>
                            <input type="number" id="h51" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>垂直长度 h2:</label>
                            <input type="number" id="h52" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>铜排厚度 T:</label>
                            <input type="number" id="T5" maxlength="10">
                        </div>
                        <button onclick="calculateOption5()" class="calc-btn">计算</button>
                        <div id="output5" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    } else if (option === 6) {
        inputOutputArea.innerHTML += `
            <div class="option-container">
                <div class="image-section">
                    <img src="picture/image6.png" alt="方案6" class="scheme-image">
                </div>
                <div class="input-section">
                    <h2>方案6</h2>
                    <h3>输入变量</h3>
                    <div>
                        <div class="input-group">
                            <label>输入变量1:</label>
                            <input type="number" id="var1" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>输入变量2:</label>
                            <input type="number" id="var2" maxlength="10">
                        </div>
                        <div class="input-group">
                            <label>铜排厚度 T:</label>
                            <input type="number" id="T6" maxlength="10">
                        </div>
                        <button onclick="calculateOption6()" class="calc-btn">计算</button>
                        <div id="output6" style="display: none;"></div>
                    </div>
                </div>
            </div>
        `;
    }
}

function calculateOption1() {
    // 隐藏输出区域
    document.getElementById('output').style.display = 'none';
    
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

    let K = 0.5;
    let theta = Math.acos((L - L1) / L2);
    let alpha = 180 - theta * (180 / Math.PI);
    let BD = 2 * (R + T) * Math.tan(((180 - alpha) / 2) * (Math.PI / 180)) - ((180 - alpha) * Math.PI / 180) * (R + K * T);
    let L展 = L1 + L2 - BD;
    let M1 = (L1 + L2 - BD) / 2;
    let M2 = 0;

    // 显示输出区域并设置内容
    const outputElement = document.getElementById('output');
    outputElement.style.display = 'block';
    outputElement.innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯内角 α: ${alpha.toFixed(2)}°</p>
        <p class="output-variable">折弯扣除数 BD: ${BD.toFixed(2)}</p>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">铜排展开长度 L展: ${L展.toFixed(2)}</p>
        <p class="output-variable">第一折弯线位置 M1: ${M1.toFixed(2)}</p>
        <p class="output-variable">第二折弯线位置 M2: ${M2.toFixed(2)}</p>
        <img src="picture/image7.png" alt="Image 7" style="max-width: 100%; height: auto; margin-top: 10px;">
    `;
}

function calculateOption2() {
    // 隐藏输出区域
    document.getElementById('output2').style.display = 'none';
    
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
    let M1 = L1 - (R + T) + Math.PI * (R + K * T) / 4;
    let M2 = L2 - (R + T) + Math.PI * (R + K * T) / 4;

    // 显示输出区域并设置内容
    const outputElement = document.getElementById('output2');
    outputElement.style.display = 'block';
    outputElement.innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯扣除数 BD: ${BD.toFixed(2)}</p>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">铜排展开长度 L展: ${L展.toFixed(2)}</p>
        <p class="output-variable">第一折弯线位置 M1: ${M1.toFixed(2)}</p>
        <p class="output-variable">第二折弯线位置 M2: ${M2.toFixed(2)}</p>
        <img src="picture/image7.png" alt="Image 7" style="max-width: 100%; height: auto; margin-top: 10px;">
    `;
}

function calculateOption3() {
    // 隐藏输出区域
    document.getElementById('output3').style.display = 'none';
    
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

    // 显示输出区域并设置内容
    const outputElement = document.getElementById('output3');
    outputElement.style.display = 'block';
    outputElement.innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯内角 α: ${alpha.toFixed(2)}°</p>
        <p class="output-variable">折弯扣除数 BD: ${BD.toFixed(2)}</p>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">铜排展开长度 L展: ${L展.toFixed(2)}</p>
        <p class="output-variable">第一折弯线位置 M1: ${M1.toFixed(2)}</p>
        <p class="output-variable">第二折弯线位置 M2: ${M2.toFixed(2)}</p>
        <img src="picture/image7.png" alt="Image 7" style="max-width: 100%; height: auto; margin-top: 10px;">
    `;
}

function calculateOption4() {
    // 隐藏输出区域
    document.getElementById('output4').style.display = 'none';
    
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
    let beta = 90 + theta * (180 / Math.PI);
    let BDα = 2 * (R + T) * Math.tan(((180 - alpha) / 2) * (Math.PI / 180)) - ((180 - alpha) * Math.PI / 180) * (R + K * T);
    let BDβ = 2 * (R + T) * Math.tan(((180 - beta) / 2) * (Math.PI / 180)) - ((180 - beta) * Math.PI / 180) * (R + K * T);
    let L展 = L1 + L3 + L2 - BDα - BDβ;
    let M1 = L1 + (0.5 * (R + K * T) - (R + T)) * Math.tan(((180 - alpha) / 2) * (Math.PI / 180));
    let M2 = L展 - (0.5 * (R + K * T) - (R + T)) * Math.tan(((180 - beta) / 2) * (Math.PI / 180));

    // 显示输出区域并设置内容
    const outputElement = document.getElementById('output4');
    outputElement.style.display = 'block';
    outputElement.innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯内角 α: ${alpha.toFixed(2)}°</p>
        <p class="output-variable">折弯内角 β: ${beta.toFixed(2)}°</p>
        <p class="output-variable">折弯扣除数 BD1: ${BDα.toFixed(2)}</p>
        <p class="output-variable">折弯扣除数 BD2: ${BDβ.toFixed(2)}</p>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">铜排展开长度 L展: ${L展.toFixed(2)}</p>
        <p class="output-variable">第一折弯线位置 M1: ${M1.toFixed(2)}</p>
        <p class="output-variable">第二折弯线位置 M2: ${M2.toFixed(2)}</p>
        <img src="picture/image7.png" alt="Image 7" style="max-width: 100%; height: auto; margin-top: 10px;">
    `;
}

function calculateOption5() {
    // 隐藏输出区域
    document.getElementById('output5').style.display = 'none';
    
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

    // 显示输出区域并设置内容
    const outputElement = document.getElementById('output5');
    outputElement.style.display = 'block';
    outputElement.innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">折弯内径 R: ${R}</p>
        <p class="output-variable">其他输出变量: 待补充</p>
        <img src="picture/image7.png" alt="Image 7" style="max-width: 100%; height: auto; margin-top: 10px;">
    `;
}

// 方案6的计算逻辑可以在这里添加
function calculateOption6() {
    // 隐藏输出区域
    document.getElementById('output6').style.display = 'none';
    
    const var1 = parseFloat(document.getElementById('var1').value);
    const var2 = parseFloat(document.getElementById('var2').value);
    const T = parseFloat(document.getElementById('T6').value);

    // 方案6的计算逻辑待补充

    // 显示输出区域并设置内容
    const outputElement = document.getElementById('output6');
    outputElement.style.display = 'block';
    outputElement.innerHTML = `
        <h3>输出变量</h3>
        <p class="output-variable">其他输出变量: 待补充</p>
        <img src="picture/image7.png" alt="Image 7" style="max-width: 100%; height: auto; margin-top: 10px;">
    `;
}

// 返回首页的函数
function goBack() {
    document.querySelector('.image-grid').style.display = 'grid'; // 显示图形界面
    document.getElementById('input-output-area').style.display = 'none'; // 隐藏输入输出区域
}