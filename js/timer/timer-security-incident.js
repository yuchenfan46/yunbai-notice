/**
 * timer-security-incident.js
 * 计算「距离上次重大安全漏洞」的时间，精确到秒，实时刷新，渲染到 #securityIncidentTimer
 * 点击卡片可展开/收起说明文字，展开动画参考 online-announce.js 的手风琴实现
 */
(function () {
    // 上次重大安全漏洞发生时间（北京时间），如需修改请调整这里
    const START_TIME = '2025-06-29T00:00:00+08:00';
    const CONTAINER_ID = 'securityIncidentTimer';
    const STORY_TEXT = '你当时迷之自信，物理机被黑，被黑客拿去做跳板机。导致服务器被停机资料全丢。给我留下了深深的教训。';

    // 与 online-announce.js 保持一致的向下箭头图标，放在标题最左侧
    const SVG_CHEVRON = `<svg class="timer-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    const SVG_SHIELD  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="M9.5 12l1.8 1.8L14.5 10"/></svg>`;

    function pad(n) {
        return String(n).padStart(2, '0');
    }

    function render() {
        const card = document.getElementById(CONTAINER_ID);
        if (!card) return;

        // 结构只搭建一次：header（可点击，含左侧箭头+图标+数字）+ 可展开的说明内容
        card.classList.add('timer-accordion');
        card.innerHTML = `
            <div class="timer-card-header">
                <div class="timer-card-icon">${SVG_SHIELD}</div>
                <div class="timer-card-body">
                    <div class="timer-card-title">距离上次重大安全漏洞</div>
                    <div class="timer-card-value">
                        <span class="timer-days" id="secIncidentDays">0</span><span class="timer-days-unit">天</span>
                        <span class="timer-clock" id="secIncidentClock">00:00:00</span>
                    </div>
                </div>
                ${SVG_CHEVRON}
            </div>
            <div class="timer-accordion-content">
                <div class="timer-accordion-inner">
                    <div class="timer-accordion-divider"></div>
                    <div class="timer-accordion-text">${STORY_TEXT}</div>
                </div>
            </div>`;

        // 点击展开/收起，动画交给 CSS 的 max-height + transform 过渡处理
        card.querySelector('.timer-card-header').addEventListener('click', function () {
            card.classList.toggle('active');
        });

        // 数字每秒更新，只改文本内容，不重建 DOM，避免展开状态和事件被冲掉
        const start = new Date(START_TIME).getTime();
        const daysEl  = document.getElementById('secIncidentDays');
        const clockEl = document.getElementById('secIncidentClock');

        function update() {
            const now = Date.now();
            let diff = Math.max(0, now - start);

            const days = Math.floor(diff / 86400000);
            diff -= days * 86400000;
            const hours = Math.floor(diff / 3600000);
            diff -= hours * 3600000;
            const minutes = Math.floor(diff / 60000);
            diff -= minutes * 60000;
            const seconds = Math.floor(diff / 1000);

            daysEl.textContent = days;
            clockEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
        }

        update();
        setInterval(update, 1000);
    }

    document.addEventListener('DOMContentLoaded', render);
})();
