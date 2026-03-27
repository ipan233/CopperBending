<template>
  <div class="result-panel">
    <div class="result-header">
      <div class="result-title">
        <span class="title-dot"></span>
        输出变量
      </div>
      <span class="result-badge">{{ results.length }} 项结果</span>
    </div>

    <div class="result-grid">
      <div
        v-for="(item, index) in results"
        :key="index"
        class="result-item"
      >
        <span class="result-label">{{ item.label }}</span>
        <span class="result-value">
          {{ typeof item.value === 'number' ? item.value.toFixed(2) : item.value }}
          <em v-if="item.unit">{{ item.unit }}</em>
        </span>
      </div>
    </div>

    <div v-if="resultImage" class="result-image-wrap">
      <div class="image-caption">折弯线位置参考图</div>
      <img :src="resultImage" alt="参考图" class="result-image" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  results:     { type: Array,  required: true },
  resultImage: { type: String, default: '' },
})
</script>

<style scoped>
.result-panel {
  margin-top: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  animation: slideUp 0.35s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== 头部 ===== */
.result-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: linear-gradient(135deg, var(--primary) 0%, #E8A050 100%);
}

.result-title {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #1B2A3B;
  font-size: 15px;
  font-weight: 700;
}

.title-dot {
  width: 8px;
  height: 8px;
  background: #1B2A3B;
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(27,42,59,0.35);
}

.result-badge {
  background: rgba(27,42,59,0.2);
  color: #1B2A3B;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

/* ===== 结果网格 ===== */
.result-grid {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.result-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 14px;
  background: var(--surface-alt);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
  cursor: default;
}

.result-item:hover {
  transform: translateX(5px);
  border-left-color: #E8A050;
  background: rgba(197,135,58,0.12);
  box-shadow: var(--shadow-sm);
}

.result-label {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}

.result-value {
  font-size: 16px;
  font-weight: 700;
  color: #E8A050;
  letter-spacing: -0.3px;
}

.result-value em {
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-left: 2px;
}

/* ===== 参考图 ===== */
.result-image-wrap {
  margin: 0 16px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.image-caption {
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.5px;
  padding: 7px 0;
  background: var(--surface-alt);
  border-bottom: 1px solid var(--border);
  text-transform: uppercase;
}

.result-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
