/**
 * welcome.js
 * 渲染欢迎卡片内容区（平台欢迎 + 新年倒计时）到 #welcome-content
 */
(function () {
    // 计算距离 2027 年 1 月 1 日的时间
    function calculateCountdown() {
        const now = new Date();
        const nextYear = new Date(2027, 0, 1);
        const diff = nextYear - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        return { days, hours, minutes, seconds };
    }

    const countdown = calculateCountdown();
    
    var html = `
        <section>
            <h2>WELCOME / 欢迎来到云白</h2>
            <div class="about-p">
                <p>欢迎来到 <span class="highlight">云白（yunbai.icu）</span> 社区！这是一个汇聚技术热爱者、代码创意家和未来梦想家的地方。</p>
                <p>在这里，我们相信每一个想法都值得被实现，每一个学习者都能找到属于自己的成长之路。无论你是初出茅庐的编程新手，还是久经沙场的技术老手，云白都为你敞开怀抱。</p>
                <p>我们用 <span class="highlight">代码</span> 书写梦想，用 <span class="highlight">社区</span> 温暖彼此。这不仅仅是一个平台，更是一个家——每个人都能在这里找到归属感，实现自己的技术价值。</p>
                <p>感谢你的到来。让我们一起，在代码的世界里闪闪发光。🚀</p>
            </div>
        </section>
        <section>
            <h2>COUNTDOWN / 新年倒计时</h2>
            <div class="countdown-wrapper" style="margin-top:20px">
                <div class="countdown-item">
                    <div class="countdown-value">${String(countdown.days).padStart(3, '0')}</div>
                    <div class="countdown-label">天</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-value">${String(countdown.hours).padStart(2, '0')}</div>
                    <div class="countdown-label">小时</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-value">${String(countdown.minutes).padStart(2, '0')}</div>
                    <div class="countdown-label">分钟</div>
                </div>
                <div class="countdown-item">
                    <div class="countdown-value">${String(countdown.seconds).padStart(2, '0')}</div>
                    <div class="countdown-label">秒</div>
                </div>
            </div>
            <p style="text-align:center;margin-top:20px;color:rgba(255,255,255,0.6);font-size:0.9rem">距离 <span class="highlight">2027 年新年</span> 还有</p>
        </section>
    `;

    document.addEventListener('DOMContentLoaded', function () {
        var el = document.getElementById('welcome-content');
        if (el) el.innerHTML = html;
        
        // 每秒更新倒计时
        setInterval(function() {
            const countdown = calculateCountdown();
            var countdownItems = document.querySelectorAll('.countdown-value');
            if (countdownItems.length === 4) {
                countdownItems[0].textContent = String(countdown.days).padStart(3, '0');
                countdownItems[1].textContent = String(countdown.hours).padStart(2, '0');
                countdownItems[2].textContent = String(countdown.minutes).padStart(2, '0');
                countdownItems[3].textContent = String(countdown.seconds).padStart(2, '0');
            }
        }, 1000);
    });
})();
