<template>
  <div class="container">
    <!-- 首页：方案选择 -->
    <OptionSelector
      v-if="!selectedOption"
      @select="handleSelect"
    />

    <!-- 详情页：输入表单 + 结果 -->
    <template v-else>
      <button class="return-btn" @click="handleBack">返回首页</button>
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
:root {
  --primary:      #007BFF;
  --primary-dark: #0056b3;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  font-weight: 600;
}

h2 {
  color: #333;
  margin-top: 0;
  font-weight: 600;
}

h3 {
  color: #555;
  margin-top: 20px;
  font-weight: 500;
}

/* 返回按钮 */
.return-btn {
  width: auto;
  margin: 10px 0 20px;
  padding: 10px 15px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.return-btn:hover {
  background-color: #333;
}

/* 输入输出区域包装 */
#input-output-area {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  padding: 25px;
  margin-top: 20px;
}

@media screen and (max-width: 767px) {
  body {
    padding: 12px;
  }

  h1 {
    font-size: 22px;
  }
}
</style>
