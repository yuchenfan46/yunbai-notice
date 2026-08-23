<template>
  <!-- 底部悬浮毛玻璃紧凑胶囊条 (不可隐藏/常驻) -->
  <Transition name="fade-slide">
    <div
      v-if="show"
      class="visitor-pill-bar"
      @click="toggleCard"
      :title="cardOpen ? '点击收起画像' : '点击查看详细网络画像'"
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

      <div class="pill-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-svg" :class="{ 'rotate-180': cardOpen }">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </div>
    </div>
  </Transition>

  <!-- 左下角/移动端弹出的毛玻璃详情卡片 (紧凑小巧版) -->
  <Transition name="scale-fade">
    <div v-if="show && cardOpen" class="visitor-glass-card">
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
        <button class="close-card-btn" title="收起" @click="cardOpen = false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>

      <div class="card-divider"></div>

      <div class="card-details-grid">
        <div class="detail-row">
          <div class="detail-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            <span>公网 IP</span>
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
            <span>运营商</span>
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
            <span>浏览器</span>
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
const cardOpen = ref(false)
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
  if (visitorLoading.value) return '定位中...'
  const parts = [visitor.value.country, visitor.value.region, visitor.value.city].filter(Boolean)
  return parts.join(' · ') || '未知位置'
})
const displayOrg = computed(() => visitor.value.org || (visitorLoading.value ? '检测中...' : '未知网络'))
const welcomeText = computed(() => {
  if (visitorLoading.value) return '正在连接公网节点...'
  return `来自 ${visitor.value.city || visitor.value.country || '远方'} 的朋友，欢迎！`
})

function toggleCard() {
  cardOpen.value = !cardOpen.value
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
  if (/Edg/i.test(ua)) browserName.value = 'Edge'
  else if (/Chrome/i.test(ua) && !/Chromium|Edg/i.test(ua)) browserName.value = 'Chrome'
  else if (/Firefox/i.test(ua)) browserName.value = 'Firefox'
  else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browserName.value = 'Safari'
  else browserName.value = 'Browser'

  currentDate.value = new Date().toLocaleDateString('zh-CN', {
    month: 'short',
    day: 'numeric'
  })
}

onMounted(() => {
  detectClient()
  setTimeout(() => {
    show.value = true
  }, 400)
  fetchVisitor().finally(() => {
    visitorLoading.value = false
  })
})
</script>

<style scoped>
/* 悬浮药丸条 (更紧凑精致) */
.visitor-pill-bar {
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03);
  font-size: 0.76rem;
  color: var(--vp-c-text-1);
  cursor: pointer;
  user-select: none;
  max-width: calc(100vw - 24px);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

:root.dark .visitor-pill-bar {
  background: rgba(18, 22, 34, 0.72);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.visitor-pill-bar:hover {
  transform: translateX(-50%) translateY(-1px);
  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.14);
  border-color: var(--vp-c-brand-1);
}

.pill-content {
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  overflow: hidden;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 6px #10b981;
  animation: pulse-glow 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.pill-icon {
  width: 13px;
  height: 13px;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.pill-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
  font-size: 0.73rem;
}

.pill-ip {
  font-family: var(--vp-font-family-mono, monospace);
  font-weight: 600;
  color: var(--vp-c-brand-1);
  letter-spacing: -0.01em;
}

.pill-divider {
  color: var(--vp-c-divider);
  font-size: 0.7rem;
}

.pill-geo, .pill-org {
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 0.73rem;
}

.pill-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-3);
  margin-left: 2px;
}

.action-svg {
  width: 12px;
  height: 12px;
  transition: transform 0.25s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

/* 玻璃态详情小卡片 */
.visitor-glass-card {
  position: fixed;
  bottom: 48px;
  left: 16px;
  z-index: 1000;
  width: 270px;
  max-width: calc(100vw - 32px);
  border-radius: 14px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.03);
}

:root.dark .visitor-glass-card {
  background: rgba(18, 22, 34, 0.85);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-user-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.avatar-gradient {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.25);
}

.avatar-gradient svg {
  width: 16px;
  height: 16px;
}

.user-badge {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.user-sub {
  font-size: 0.68rem;
  color: var(--vp-c-text-3);
  margin-top: 1px;
}

.close-card-btn {
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
}

.close-card-btn:hover {
  background: rgba(0, 0, 0, 0.06);
  color: var(--vp-c-text-1);
}

:root.dark .close-card-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.close-card-btn svg {
  width: 13px;
  height: 13px;
}

.card-divider {
  height: 1px;
  background: var(--vp-c-divider);
  margin: 9px 0 8px 0;
}

.card-details-grid {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.detail-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.74rem;
  padding: 1px 0;
}

.detail-label {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--vp-c-text-2);
}

.detail-label svg {
  width: 12px;
  height: 12px;
  color: var(--vp-c-text-3);
}

.detail-val {
  font-weight: 600;
  color: var(--vp-c-text-1);
  max-width: 140px;
  text-align: right;
}

.ip-highlight {
  color: var(--vp-c-brand-1);
  font-size: 0.76rem;
}

.card-footer {
  margin-top: 9px;
  padding-top: 6px;
  border-top: 1px dashed var(--vp-c-divider);
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.66rem;
  color: var(--vp-c-text-3);
}

.card-status-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #10b981;
}

/* 动效 */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(15px);
}

.scale-fade-enter-active, .scale-fade-leave-active {
  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.scale-fade-enter-from, .scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.92) translateY(8px);
}

@media (max-width: 640px) {
  .hide-mobile {
    display: none;
  }
  .visitor-glass-card {
    left: 50%;
    transform: translateX(-50%);
    bottom: 44px;
  }
  .scale-fade-enter-from, .scale-fade-leave-to {
    transform: translateX(-50%) scale(0.95) translateY(8px);
  }
}
</style>
