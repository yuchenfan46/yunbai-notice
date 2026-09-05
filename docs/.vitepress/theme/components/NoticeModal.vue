<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="modal-fade">
        <div 
          v-if="visible" 
          class="home-modal-overlay" 
          @wheel.prevent 
          @touchmove.prevent
        >
          <div class="home-modal-card" @wheel.stop @touchmove.stop>
            <div class="home-modal-header">
              <div class="header-tag">📢 平台业务重要调整</div>
              <h3 class="home-modal-title">香港业务关停与对接/代购说明</h3>
            </div>

            <div class="home-modal-body">
              <div class="notice-item alert-stop">
                <div class="item-header">
                  <span class="icon">🚫</span>
                  <strong>香港 A / B / C 区已停止运营</strong>
                </div>
                <p class="item-desc">目前香港 A 区、B 区、C 区已全部停止运营，请知悉。</p>
              </div>

              <div class="notice-item">
                <div class="item-header">
                  <span class="icon">🔄</span>
                  <strong>现仅做对接机业务</strong>
                </div>
                <p class="item-desc">
                  上游主营为 <a href="https://jwvps.cn" target="_blank" rel="noopener noreferrer" class="link-btn">jwvps.cn</a>，大家也可以多看看上面的其他机器产品。
                </p>
              </div>

              <div class="notice-item promo-box">
                <div class="item-header">
                  <span class="icon">🎁</span>
                  <strong class="promo-title">独家 6.5 折代购 / 接回平台</strong>
                </div>
                <p class="item-desc">
                  我有 <strong>6.5 折</strong> 优惠渠道！在上面看中了可以直接找我买，并能帮你接到我平台上统一管理。
                </p>
                <div class="promo-footer-tag">
                  ⚡ <strong>续费同价</strong> · 只收取 <strong>1 ~ 3 块</strong> 服务费（具体看心情）
                </div>
              </div>
            </div>

            <div class="home-modal-footer">
              <button 
                class="confirm-btn" 
                :disabled="countdown > 0" 
                :class="{ disabled: countdown > 0 }"
                @click="handleConfirm"
              >
                <span v-if="countdown > 0">请仔细阅读知晓 ({{ countdown }}s)</span>
                <span v-else>我已阅读并确认知晓</span>
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const STORAGE_KEY = '***'
const visible = ref(false)
const countdown = ref(10)
let timer = null

const lockScroll = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  }
}

const unlockScroll = () => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
}

onMounted(() => {
  try {
    const confirmed = localStorage.getItem(STORAGE_KEY)
    if (!confirmed) {
      visible.value = true
      lockScroll()
      timer = setInterval(() => {
        if (countdown.value > 1) {
          countdown.value--
        } else {
          countdown.value = 0
          clearInterval(timer)
          timer = null
        }
      }, 1000)
    }
  } catch (e) {
    // 兼容受限环境
  }
})

onUnmounted(() => {
  unlockScroll()
  if (timer) {
    clearInterval(timer)
  }
})

const handleConfirm = () => {
  if (countdown.value > 0) return
  try {
    localStorage.setItem(STORAGE_KEY, '1')
  } catch (e) {}
  unlockScroll()
  visible.value = false
}
</script>

<style scoped>
.home-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  touch-action: none;
  overscroll-behavior: contain;
}

.home-modal-card {
  width: 100%;
  max-width: 480px;
  background: var(--vp-c-bg, #ffffff);
  color: var(--vp-c-text-1, #2c3e50);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
  border-radius: 18px;
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
  animation: modal-pop 0.25s ease-out;
  touch-action: auto;
}

@keyframes modal-pop {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(16px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.home-modal-header {
  padding: 22px 24px 16px;
  border-bottom: 1px solid var(--vp-c-divider, #eee);
}

.header-tag {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #ea580c;
  background: rgba(234, 88, 12, 0.12);
  padding: 3px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
}

.home-modal-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: var(--vp-c-text-1, #1a202c);
  line-height: 1.3;
}

.home-modal-body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.notice-item {
  padding: 12px 14px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft, #f8fafc);
  border: 1px solid var(--vp-c-divider, #e2e8f0);
}

.notice-item.alert-stop {
  background: rgba(239, 68, 68, 0.06);
  border-color: rgba(239, 68, 68, 0.2);
}
:root.dark .notice-item.alert-stop {
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.3);
}

.item-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1, #1e293b);
  margin-bottom: 4px;
}

.item-desc {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--vp-c-text-2, #64748b);
}

.link-btn {
  color: var(--vp-c-brand-1, #10b981);
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.promo-box {
  background: rgba(16, 185, 129, 0.08);
  border: 1.5px dashed var(--vp-c-brand-1, #10b981);
}
:root.dark .promo-box {
  background: rgba(16, 185, 129, 0.12);
}

.promo-title {
  color: var(--vp-c-brand-1, #10b981);
}

.promo-footer-tag {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed rgba(16, 185, 129, 0.3);
  font-size: 0.86rem;
  color: var(--vp-c-brand-1, #10b981);
}

.home-modal-footer {
  padding: 14px 24px 20px;
  border-top: 1px solid var(--vp-c-divider, #eee);
}

.confirm-btn {
  width: 100%;
  padding: 13px 20px;
  border-radius: 12px;
  border: none;
  background: var(--vp-c-brand-1, #10b981);
  color: #ffffff;
  font-size: 0.98rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirm-btn:not(.disabled):hover {
  background: var(--vp-c-brand-2, #059669);
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.38);
}

.confirm-btn.disabled {
  background: var(--vp-c-gray-3, #9ca3af) !important;
  color: #f3f4f6 !important;
  cursor: not-allowed;
  opacity: 0.7;
  box-shadow: none;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
