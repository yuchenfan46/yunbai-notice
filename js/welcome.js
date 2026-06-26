/**
 * welcome.js
 * 渲染欢迎卡片内容区（记事 + 鸣谢）到 #welcome-content
 */
(function () {
    var html = `
        <section>
            <h2>JOURNEY / 记事</h2>
            <div class="about-p">
                <p>故事开始于 <span class="highlight">2024 年 8 月 20 日</span>。</p>
                <p>那天刷到的第一个建站视频，像是一把钥匙，打开了代码世界的大门。在技校的学习时光里，我没有那种按部就班的束缚，反而有更多的时间去钻研那些真正让我着迷的技术。</p>
                <p>从对着视频敲下第一行代码，到 <span class="highlight">2025 年 9 月</span> 亲手让云白（yunbai）云平台上线。我习惯在实操中寻找答案，在 Oracle 节点和 API 接口的博弈中，构筑出这片属于自己的天地。</p>
                <p>技术对我而言，是技能，更是热爱。感谢这一路上给予我启发和支持的每一位，感谢所有陪伴云白成长的你们。</p>
                <p style="text-align:center;opacity:0.8;font-size:0.85rem">—— 特别鸣谢下列名单，致敬所有人。</p>
            </div>
        </section>
        <section>
            <h2>CREDITS / 鸣谢</h2>
            <div class="project-link-grid" style="margin-top:15px">
                <a href="https://qm.qq.com/q/y0o6LuKsy4" target="_blank" class="project-link-card" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.15)">
                    <div class="project-link-icon" style="color:#7dd3fc;background:rgba(125,211,252,0.1)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div class="project-link-body">
                        <div class="project-link-title" style="color:#fff">主核Kernyr</div>
                        <div class="project-link-desc" style="color:rgba(255,255,255,0.5)">核心支持与贡献</div>
                    </div>
                    <div class="project-link-arrow" style="background:rgba(255,255,255,0.1);color:#fff">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
                <a href="https://qm.qq.com/q/pvl8rabaOk" target="_blank" class="project-link-card" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.15)">
                    <div class="project-link-icon" style="color:#2ecc71;background:rgba(46,204,113,0.1)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <div class="project-link-body">
                        <div class="project-link-title" style="color:#fff">森</div>
                        <div class="project-link-desc" style="color:rgba(255,255,255,0.5)">特别鸣谢</div>
                    </div>
                    <div class="project-link-arrow" style="background:rgba(255,255,255,0.1);color:#fff">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
                <a href="https://www.bt.cn" target="_blank" class="project-link-card" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.15)">
                    <div class="project-link-icon" style="color:#27ae60;background:rgba(39,174,96,0.1)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                    </div>
                    <div class="project-link-body">
                        <div class="project-link-title" style="color:#fff">宝塔面板 (bt.cn)</div>
                        <div class="project-link-desc" style="color:rgba(255,255,255,0.5)">服务器运维基石</div>
                    </div>
                    <div class="project-link-arrow" style="background:rgba(255,255,255,0.1);color:#fff">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
                <a href="https://www.google.com" target="_blank" class="project-link-card" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.15)">
                    <div class="project-link-icon" style="color:#e74c3c;background:rgba(231,76,60,0.1)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <div class="project-link-body">
                        <div class="project-link-title" style="color:#fff">Google</div>
                        <div class="project-link-desc" style="color:rgba(255,255,255,0.5)">知识与灵感源泉</div>
                    </div>
                    <div class="project-link-arrow" style="background:rgba(255,255,255,0.1);color:#fff">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
                <a href="https://www.oracle.com" target="_blank" class="project-link-card" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.15)">
                    <div class="project-link-icon" style="color:#c0392b;background:rgba(192,57,43,0.1)">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                    </div>
                    <div class="project-link-body">
                        <div class="project-link-title" style="color:#fff">Oracle</div>
                        <div class="project-link-desc" style="color:rgba(255,255,255,0.5)">云计算资源依托</div>
                    </div>
                    <div class="project-link-arrow" style="background:rgba(255,255,255,0.1);color:#fff">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                    </div>
                </a>
            </div>
        </section>
    `;

    document.addEventListener('DOMContentLoaded', function () {
        var el = document.getElementById('welcome-content');
        if (el) el.innerHTML = html;
    });
})();
