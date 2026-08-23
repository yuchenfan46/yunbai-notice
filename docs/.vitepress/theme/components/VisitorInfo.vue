<template>
  <!-- 底部悬浮毛玻璃胶囊条 (全站浮动) -->
  <Transition name="fade-slide">
    <div
      v-if="show && !dismissed"
      class="visitor-pill-bar"
      :class="{ 'minimized': isMinimized }"
      @click="toggleExpand"
    >
      <div class="pill-content">
        <span class="pulse-dot"></span>
        <svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span class="pill-label">Your IP:</span>
        <span class="pill-ip">{{ displayIp }}</span>
        <span class="pill-divider">|</span>
        <span class="pill-geo">{{ compactLocation }}</span>
        <span class="pill-divider hide-mobile">|</span>
        <span class="pill-org hide-mobile">{{ displayOrg }}</span>
      </div>

      <div class="pill-actions" @click.stop>
        <button class="pill-btn-icon" :title="isMinimized ? '展开详情' : '折叠'" @click="toggleCard">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-svg">
            <polyline :points="cardOpen ? '6 9 12 15 18 9' : '18 15 12 9 6 15'"></polyline>
          </svg>
        </button>
        <button class="pill-btn-icon" title="关闭" @click="dismiss">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-svg">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  </Transition>

  <!-- 左下角/移动端弹出的毛玻璃详情卡片 -->
  <Transition name="scale-fade">
    <div v-if="show && cardOpen && !dismissed" class="visitor-glass-card">
      <div class="card-header">
        <div class="card-user-info">
          <div class="avatar-gradient">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="user-titles">
            <div class="user-badge">访客网络画像</div>
            <div class="user-sub">{{ welcomeText }}</div>
          </div>
        </div>
        <button class="close-card-btn" @click="cardOpen = false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="card-divider"></div>

      <div class="card-details-grid">
        <div class="detail-row">
          <div class="detail-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>公网 IP 地址</span>
          </div>
          <div class="detail-val font-mono ip-highlight">{{ displayIp }}</div>
        </div>

        <div class="detail-row">
          <div class="detail-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>地理归属</span>
          </div>
          <div class="detail-val">{{ compactLocation }}</div>
        </div>

        <div class="detail-row">
          <div class="detail-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            <span>网络运营商</span>
          </div>
          <div class="detail-val truncate" :title="displayOrg">{{ displayOrg }}</div>
        </div>

        <div class="detail-row">
          <div class="detail-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            <span>操作系统</span>
          </div>
          <div class="detail-val">{{ osName }}</div>
        </div>

        <div class="detail-row">
          <div class="detail-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
            <span>访问浏览器</span>
          </div>
          <div class="detail-val">{{ browserName }}</div>
        </div>
      </div>

      <div class="card-footer">
        <span class="card-status-dot"></span>
        <span>实时环境检测 · {{ currentDate }}</span>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const show = ref(false)
const dismissed = ref(false)
const cardOpen = ref(false)
const isMinimized = ref(false)
const visitorLoading = ref(true)

const visitor = ref({
  ip: '',
  city: '',
  region: '',
  country: '',
  org: '',
})

const osName = ref('Detecting...')
const browserName = ref('Detecting...')
const currentDate = ref('')

const displayIp = computed(() => visitor.value.ip || (visitorLoading.value ? '获取中...' : '未获取到'))
const compactLocation = computed(() => {
  if (visitorLoading.value) return '定位解析中...'
  const parts = [visitor.value.country, visitor.value.region, visitor.value.city].filter(Boolean)
  return parts.join(' · ') || '未知位置'
})
const displayOrg = computed(() => visitor.value.org || (visitorLoading.value ? '网络检测中...' : '运营商未知'))
const welcomeText = computed(() => {
  if (visitorLoading.value) return '正在连接公网节点...'
  return `来自 ${visitor.value.city || visitor.value.country || '远方'} 的朋友，欢迎访问！`
})

function dismiss() {
  dismissed.value = true
}

function toggleCard() {
  cardOpen.value = !cardOpen.value
}

function toggleExpand() {
  if (!cardOpen.value) {
    cardOpen.value = true
  }
}

// 访客数据源
const providers = [
  {
    url: 'https://ipwho.is/',
    normalize: (data) => {
      if (!data || data.success === false) return null
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        org: data.connection?.org || data.connection?.isp || data.connection?.domain || ''
      }
    }
  },
  {
    url: 'https://api.ip.sb/geoip',
    normalize: (data) => {
      if (!data || !data.ip) return null
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        org: data.organization || data.isp || data.asn_organization || ''
      }
    }
  },
  {
    url: 'https://ipapi.co/json/',
    normalize: (data) => {
      if (!data || data.error) return null
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country_name,
        org: data.org || ''
      }
    }
  }
]

