<template>
  <div v-if="isClosed" class="software-closed-mask">
    <div class="software-closed-card">
      <div class="closed-icon-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="closed-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
        </svg>
      </div>
      <h2 class="closed-title">服务提示</h2>
      <p class="closed-desc">当前软件已关闭</p>
      <div class="closed-tip">如有疑问，请联系管理员获取支持。</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isClosed = ref(false)

onMounted(() => {
  // 请求机器人授权接口检测
  fetch('https://auth.yunbai.icu/api/RobotApi/query_robot?appid=1')
    .then(r => r.json())
    .then(res => {
      // code 为 0 时触发关闭提示；code 为 1 时正常打开放行
      if (res && String(res.code) === '0') {
        isClosed.value = true
        if (typeof document !== 'undefined') {
          document.body.style.overflow = 'hidden'
        }
      }
    })
    .catch(() => {
      // 接口请求异常处理
    })
})
</script>

<style scoped>
.software-closed-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.software-closed-card {
  background: var(--vp-c-bg, #ffffff);
  color: var(--vp-c-text-1, #213547);
  border: 1px solid var(--vp-c-divider, rgba(60, 60, 67, 0.12));
  border-radius: 16px;
  padding: 36px 32px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  animation: cardFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.closed-icon-wrap {
  width: 64px;
  height: 64px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: rgba(239, 68, 68, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.closed-icon {
  width: 34px;
  height: 34px;
  stroke: #ef4444;
}

.closed-title {
  margin: 0 0 10px;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.closed-desc {
  margin: 0 0 16px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #ef4444;
}

.closed-tip {
  font-size: 0.88rem;
  color: var(--vp-c-text-3, rgba(60, 60, 67, 0.7));
  line-height: 1.5;
}
</style>
