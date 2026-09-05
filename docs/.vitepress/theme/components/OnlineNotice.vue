<template>
  <div class="online-section-wrapper">
    <div class="section-title-wrap">
      <div class="divider-line"></div>
      <div class="dot"></div>
      <div class="label">📢 云端最新公告</div>
      <div class="dot"></div>
      <div class="divider-line"></div>
    </div>

    <div v-if="loading" class="online-loading">
      <div class="skeleton-card"></div>
      <div class="skeleton-card" style="opacity: 0.7; height: 52px"></div>
    </div>

    <div v-else class="online-container">
      <div v-if="!notices.length" class="online-empty">
        — 暂无云端公告 —
      </div>

      <div v-for="(notice, nIdx) in notices" :key="'notice-' + nIdx" class="online-accordion-item" :class="{ active: activeKey === 'notice-' + nIdx }">
        <div class="online-accordion-header" @click="toggle('notice-' + nIdx)">
          <div class="title-wrap">
            <span class="online-tag notice">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="tag-icon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              公告
            </span>
            <span>{{ notice.title }}</span>
          </div>
          <svg class="online-chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="online-collapse-wrapper" :class="{ expanded: activeKey === 'notice-' + nIdx }">
          <div class="online-collapse-inner">
            <div class="online-accordion-content">
              <div class="online-inner">
                <div class="online-inner-divider"></div>
                <div class="online-meta">📅 {{ notice.time || '未知' }} &nbsp;·&nbsp; 👤 {{ notice.username || '系统' }}</div>
                <div class="online-content-text" v-html="notice.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const notices = ref([])
const activeKey = ref('') // 默认展开第一条公告

function toggle(key) {
  activeKey.value = activeKey.value === key ? '' : key
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
  fetch('https://v2.api.yunbai.icu/api/yunbai/api.php?type=1')
    .then(r => r.json())
    .then(data => {
      loading.value = false
      notices.value = getValidList(data, 'title', 'state')
    })
    .catch(() => {
      loading.value = false
    })
})
</script>

<style scoped>
.online-section-wrapper {
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
  background: var(--vp-c-brand-1);
}
.label {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  letter-spacing: 0.5px;
}
.online-loading {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.skeleton-card {
  height: 48px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
}
.online-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.online-empty {
  text-align: center;
  color: var(--vp-c-text-3);
  padding: 24px 0;
  font-size: 0.95rem;
}
.online-accordion-item {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
}
.online-accordion-item:hover {
  border-color: var(--vp-c-brand-1);
}
.online-accordion-item.active {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}
.online-accordion-header {
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  user-select: none;
}
.title-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}
.online-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}
.tag-icon {
  width: 14px;
  height: 14px;
}
.online-tag.notice {
  background: rgba(243, 156, 18, 0.12);
  color: #f39c12;
}
.online-chevron-icon {
  width: 18px;
  height: 18px;
  color: var(--vp-c-text-3);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.online-accordion-item.active .online-chevron-icon {
  transform: rotate(180deg);
  color: var(--vp-c-brand-1);
}

/* 平滑高度展开/折叠过渡动画 (CSS Grid 0fr -> 1fr 现代丝滑动画方案) */
.online-collapse-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.online-collapse-wrapper.expanded {
  grid-template-rows: 1fr;
}
.online-collapse-inner {
  overflow: hidden;
}

.online-accordion-content {
  padding: 0 18px 18px 18px;
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.online-collapse-wrapper.expanded .online-accordion-content {
  opacity: 1;
  transform: translateY(0);
}

.online-inner-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin-bottom: 14px;
}
.online-meta {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-bottom: 10px;
}
.online-content-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
</style>
