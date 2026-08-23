<template>
  <div class="sponsor-section-wrapper" v-if="ads.length || loading">
    <div class="section-title-wrap">
      <div class="divider-line"></div>
      <div class="dot"></div>
      <div class="label">🌟 独家赞助与推荐项目</div>
      <div class="dot"></div>
      <div class="divider-line"></div>
    </div>

    <div v-if="loading" class="sponsor-loading">
      <div class="skeleton-card"></div>
    </div>

    <div v-else class="sponsor-grid">
      <div v-for="(ad, index) in ads" :key="index" class="sponsor-card">
        <div class="sponsor-header">
          <div class="sponsor-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div class="sponsor-title-wrap">
            <div class="sponsor-title">{{ ad.webname }}</div>
            <div class="sponsor-meta">
              <span>👤 {{ ad.username || (ad.user_id == '0' ? '平台推荐' : `用户ID:${ad.user_id}`) }}</span>
              <span v-if="ad.date">📅 {{ ad.date }}</span>
            </div>
          </div>
        </div>

        <div v-if="ad.introduction" class="sponsor-intro">
          {{ ad.introduction }}
        </div>

        <div class="sponsor-footer">
          <a :href="ad.jump_url || ad.url || '#'" target="_blank" rel="noopener noreferrer" class="sponsor-btn">
            前往访问 ➔
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const ads = ref([])

function getValidList(data, requiredField, statusField) {
  if (!data) return []
  if (data.code !== undefined && String(data.code) !== "1") return []
  let list = Array.isArray(data) ? data : Array.isArray(data.data) ? data.data : data[requiredField] ? [data] : []
  return list.filter(item => {
    if (!item || !item[requiredField]) return false
    if (item[statusField] !== undefined && item[statusField] != 1) return false
    return true
  })
}

onMounted(() => {
  fetch('https://v2.api.yunbai.icu/api/yunbai/api.php?type=2')
    .then(r => r.json())
    .then(data => {
      loading.value = false
      ads.value = getValidList(data, 'webname', 'status')
    })
    .catch(() => {
      loading.value = false
    })
})
</script>

<style scoped>
.sponsor-section-wrapper {
  margin: 32px 0;
  width: 100%;
}
.section-title-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  justify-content: center;
}
.divider-line {
  flex: 1;
  height: 1px;
  background: var(--vp-c-divider);
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f59e0b;
}
.label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  letter-spacing: 0.5px;
}
.sponsor-loading {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.skeleton-card {
  height: 80px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
}
.sponsor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}
.sponsor-card {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  transition: all 0.25s;
}
.sponsor-card:hover {
  border-color: #f59e0b;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(245, 158, 11, 0.1);
}
.sponsor-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sponsor-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.sponsor-icon svg {
  width: 20px;
  height: 20px;
}
.sponsor-title-wrap {
  flex: 1;
  min-width: 0;
}
.sponsor-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sponsor-meta {
  display: flex;
  gap: 8px;
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}
.sponsor-intro {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  background: var(--vp-c-bg);
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px dashed var(--vp-c-divider);
}
.sponsor-footer {
  display: flex;
  justify-content: flex-end;
}
.sponsor-btn {
  display: inline-block;
  padding: 6px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  background: #f59e0b;
  color: #fff !important;
  text-decoration: none !important;
  transition: opacity 0.2s;
}
.sponsor-btn:hover {
  opacity: 0.9;
}
</style>
