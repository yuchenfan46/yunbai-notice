<template>
  <div class="online-section-wrapper">
    <div class="section-title-wrap">
      <div class="divider-line"></div>
      <div class="dot"></div>
      <div class="label">云端公告 & 动态数据</div>
      <div class="dot"></div>
      <div class="divider-line"></div>
    </div>

    <!-- 加载中骨架屏 -->
    <div v-if="loading" class="online-loading">
      <div class="skeleton-card"></div>
      <div class="skeleton-card" style="opacity: 0.7; height: 56px"></div>
      <div class="skeleton-card" style="opacity: 0.5; height: 56px"></div>
    </div>

    <div v-else class="online-container">
      <div v-if="!ads.length && !links.length && !notices.length" class="online-empty">
        — 暂无云端数据 —
      </div>

      <!-- 独家赞助与推荐项目 (type=2) -->
      <div v-if="ads.length" class="online-accordion-item" :class="{ active: activeKey === 'ads' }">
        <div class="online-accordion-header" @click="toggle('ads')">
          <div class="title-wrap">
            <span class="online-tag ad">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="tag-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              推荐
            </span>
            <span>独家赞助与推荐项目</span>
          </div>
          <svg class="online-chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="online-accordion-content" v-show="activeKey === 'ads'">
          <div class="online-inner">
            <div class="online-inner-divider"></div>
            <div class="online-ad-list">
              <div v-for="(ad, index) in ads" :key="index" class="online-ad-item">
                <div class="online-ad-title">🔗 {{ ad.webname }}</div>
                <div class="online-ad-meta">发布者: {{ ad.username || (ad.user_id == '0' ? '后台管理员' : `用户ID:${ad.user_id || '未知'}`) }} &nbsp;·&nbsp; {{ ad.date || '未知' }}</div>
                <div v-if="ad.introduction" class="online-ad-intro">{{ ad.introduction }}</div>
                <div class="online-ad-link-divider">
                  <div class="divider-line"></div>
                  <div class="online-ad-link-toggle" :class="{ expanded: expandedAds[index] }" role="button" aria-label="展开链接" @click.stop="toggleAdLink(index)">
                    <svg class="online-ad-link-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                  <div class="divider-line"></div>
                </div>
                <div class="online-ad-link-reveal" :class="{ expanded: expandedAds[index] }">
                  <a :href="ad.jump_url || ad.url || '#'" target="_blank" rel="noopener noreferrer" class="online-ad-btn">前往访问 ➔</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 友情链接与合作伙伴 (type=3) -->
      <div v-if="links.length" class="online-accordion-item" :class="{ active: activeKey === 'links' }">
        <div class="online-accordion-header" @click="toggle('links')">
          <div class="title-wrap">
            <span class="online-tag link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="tag-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              链接
            </span>
            <span>友情链接与合作伙伴</span>
          </div>
          <svg class="online-chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="online-accordion-content" v-show="activeKey === 'links'">
          <div class="online-inner">
            <div class="online-inner-divider"></div>
            <div class="online-link-grid">
              <a v-for="(link, lIdx) in links" :key="lIdx" :href="link.url" target="_blank" rel="noopener noreferrer" class="online-link-card">
                <div class="online-link-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;color:#2ecc71"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                </div>
                <div class="online-link-card-body">
                  <div class="online-link-card-name">{{ link.name }}</div>
                  <div class="online-link-card-domain">{{ getHostname(link.url) }}</div>
                </div>
                <div class="online-link-card-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 公告列表 (type=1) -->
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
        <div class="online-accordion-content" v-show="activeKey === 'notice-' + nIdx">
          <div class="online-inner">
            <div class="online-inner-divider"></div>
            <div class="online-meta">📅 {{ notice.time || '未知' }} &nbsp;·&nbsp; 👤 {{ notice.username || '系统' }}</div>
            <div class="online-content-text" v-html="notice.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const API = {
  notice: 'https://v2.api.yunbai.icu/api/yunbai/api.php?type=1',
  link:   'https://v2.api.yunbai.icu/api/yunbai/api.php?type=3',
  ad:     'https://v2.api.yunbai.icu/api/yunbai/api.php?type=2'
}

