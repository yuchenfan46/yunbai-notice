/**
 * about-us.js
 * 渲染关于我们内容区（平台介绍 + 核心成员）到 #welcome-content
 */
(function () {
    var html = `
        <section>
            <h2>ABOUT / 关于我们</h2>
            <div class="about-p">
                <p>云白（<span class="highlight">yunbai.icu</span>）是一个充满热情和创新精神的技术社区。我们致力于打造一个开放、包容的平台，让每一位成员都能在这里找到属于自己的位置。</p>
                <p>从 <span class="highlight">2024 年 8 月 20 日</span> 开始，我们一步步构筑出这片属于自己的数字天地。在这个过程中，我们学会了坚持、创新和协作，用代码赋予每一个想法生命力。</p>
                <p>我们坚信技术是一把双刃剑，用心去铸造它，就能为世界带来美好的改变。无论是初学者还是技术大牛，在这里你都能找到属于自己的学习路径和成长机会。</p>
                <p>云白的存在不仅仅是一个平台，更是一个承诺——一个帮助每一位成员从兴趣出发，走向实践，最终成就自我的承诺。</p>
                <p style="text-align:center;opacity:0.8;font-size:0.85rem">—— 感谢所有陪伴我们成长的伙伴和支持者。</p>
            </div>
        </section>
        <section>
            <h2>TEAM / 核心成员</h2>
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
        var el = document.getElementById('about-content');
        if (el) el.innerHTML = html;
    });
})();
