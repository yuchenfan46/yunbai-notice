/**
 * timer-platform-online.js
 * 计算「云平台已上线」的时间，精确到秒，实时刷新，渲染到 #platformOnlineTimer
 */
(function () {
    // 云平台上线时间（北京时间），如需修改请调整这里
    const START_TIME = '2026-02-27T19:41:00+08:00';
    const CONTAINER_ID = 'platformOnlineTimer';

    const SVG_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;

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
                    <div class="timer-card-title">云平台已上线</div>
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