const loading = ref(true)
const notices = ref([])
const links = ref([])
const ads = ref([])
const activeKey = ref('')
const expandedAds = ref({})

function toggle(key) {
  activeKey.value = activeKey.value === key ? '' : key
}

function toggleAdLink(index) {
  expandedAds.value[index] = !expandedAds.value[index]
}

function getHostname(url) {
  try {
    return new URL(url).hostname
  } catch (e) {
    return url
  }
}

function getValidList(data, requiredField, statusField) {
  if (!data) return []
  if (data.code !== undefined && String(data.code) !== "1") {
    return []
  }
  let list = Array.isArray(data) ? data
    : Array.isArray(data.data) ? data.data
    : data[requiredField] ? [data] : []

  return list.filter(item => {
    if (!item || !item[requiredField]) return false
    if (item[statusField] !== undefined && item[statusField] != 1) return false
    return true
  })
}

onMounted(() => {
  Promise.all([
    fetch(API.notice).then(r => r.json()).catch(() => null),
    fetch(API.link).then(r => r.json()).catch(() => null),
    fetch(API.ad).then(r => r.json()).catch(() => null)
  ]).then(([noticeData, linkData, adData]) => {
    loading.value = false
    notices.value = getValidList(noticeData, 'title', 'state')
    links.value = getValidList(linkData, 'name', 'state')
    ads.value = getValidList(adData, 'webname', 'status')
  }).catch(() => {
    loading.value = false
  })
})
</script>

<style scoped>
.online-section-wrapper {
  margin: 40px 0;
  width: 100%;
}
.section-title-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
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
  letter-spacing: 1px;
}
.online-loading {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.skeleton-card {
  height: 52px;
  border-radius: 12px;
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
  gap: 12px;
}
.online-empty {
  text-align: center;
  color: var(--vp-c-text-3);
  padding: 30px 0;
  font-size: 0.95rem;
}
.online-accordion-item {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.online-accordion-item:hover {
  border-color: var(--vp-c-brand-1);
}
.online-accordion-item.active {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
.online-accordion-header {
  padding: 16px 20px;
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
  font-size: 1rem;
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
.online-tag.ad {
  background: rgba(231, 76, 60, 0.12);
  color: #e74c3c;
}
.online-tag.link {
  background: rgba(46, 204, 113, 0.12);
  color: #2ecc71;
}
.online-tag.notice {
  background: rgba(243, 156, 18, 0.12);
  color: #f39c12;
}
.online-chevron-icon {
  width: 18px;
  height: 18px;
  color: var(--vp-c-text-3);
  transition: transform 0.3s;
}
.online-accordion-item.active .online-chevron-icon {
  transform: rotate(180deg);
  color: var(--vp-c-brand-1);
}
.online-accordion-content {
  padding: 0 20px 20px 20px;
}
.online-inner-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin-bottom: 16px;
}
.online-meta {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  margin-bottom: 12px;
}
.online-content-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.online-link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.online-link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  text-decoration: none !important;
  transition: all 0.2s;
}
.online-link-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
.online-link-card-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(46, 204, 113, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.online-link-card-body {
  flex: 1;
  min-width: 0;
}
.online-link-card-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.online-link-card-domain {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.online-link-card-arrow {
  color: var(--vp-c-text-3);
}
.online-ad-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.online-ad-item {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}
.online-ad-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 6px;
}
.online-ad-meta {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 8px;
}
.online-ad-intro {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 12px;
}
.online-ad-link-divider {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
}
.online-ad-link-toggle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--vp-c-text-3);
  transition: all 0.25s;
}
.online-ad-link-toggle:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.online-ad-link-toggle.expanded {
  transform: rotate(45deg);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.online-ad-link-toggle-icon {
  width: 14px;
  height: 14px;
}
.online-ad-link-reveal {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  display: flex;
  justify-content: flex-end;
}
.online-ad-link-reveal.expanded {
  max-height: 50px;
  margin-top: 8px;
}
.online-ad-btn {
  display: inline-block;
  padding: 6px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  background: var(--vp-c-brand-1);
  color: #fff !important;
  text-decoration: none !important;
  transition: opacity 0.2s;
}
.online-ad-btn:hover {
  opacity: 0.9;
}
</style>
