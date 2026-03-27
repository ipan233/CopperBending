<template>
  <div class="selector-page">
    <h1>根据图形选择折弯方案</h1>
    <div class="image-grid">
      <div
        v-for="opt in options"
        :key="opt.id"
        class="option-card"
        @click="$emit('select', opt)"
      >
        <img :src="opt.image" :alt="opt.title" class="bending-option" />
        <span class="option-label">{{ opt.title }}</span>
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

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px auto;
  max-width: 600px;
}

.option-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid var(--primary);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

.option-card:hover {
  transform: scale(1.05);
}

.bending-option {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

.option-label {
  padding: 6px 0;
  font-weight: 600;
  font-size: 14px;
  color: var(--primary);
}
</style>
