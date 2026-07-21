/**
 * timer-pit-days.js
 * 计算「距离入坑」的时间，精确到秒，实时刷新，渲染到 #pitDaysTimer
 */
(function () {
    // 入坑起始时间（北京时间），如需修改请调整这里
    const START_TIME = '2024-08-20T00:00:00+08:00';
    const CONTAINER_ID = 'pitDaysTimer';

    const SVG_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>`;

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
                    <div class="timer-card-title">距离入坑</div>
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