async function fetchVisitor() {
  for (const p of providers) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 6000)
      const res = await fetch(p.url, { signal: controller.signal, headers: { Accept: 'application/json' } })
      clearTimeout(timeoutId)
      if (res.ok) {
        const json = await res.json()
        const normalized = p.normalize(json)
        if (normalized && normalized.ip) {
          visitor.value = normalized
          return
        }
      }
    } catch (e) {
      // fallback next
    }
  }
}

function detectClient() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') return
  const ua = navigator.userAgent

  // OS
  if (/Windows/i.test(ua)) osName.value = 'Windows'
  else if (/iPhone|iPad/i.test(ua)) osName.value = 'iOS / iPadOS'
  else if (/Mac OS X/i.test(ua) || /Mac/i.test(ua)) osName.value = 'macOS'
  else if (/Android/i.test(ua)) osName.value = 'Android'
  else if (/Linux/i.test(ua)) osName.value = 'Linux'
  else osName.value = 'Other OS'

  // Browser
  if (/Edg/i.test(ua)) browserName.value = 'Microsoft Edge'
  else if (/Chrome/i.test(ua) && !/Chromium|Edg/i.test(ua)) browserName.value = 'Chrome'
  else if (/Firefox/i.test(ua)) browserName.value = 'Firefox'
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browserName.value = 'Safari'
  else browserName.value = 'Web Browser'

  currentDate.value = new Date().toLocaleDateString('zh-CN', {
    month: 'short',
    day: 'numeric'
  })
}

onMounted(() => {
  detectClient()
  setTimeout(() => {
    show.value = true
  }, 500)
  fetchVisitor().finally(() => {
    visitorLoading.value = false
  })
})
</script>

<style scoped>
/* 悬浮药丸条 */
.visitor-pill-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
  user-select: none;
  max-width: calc(100vw - 32px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:root.dark .visitor-pill-bar {
  background: rgba(18, 22, 34, 0.75);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.36);
}

.visitor-pill-bar:hover {
  transform: translateX(-50%) translateY(-2px);
  box-shadow: 0 12px 36px rgba(37, 99, 235, 0.16);
  border-color: var(--vp-c-brand-1);
}

.pill-content {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  overflow: hidden;
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulse-glow 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.pill-icon {
  width: 15px;
  height: 15px;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.pill-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.pill-ip {
  font-family: var(--vp-font-family-mono, monospace);
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.pill-divider {
  color: var(--vp-c-divider);
  font-size: 0.8rem;
}

.pill-geo, .pill-org {
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.pill-actions {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 4px;
  padding-left: 6px;
  border-left: 1px solid var(--vp-c-divider);
}

.pill-btn-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: all 0.2s;
}

.pill-btn-icon:hover {
  background: rgba(0, 0, 0, 0.08);
  color: var(--vp-c-text-1);
}

:root.dark .pill-btn-icon:hover {
  background: rgba(255, 255, 255, 0.12);
}

.action-svg {
  width: 13px;
  height: 13px;
}

/* 玻璃态详情大卡片 */
.visitor-glass-card {
  position: fixed;
  bottom: 74px;
  left: 20px;
  z-index: 1000;
  width: 320px;
  max-width: calc(100vw - 40px);
  border-radius: 18px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04);
}

:root.dark .visitor-glass-card {
  background: rgba(18, 22, 34, 0.86);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar-gradient {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.avatar-gradient svg {
  width: 20px;
  height: 20px;
}

.user-badge {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.user-sub {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  margin-top: 1px;
}

.close-card-btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--vp-c-text-3);
  cursor: pointer;
}

.close-card-btn:hover {
  background: rgba(0, 0, 0, 0.06);
  color: var(--vp-c-text-1);
}

.close-card-btn svg {
  width: 14px;
  height: 14px;
}

.card-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 12px 0;
}

.card-details-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.82rem;
  padding: 4px 0;
}

.detail-label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--vp-c-text-2);
}

.detail-label svg {
  width: 14px;
  height: 14px;
  color: var(--vp-c-text-3);
}

.detail-val {
  font-weight: 600;
  color: var(--vp-c-text-1);
  max-width: 160px;
  text-align: right;
}

.ip-highlight {
  color: var(--vp-c-brand-1);
  font-size: 0.86rem;
}

.card-footer {
  margin-top: 12px;
  padding-top: 8px;
  border-top: 1px dashed var(--vp-c-divider);
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  color: var(--vp-c-text-3);
}

.card-status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #10b981;
}

/* 动效 */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.35s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.scale-fade-enter-active, .scale-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.scale-fade-enter-from, .scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}

@media (max-width: 640px) {
  .hide-mobile {
    display: none;
  }
  .visitor-glass-card {
    left: 50%;
    transform: translateX(-50%);
    bottom: 70px;
  }
  .scale-fade-enter-from, .scale-fade-leave-to {
    transform: translateX(-50%) scale(0.95) translateY(10px);
  }
}
</style>
