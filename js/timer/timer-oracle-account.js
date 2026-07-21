/**
 * timer-oracle-account.js
 * 计算「第一个甲骨文账号已存活」的时间，精确到秒，实时刷新，渲染到 #oracleAccountTimer
 */
(function () {
    // 第一个甲骨文账号注册/存活起始时间（北京时间），如需修改请调整这里
    const START_TIME = '2025-07-17T00:00:00+08:00';
    const CONTAINER_ID = 'oracleAccountTimer';

    const SVG_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>`;

    function pad(n) {
        return String(n).padStart(2, '0');
    }

    function render() {
        const container = document.getElementById(CONTAINER_ID);
        if (!container) return;

        const start = new Date(START_TIME).getTime();

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

            container.innerHTML = `
                <div class="timer-card-icon">${SVG_ICON}</div>
                <div class="timer-card-body">
                    <div class="timer-card-title">第一个甲骨文账号已存活</div>
                    <div class="timer-card-value">
                        <span class="timer-days">${days}</span><span class="timer-days-unit">天</span>
                        <span class="timer-clock">${pad(hours)}:${pad(minutes)}:${pad(seconds)}</span>
                    </div>
                </div>`;
        }

        update();
        setInterval(update, 1000);
    }

    document.addEventListener('DOMContentLoaded', render);
})();
