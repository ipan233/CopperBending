<template>
  <div class="option-container">
    <div class="image-section">
      <div class="img-card">
        <img :src="option.image" :alt="option.title" class="scheme-image" />
        <div class="img-label">方案示意图</div>
      </div>
    </div>
    <div class="input-section">
      <div class="section-header">
        <div class="scheme-tag">{{ option.title }}</div>
        <h2>参数输入</h2>
      </div>
      <h3>输入变量</h3>
      <div
        v-for="field in option.fields"
        :key="field.key"
        class="input-group"
      >
        <label>{{ field.label }}</label>
        <div class="input-wrap">
          <input
            type="number"
            v-model.number="values[field.key]"
            placeholder="请输入数值"
          />
          <span class="input-unit">mm</span>
        </div>
      </div>

      <p v-if="errorMsg" class="error-msg">
        <span class="error-icon">!</span> {{ errorMsg }}
      </p>

      <button class="calc-btn" @click="handleCalculate">
        <span class="btn-icon">⟳</span> 开始计算
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const props = defineProps({
  option: { type: Object, required: true },
})

const emit = defineEmits(['result'])

const values = reactive(
  Object.fromEntries(props.option.fields.map((f) => [f.key, null]))
)

const errorMsg = ref('')

function handleCalculate() {
  errorMsg.value = ''
  for (const field of props.option.fields) {
    const v = values[field.key]
    if (v === null || v === '' || isNaN(v) || v <= 0) {
      errorMsg.value = `请输入有效的正数：${field.label}`
      return
    }
  }
  try {
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
  gap: 24px;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== 图片区域 ===== */
@media screen and (min-width: 768px) {
  .image-section { flex: 1; order: 2; }
  .input-section  { flex: 1; order: 1; }
}

@media screen and (max-width: 767px) {
  .option-container { flex-direction: column; }
  .image-section    { width: 100%; order: 1; }
  .input-section    { width: 100%; order: 2; }
}

.img-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.scheme-image {
  width: 100%;
  height: auto;
  display: block;
}

@media screen and (max-width: 767px) {
  .scheme-image { max-height: 240px; object-fit: contain; }
}

.img-label {
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.5px;
  padding: 8px 0;
  background: var(--surface-alt);
  border-top: 1px solid var(--border);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* ===== 输入区域 ===== */
.section-header {
  margin-bottom: 4px;
}

.scheme-tag {
  display: inline-block;
  background: rgba(197,135,58,0.18);
  color: var(--primary);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 3px 10px;
  border-radius: 20px;
  margin-bottom: 6px;
  text-transform: uppercase;
  border: 1px solid rgba(197,135,58,0.35);
}

.input-section h2 {
  margin: 0;
}

.input-section h3 {
  margin-top: 16px;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 2px 0;
}

.input-group label {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
}

.input-wrap {
  display: flex;
  align-items: center;
  background: var(--surface-alt);
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.input-wrap:focus-within {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(197,135,58,0.2);
}

.input-wrap input {
  width: 90px;
  padding: 9px 10px;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: var(--text-primary);
  caret-color: var(--primary);
}

.input-unit {
  padding: 0 10px;
  font-size: 12px;
  color: var(--primary);
  background: rgba(197,135,58,0.12);
  border-left: 1px solid var(--border);
  line-height: 36px;
  font-weight: 600;
}

.error-msg {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #c0392b;
  background: #fdf0ed;
  border-left: 4px solid #e74c3c;
  padding: 9px 12px;
  border-radius: var(--radius-sm);
  margin: 10px 0;
  font-size: 13px;
  font-weight: 500;
}

.error-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #e74c3c;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

.calc-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding: 11px 28px;
  background: linear-gradient(135deg, var(--primary), #E8A050);
  color: #1B2A3B;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: 0 4px 14px rgba(197,135,58,0.4);
  letter-spacing: 0.5px;
}

.calc-btn:hover {
  background: linear-gradient(135deg, #E8A050, var(--primary));
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(197,135,58,0.55);
}

.calc-btn:active {
  transform: translateY(0);
}

.btn-icon {
  font-size: 16px;
}

/* ===== 移动端增强 ===== */
@media screen and (max-width: 767px) {
  .input-group {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .input-group label {
    font-size: 13px;
  }

  .input-wrap {
    width: 100%;
  }

  .input-wrap input {
    flex: 1;
    width: 100%;
  }

  .calc-btn {
    width: 100%;
    justify-content: center;
    min-height: 44px;
  }
}

/* 仅在支持 hover 的设备上启用悬停效果（排除触摸屏） */
@media (hover: none) {
  .calc-btn:hover {
    background: linear-gradient(135deg, var(--primary), #E8A050);
    transform: none;
    box-shadow: 0 4px 14px rgba(197,135,58,0.4);
  }
}
</style>
