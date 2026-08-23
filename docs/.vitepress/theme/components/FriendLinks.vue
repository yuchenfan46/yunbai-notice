<template>
  <div class="links-section-wrapper" v-if="links.length || loading">
    <div class="section-title-wrap">
      <div class="divider-line"></div>
      <div class="dot"></div>
      <div class="label">🤝 友情链接与合作伙伴</div>
      <div class="dot"></div>
      <div class="divider-line"></div>
    </div>

    <div v-if="loading" class="links-loading">
      <div class="skeleton-card"></div>
    </div>

    <div v-else class="link-grid">
      <a v-for="(link, lIdx) in links" :key="lIdx" :href="link.url" target="_blank" rel="noopener noreferrer" class="link-card">
        <div class="link-card-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
        </div>
        <div class="link-card-body">
          <div class="link-card-name">{{ link.name }}</div>
          <div class="link-card-domain">{{ getHostname(link.url) }}</div>
        </div>
        <div class="link-card-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const links = ref([])

function getHostname(url) {
  try {
    return new URL(url).hostname
  } catch (e) {
    return url
  }
}

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
  fetch('https://v2.api.yunbai.icu/api/yunbai/api.php?type=3')
    .then(r => r.json())
    .then(data => {
      loading.value = false
      links.value = getValidList(data, 'name', 'state')
    })
    .catch(() => {
      loading.value = false
    })
})
</script>

<style scoped>
.links-section-wrapper {
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
  background: #2ecc71;
}
.label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  letter-spacing: 0.5px;
}
.links-loading {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.skeleton-card {
  height: 56px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
}
.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none !important;
  transition: all 0.2s;
}
.link-card:hover {
  border-color: #2ecc71;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(46, 204, 113, 0.1);
}
.link-card-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: rgba(46, 204, 113, 0.12);
  color: #2ecc71;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.link-card-icon svg {
  width: 18px;
  height: 18px;
}
.link-card-body {
  flex: 1;
  min-width: 0;
}
.link-card-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link-card-domain {
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link-card-arrow {
  color: var(--vp-c-text-3);
}
.link-card-arrow svg {
  width: 15px;
  height: 15px;
}
</style>
