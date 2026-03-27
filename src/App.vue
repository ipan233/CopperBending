<template>
  <div class="container">
    <!-- 首页：方案选择 -->
    <OptionSelector
      v-if="!selectedOption"
      @select="handleSelect"
    />

    <!-- 详情页：输入表单 + 结果 -->
    <template v-else>
      <button class="return-btn" @click="handleBack">
        <span class="return-icon">←</span> 返回首页
      </button>
      <OptionForm
        :key="selectedOption.id"
        :option="selectedOption"
        @result="handleResult"
      />
      <ResultPanel
        v-if="results"
        :results="results"
        :result-image="selectedOption.resultImage"
      />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import OptionSelector from './components/OptionSelector.vue'
import OptionForm     from './components/OptionForm.vue'
import ResultPanel    from './components/ResultPanel.vue'

const selectedOption = ref(null)
const results        = ref(null)

function handleSelect(option) {
  selectedOption.value = option
  results.value = null
}

function handleResult(data) {
  results.value = data
}

function handleBack() {
  selectedOption.value = null
  results.value = null
}
</script>

<style>
/* ===== Design Tokens — 方案A：深蓝钢铁 + 铜金点缀 ===== */
:root {
  --primary:        #C5873A;
  --primary-dark:   #A86E28;
  --primary-light:  #3A2C1A;
  --accent:         #4DA3D4;
  --accent-dark:    #3A8CB8;
  --surface:        #1A3D65;
  --surface-alt:    #153054;
  --border:         #2E4058;
  --text-primary:   #F0F4F8;
  --text-secondary: #8EABC7;
  --shadow-sm:      0 2px 8px rgba(0,0,0,0.30);
  --shadow-md:      0 6px 24px rgba(0,0,0,0.40);
  --shadow-lg:      0 12px 40px rgba(0,0,0,0.50);
  --radius-sm:      6px;
  --radius-md:      12px;
  --radius-lg:      18px;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  background: #1B2A3B;
  min-height: 100vh;
  margin: 0;
  padding: 28px 20px;
  color: var(--text-primary);
}

.container {
  max-width: 820px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 26px;
  letter-spacing: -0.3px;
  margin-bottom: 6px;
}

h2 {
  color: var(--text-primary);
  margin-top: 0;
  font-weight: 700;
  font-size: 20px;
}

h3 {
  color: var(--text-secondary);
  margin-top: 20px;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

/* ===== 返回按钮 ===== */
.return-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: auto;
  margin: 0 0 22px;
  padding: 9px 18px;
  background-color: var(--surface);
  color: var(--text-secondary);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-sm);
}

.return-btn:hover {
  background-color: var(--surface-alt);
  color: var(--primary);
  border-color: var(--primary);
  transform: translateX(-2px);
  box-shadow: 0 0 0 2px rgba(197,135,58,0.25);
}

.return-icon {
  font-size: 15px;
  line-height: 1;
}

@media screen and (max-width: 767px) {
  body {
    padding: 16px 12px;
  }
  h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 374px) {
  body {
    padding: 10px 6px;
  }
  h1 {
    font-size: 17px;
  }
  .return-btn {
    font-size: 12px;
    padding: 8px 12px;
  }
}
</style>
