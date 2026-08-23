<template>
  <div class="timer-section-wrapper">
    <div class="section-title-wrap">
      <div class="divider-line"></div>
      <div class="dot"></div>
      <div class="label">时间与里程碑</div>
      <div class="dot"></div>
      <div class="divider-line"></div>
    </div>

    <div class="timer-grid">
      <!-- 1. 入坑时间 -->
      <div class="timer-card">
        <div class="timer-header">
          <div class="timer-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>
          </div>
          <div class="timer-title">距离入坑已走过</div>
        </div>
        <div class="timer-digits">
          <span class="digit-num">{{ tPit.days }}</span> <span class="digit-unit">天</span>
          <span class="digit-num">{{ tPit.hours }}</span> <span class="digit-unit">时</span>
          <span class="digit-num">{{ tPit.minutes }}</span> <span class="digit-unit">分</span>
          <span class="digit-num highlight">{{ tPit.seconds }}</span> <span class="digit-unit">秒</span>
        </div>
        <div class="timer-meta">起始时间：2024年08月20日</div>
      </div>

      <!-- 2. 重大安全事件 -->
      <div class="timer-card accordion" :class="{ active: showSecurityStory }" @click="showSecurityStory = !showSecurityStory">
        <div class="timer-header">
          <div class="timer-icon danger">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M9.5 12l1.8 1.8L14.5 10"/></svg>
          </div>
          <div class="timer-title">距离上次重大安全事故</div>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="timer-digits">
          <span class="digit-num">{{ tSec.days }}</span> <span class="digit-unit">天</span>
          <span class="digit-num">{{ tSec.hours }}</span> <span class="digit-unit">时</span>
          <span class="digit-num">{{ tSec.minutes }}</span> <span class="digit-unit">分</span>
          <span class="digit-num highlight">{{ tSec.seconds }}</span> <span class="digit-unit">秒</span>
        </div>
        <div v-show="showSecurityStory" class="timer-story">
          当时迷之自信，物理机被黑被当跳板机导致停机资料全丢。留下了深深的教训，警钟长鸣。
        </div>
        <div class="timer-meta">事故发生：2025年06月29日</div>
      </div>

      <!-- 3. 云平台上线 -->
      <div class="timer-card">
        <div class="timer-header">
          <div class="timer-icon success">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="timer-title">云平台稳定运行</div>
        </div>
        <div class="timer-digits">
          <span class="digit-num">{{ tOnline.days }}</span> <span class="digit-unit">天</span>
          <span class="digit-num">{{ tOnline.hours }}</span> <span class="digit-unit">时</span>
          <span class="digit-num">{{ tOnline.minutes }}</span> <span class="digit-unit">分</span>
          <span class="digit-num highlight">{{ tOnline.seconds }}</span> <span class="digit-unit">秒</span>
        </div>
        <div class="timer-meta">上线时间：2026年02月27日 19:41</div>
      </div>

      <!-- 4. 首个甲骨文账号 -->
      <div class="timer-card">
        <div class="timer-header">
          <div class="timer-icon warning">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>
          </div>
          <div class="timer-title">首个甲骨文账号存活</div>
        </div>
        <div class="timer-digits">
          <span class="digit-num">{{ tOci.days }}</span> <span class="digit-unit">天</span>
          <span class="digit-num">{{ tOci.hours }}</span> <span class="digit-unit">时</span>
          <span class="digit-num">{{ tOci.minutes }}</span> <span class="digit-unit">分</span>
          <span class="digit-num highlight">{{ tOci.seconds }}</span> <span class="digit-unit">秒</span>
        </div>
        <div class="timer-meta">注册时间：2025年07月17日</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const DATES = {
  pit: new Date('2024-08-20T00:00:00+08:00').getTime(),
  sec: new Date('2025-06-29T00:00:00+08:00').getTime(),
  online: new Date('2026-02-27T19:41:00+08:00').getTime(),
  oci: new Date('2025-07-17T00:00:00+08:00').getTime()
}

const showSecurityStory = ref(false)

function pad(n) {
  return String(n).padStart(2, '0')
}

function calcDiff(start) {
  const now = Date.now()
  let diff = Math.max(0, now - start)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff %= (1000 * 60 * 60 * 24)
  const hours = pad(Math.floor(diff / (1000 * 60 * 60)))
  diff %= (1000 * 60 * 60)
  const minutes = pad(Math.floor(diff / (1000 * 60)))
  diff %= (1000 * 60)
  const seconds = pad(Math.floor(diff / 1000))
  return { days, hours, minutes, seconds }
}

const tPit = ref(calcDiff(DATES.pit))
const tSec = ref(calcDiff(DATES.sec))
const tOnline = ref(calcDiff(DATES.online))
const tOci = ref(calcDiff(DATES.oci))

let timerId = null

onMounted(() => {
  timerId = setInterval(() => {
    tPit.value = calcDiff(DATES.pit)
    tSec.value = calcDiff(DATES.sec)
    tOnline.value = calcDiff(DATES.online)
    tOci.value = calcDiff(DATES.oci)
  }, 1000)
})

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})
</script>

<style scoped>
.timer-section-wrapper {
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
.timer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
}
.timer-card {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.25s;
}
.timer-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
.timer-card.accordion {
  cursor: pointer;
}
.timer-header {
  display: flex;
  align-items: center;
  gap: 10px;
}
.timer-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(var(--vp-c-brand-1-rgb, 59, 130, 246), 0.1);
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.timer-icon.danger {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}
.timer-icon.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
}
.timer-icon.warning {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}
.timer-icon svg {
  width: 18px;
  height: 18px;
}
.timer-title {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.chevron {
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-3);
  transition: transform 0.3s;
}
.timer-card.active .chevron {
  transform: rotate(180deg);
}
.timer-digits {
  font-family: var(--vp-font-family-mono);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  letter-spacing: 0.5px;
}
.digit-unit {
  font-size: 0.75rem;
  font-weight: normal;
  color: var(--vp-c-text-3);
  margin-right: 6px;
}
.highlight {
  color: var(--vp-c-brand-1);
}
.timer-story {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  padding: 10px;
  border-radius: 6px;
  border-left: 3px solid #ef4444;
}
.timer-meta {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
}
</style>
