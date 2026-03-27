<template>
  <div class="result-panel">
    <h3>输出变量</h3>
    <p
      v-for="(item, index) in results"
      :key="index"
      class="output-variable"
    >
      {{ item.label }}:
      <strong>
        {{ typeof item.value === 'number' ? item.value.toFixed(2) : item.value }}
        {{ item.unit ?? '' }}
      </strong>
    </p>
    <img
      v-if="resultImage"
      :src="resultImage"
      alt="参考图"
      class="result-image"
    />
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
  margin-top: 25px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.result-panel h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.output-variable {
  background-color: #e9f7fe;
  border-left: 5px solid var(--primary);
  padding: 12px;
  margin: 12px 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  transition: transform 0.2s ease;
}

.output-variable:hover {
  transform: translateX(5px);
  background-color: #dff1fd;
}

.result-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 6px;
}
</style>
