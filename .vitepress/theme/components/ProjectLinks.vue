<template>
  <div class="projects-section-wrapper">
    <div class="section-group">
      <h3 class="group-title">📊 核心商用云服务架构</h3>
      <div class="project-grid">
        <a href="https://yunbai.org" target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <div class="project-body">
            <div class="project-title">云白综合云平台</div>
            <div class="project-desc">主站入口</div>
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </a>

        <a href="https://delightful-pond-062850400.7.azurestaticapps.net/" target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div class="project-body">
            <div class="project-title">平台用户协议/公告</div>
            <div class="project-desc">协议原址</div>
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </a>
      </div>
    </div>

    <div class="section-group">
      <h3 class="group-title">🎁 旗下公益与服务生态</h3>
      <div class="project-grid">
        <!-- API V1 -->
        <a href="http://api.yunbai.icu" target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-icon legacy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          </div>
          <div class="project-body">
            <div class="project-title legacy-title">API 接口管理 V1版</div>
            <div class="project-desc legacy-desc">⚠️ 老版本架构，已停止维护</div>
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </a>

        <!-- API V2 -->
        <a href="http://v2.api.yunbai.icu" target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-icon v2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <div class="project-body">
            <div class="project-title">🚀 API 接口管理 V2版</div>
            <div class="project-desc">全新维护，全新随机图API</div>
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </a>

        <!-- 客服系统 -->
        <a href="https://kf.yunbai.icu" target="_blank" rel="noopener noreferrer" class="project-card">
          <div class="project-icon kf">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </div>
          <div class="project-body">
            <div class="project-title">客服系统</div>
            <div class="project-desc">提供免费服务，可付费代写</div>
          </div>
          <div class="project-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.projects-section-wrapper {
  margin: 30px 0;
}
.section-group {
  margin-bottom: 24px;
}
.group-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 14px;
  color: var(--vp-c-text-1);
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px;
}
.project-card {
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
.project-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
.project-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(59, 130, 246, 0.1);
  color: var(--vp-c-brand-1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.project-icon.legacy {
  background: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
}
.project-icon.v2 {
  background: rgba(230, 126, 34, 0.1);
  color: #e67e22;
}
.project-icon.kf {
  background: rgba(155, 89, 182, 0.1);
  color: #9b59b6;
}
.project-icon svg {
  width: 20px;
  height: 20px;
}
.project-body {
  flex: 1;
  min-width: 0;
}
.project-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.project-title.legacy-title {
  color: #e74c3c;
}
.project-desc {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}
.project-desc.legacy-desc {
  color: #c0392b;
}
.project-arrow {
  color: var(--vp-c-text-3);
}
.project-arrow svg {
  width: 16px;
  height: 16px;
}
</style>
