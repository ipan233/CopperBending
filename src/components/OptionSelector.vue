<template>
  <div class="selector-page">
    <div class="page-header">
      <div class="header-badge">COPPER BENDING</div>
      <h1>选择折弯方案</h1>
      <p class="subtitle">根据铜排图形选择对应的计算方案</p>
    </div>
    <div class="image-grid">
      <div
        v-for="opt in options"
        :key="opt.id"
        class="option-card"
        @click="$emit('select', opt)"
      >
        <div class="card-img-wrap">
          <img :src="opt.image" :alt="opt.title" class="bending-option" />
          <div class="card-overlay">
            <span class="overlay-text">点击选择</span>
          </div>
        </div>
        <div class="card-footer">
          <span class="option-label">{{ opt.title }}</span>
          <span class="card-arrow">→</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { OPTIONS } from '../config/options.js'

const options = OPTIONS
defineEmits(['select'])
</script>

<style scoped>
.selector-page {
  text-align: center;
}

.page-header {
  margin-bottom: 32px;
  padding: 28px 20px 24px;
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
}

.header-badge {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), #E8A050);
  color: #1B2A3B;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(197,135,58,0.4);
}

.page-header h1 {
  margin: 0 0 8px;
}

.subtitle {
  color: var(--text-secondary);
  font-size: 14px;
  margin: 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 0 auto;
  max-width: 620px;
}

.option-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1.5px solid var(--border);
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.option-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary);
}

.card-img-wrap {
  position: relative;
  overflow: hidden;
}

.bending-option {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.option-card:hover .bending-option {
  transform: scale(1.04);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(197, 135, 58, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.22s ease;
}

.option-card:hover .card-overlay {
  opacity: 1;
}

.overlay-text {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--surface-alt);
  border-top: 1px solid var(--border);
  transition: background 0.2s;
}

.option-label {
  font-weight: 600;
  font-size: 14px;
  color: var(--primary);
}

.card-arrow {
  color: var(--primary);
  font-size: 16px;
  font-weight: 700;
  transition: transform 0.2s;
}

.option-card:hover .card-arrow {
  transform: translateX(4px);
}

@media screen and (max-width: 480px) {
  .image-grid {
    grid-template-columns: 1fr;
    max-width: 320px;
  }
}
</style>
