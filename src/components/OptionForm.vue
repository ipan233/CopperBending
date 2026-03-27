<template>
  <div class="option-container">
    <div class="image-section">
      <img :src="option.image" :alt="option.title" class="scheme-image" />
    </div>
    <div class="input-section">
      <h2>{{ option.title }}</h2>
      <h3>输入变量</h3>
      <div
        v-for="field in option.fields"
        :key="field.key"
        class="input-group"
      >
        <label>{{ field.label }}:</label>
        <input
          type="number"
          v-model.number="values[field.key]"
          placeholder="请输入"
        />
      </div>

      <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

      <button class="calc-btn" @click="handleCalculate">计算</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  option: { type: Object, required: true },
})

const emit = defineEmits(['result'])

// 初始化输入值对象
const values = reactive(
  Object.fromEntries(props.option.fields.map((f) => [f.key, null]))
)

const errorMsg = ref('')

function handleCalculate() {
  errorMsg.value = ''

  // 输入校验：所有字段必须为有效正数
  for (const field of props.option.fields) {
    const v = values[field.key]
    if (v === null || v === '' || isNaN(v) || v <= 0) {
      errorMsg.value = `请输入有效的正数：${field.label}`
      return
    }
  }

  try {
    // 动态导入对应的计算模块
    import(`../calculators/option${props.option.id}.js`).then((mod) => {
      const result = mod.calculate({ ...values })
      emit('result', result)
    })
  } catch (e) {
    errorMsg.value = e.message
  }
}
</script>

<style scoped>
.option-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media screen and (min-width: 768px) {
  .image-section { flex: 1; order: 2; }
  .input-section  { flex: 1; order: 1; padding-right: 20px; }
}

@media screen and (max-width: 767px) {
  .option-container { flex-direction: column; }
  .image-section    { width: 100%; order: 1; }
  .input-section    { width: 100%; order: 2; }
}

.scheme-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 767px) {
  .scheme-image {
    max-height: 250px;
    object-fit: contain;
    margin: 0 auto;
    display: block;
  }
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-group label {
  width: 15ch;
  font-weight: 500;
}

.input-group input {
  max-width: 12ch;
  margin-left: 8px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.error-msg {
  color: #d32f2f;
  background: #fdecea;
  border-left: 4px solid #d32f2f;
  padding: 8px 12px;
  border-radius: 4px;
  margin: 8px 0;
  font-size: 14px;
}

.calc-btn {
  width: 100%;
  max-width: 200px;
  margin: 20px 0;
  padding: 10px 20px;
  background-color: var(--primary);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.calc-btn:hover {
  background-color: var(--primary-dark);
}
</style>
