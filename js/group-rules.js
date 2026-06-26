/**
 * group-rules.js
 * 渲染"群公告"三个 Accordion 条目并注入到 #group-rules-container
 */
(function () {
    const SVG_ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;

    const items = [
        {
            title: '1. 专属群规与服务边界',
            colorClass: 'doc-4',
            content: `
                <div class="header">
                    <h1>群规与技术服务边界</h1>
                    <div class="subtitle">社群纪律维护与公益项目免打扰协议</div>
                </div>
                <h2>📢 广告限制</h2>
                <p>本群并非无门槛的广告广场。如果您想发布各类推广/AFF/接单广告，<strong>必须满足以下两个条件之一</strong>：</p>
                <ul>
                    <li><strong>条件一：</strong> 您的 QQ 群等级达到 <strong>80 级及以上</strong>的活跃账号。</li>
                    <li><strong>条件二：</strong> 若等级未达标，必须<strong>提前私聊群主并取得本人的明文同意</strong>。</li>
                </ul>
                <p><span class="warning-red">严重警告：任何违规发布未经授权的广告或引流链接的行为，一律撤回消息并直接送飞机票（踢出并拉黑），绝不姑息。</span></p>
                <h2>🛠️ 技术支持边界划分</h2>
                <p>我个人的精力极其有限，在这里明确划定支持边界：<strong>本人仅对"云平台 yunbai.org 的商业服务器订单、账单、云资源硬件故障"提供一对一的技术支持。</strong></p>
                <div class="warning-box">
                    <span class="warning-title">⚠️ 公益项目免打扰协议：</span>
                    旗下所有的"公益项目"，均是我个人利用闲置算力和时间用爱发电搭建的。对于这些公益项目，除遇到导致服务全盘瘫痪的<strong>严重 system Bug</strong> 允许向我反馈外，其余任何关于"怎么配置"、"为什么连不上本地"、"能不能加功能"等琐碎技术盲区，<strong>请自行使用搜索引擎解决，非严重 Bug 严禁私聊打扰，违者拉黑</strong>。
                </div>
            `
        },
        {
            title: '2. 公益项目总览',
            colorClass: 'doc-5',
            content: `
                <div class="header">
                    <h1>我们提供以下服务</h1>
                    <div class="subtitle">官方直属业务及公益项目域名汇总</div>
                </div>
                <p>请大家根据自身的需求，妥善保存并认准以下官方直属的核心商业业务及公益项目的域名地址，请勿访问假冒或劫持网站：</p>
                <h2>📊 核心商用云服务架构</h2>
                <div class="project-link-grid">
                    <a href="https://yunbai.org" target="_blank" class="project-link-card" title="云白综合云平台（主站入口）">
                        <div class="project-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
                        <div class="project-link-body"><div class="project-link-title">云白综合云平台</div><div class="project-link-desc">主站入口</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                    <a href="https://delightful-pond-062850400.7.azurestaticapps.net/" target="_blank" class="project-link-card" title="平台用户协议/公告原址">
                        <div class="project-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg></div>
                        <div class="project-link-body"><div class="project-link-title">平台用户协议/公告</div><div class="project-link-desc">协议原址</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                </div>
                <h2>🎁 旗下公益项目生态（用爱发电）</h2>
                <p>请大家珍惜公共资源，合理规范调用，并严格遵守前述的"非 Bug 勿扰"原则：</p>
                <div class="project-link-grid">
                    <a href="http://music.yunbai.icu" target="_blank" class="project-link-card">
                        <div class="project-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div>
                        <div class="project-link-body"><div class="project-link-title">网页悬浮窗音乐播放器</div><div class="project-link-desc">十分好看的一个悬浮窗播放器</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                    <a href="http://yd.yunbai.icu" target="_blank" class="project-link-card">
                        <div class="project-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
                        <div class="project-link-body"><div class="project-link-title">QQ 等级代挂系统</div><div class="project-link-desc">一键全自动化托管挂级</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                    <a href="http://pay.yunbai.icu" target="_blank" class="project-link-card">
                        <div class="project-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg></div>
                        <div class="project-link-body"><div class="project-link-title">码支付接口平台</div><div class="project-link-desc">免费便利的免签聚合支付API</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                    <a href="http://api.yunbai.icu" target="_blank" class="project-link-card">
                        <div class="project-link-icon" style="color:#e74c3c;background:rgba(231,76,60,0.1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></div>
                        <div class="project-link-body"><div class="project-link-title" style="color:#e74c3c">API 接口管理 V1版</div><div class="project-link-desc" style="color:#c0392b">⚠️ 老版本架构，已停止维护</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                    <a href="http://v2.api.yunbai.icu" target="_blank" class="project-link-card">
                        <div class="project-link-icon" style="color:#e67e22;background:rgba(230,126,34,0.1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div>
                        <div class="project-link-body"><div class="project-link-title">🚀 API 接口管理 V2版</div><div class="project-link-desc">全新维护，全新随机图API</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                    <a href="http://nsgr.cn" target="_blank" class="project-link-card">
                        <div class="project-link-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></div>
                        <div class="project-link-body"><div class="project-link-title">高清无损免费图床</div><div class="project-link-desc">稳定、高速的无偿图片托管空间</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                    <a href="https://kf.yunbai.icu" target="_blank" class="project-link-card">
                        <div class="project-link-icon" style="color:#9b59b6;background:rgba(155,89,182,0.1)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></div>
                        <div class="project-link-body"><div class="project-link-title">客服系统</div><div class="project-link-desc">不提供免费服务，可付费代写</div></div>
                        <div class="project-link-arrow">${SVG_ARROW}</div>
                    </a>
                </div>
                <div class="footer-note">规矩的建立是为了提供更稳定的服务，感谢大家的配合与支持！祝玩机愉快。</div>
            `
        },
        {
            title: '3. 免费公益 🛠️ 有偿服务说明',
            colorClass: 'doc-4',
            content: `
                <div class="header">
                    <h1>免费公益 🛠️ 有偿服务说明</h1>
                    <div class="subtitle">公益与有偿服务技术支持边界</div>
                </div>
                <h2>🆓 免费公益产品·零技术支持</h2>
                <ul>
                    <li>旗下所有免费公益产品均属个人用爱发电，能用就用，不能用就等，不承诺任何 SLA。</li>
                    <li>怎么接入、为什么报错、能不能加功能……此类问题一律不予回复，请善用搜索引擎。</li>
                    <li>唯一例外：导致服务全盘瘫痪的严重系统级 Bug 允许反馈，其余私聊打扰者拉黑。</li>
                    <li>如果你有钞能力，以上限制可以重新商议。💰</li>
                </ul>
                <h2>🛠️ 网站搭建 & 疑难解答·有偿</h2>
                <ul>
                    <li>建站、环境配置、代码调试、服务器折腾类需求，均可来聊。</li>
                    <li>收费标准：看心情。也可能不收费。影响因素包括问题难度、当天状态、你说话好不好听。</li>
                    <li>先聊，价钱后说。态度好的优先，上来就催、一开口砍价的直接谢绝。</li>
                    <li>非付定金项目不做 DDL 承诺。</li>
                </ul>
            `
        }
    ];

    function render() {
        const container = document.getElementById('group-rules-container');
        if (!container) return;

        items.forEach(item => {
            const el = document.createElement('div');
            el.className = 'accordion-item';
            el.innerHTML = `
                <div class="accordion-header">
                    <span>${item.title}</span>
                    <span class="icon">＋</span>
                </div>
                <div class="accordion-content ${item.colorClass}">
                    <div class="inner-text">${item.content}</div>
                </div>
            `;
            container.appendChild(el);
        });

        // 绑定折叠交互
        container.querySelectorAll('.accordion-item').forEach(item => {
            item.querySelector('.accordion-header').addEventListener('click', function () {
                const isActive = item.classList.contains('active');
                container.querySelectorAll('.accordion-item').forEach(i => {
                    i.classList.remove('active');
                    i.querySelector('.icon').innerText = '＋';
                });
                if (!isActive) {
                    item.classList.add('active');
                    item.querySelector('.icon').innerText = '－';
                    setTimeout(() => item.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400);
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', render);
})();
