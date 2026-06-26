/**
 * online-announce.js
 * 从云端 API 拉取公告、友情链接、广告数据，渲染到 #onlineContainer
 */
(function () {
    const API = {
        notice: 'https://v2.api.yunbai.icu/api/yunbai/api.php?type=1',
        link:   'https://v2.api.yunbai.icu/api/yunbai/api.php?type=3',
        ad:     'https://v2.api.yunbai.icu/api/yunbai/api.php?type=2'
    };

    // SVG 常量
    const SVG_CHEVRON = `<svg class="online-chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    const SVG_BELL    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0;color:#f39c12"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
    const SVG_LINK    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0;color:#2ecc71"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    const SVG_LINK_SM = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;flex-shrink:0;color:#2ecc71"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
    const SVG_ARROW   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`;
    const SVG_STAR    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;flex-shrink:0;color:#e74c3c"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

    function getValidList(data, requiredField, statusField) {
        if (!data) return [];

        // 【判断拦截】如果接口返回了 code，且不等于 1（比如查询失败），直接返回空数组
        if (data.code !== undefined && String(data.code) !== "1") {
            return [];
        }

        // 【兼容老旧格式】判断数据在哪一层：老接口是数组，新接口在 data.data 里
        let list = Array.isArray(data) ? data
            : Array.isArray(data.data) ? data.data
            : data[requiredField] ? [data] : [];
            
        // 【过滤状态】校验广告 status（只留等于 1 正常的）和公告 state
        return list.filter(item => {
            if (!item || !item[requiredField]) return false;
            // 因为是用 != 1 弱等于，所以无论是返回数字 1 还是字符串 "1" 都能正确匹配
            if (item[statusField] !== undefined && item[statusField] != 1) return false;
            return true;
        });
    }

    function buildNoticeHTML(notice) {
        return `
            <div class="online-accordion-item">
                <div class="online-accordion-header">
                    <div class="title-wrap">
                        <span class="online-tag notice" style="display:inline-flex;align-items:center;gap:4px">${SVG_BELL}公告</span>
                        <span>${notice.title}</span>
                    </div>
                    ${SVG_CHEVRON}
                </div>
                <div class="online-accordion-content">
                    <div class="online-inner">
                        <div class="online-inner-divider"></div>
                        <div class="online-meta">📅 ${notice.time || '未知'} &nbsp;·&nbsp; 👤 ${notice.username || '系统'}</div>
                        <div class="online-content-text">${notice.content}</div>
                    </div>
                </div>
            </div>`;
    }

    function buildLinksHTML(links) {
        let cards = links.map(link => {
            const domain = (() => { try { return new URL(link.url).hostname; } catch(e) { return link.url; } })();
            return `
                <a href="${link.url}" target="_blank" class="online-link-card">
                    <div class="online-link-card-icon">${SVG_LINK_SM}</div>
                    <div class="online-link-card-body">
                        <div class="online-link-card-name">${link.name}</div>
                        <div class="online-link-card-domain">${domain}</div>
                    </div>
                    <div class="online-link-card-arrow">${SVG_ARROW}</div>
                </a>`;
        }).join('');

        return `
            <div class="online-accordion-item">
                <div class="online-accordion-header">
                    <div class="title-wrap">
                        <span class="online-tag link" style="display:inline-flex;align-items:center;gap:4px">${SVG_LINK}链接</span>
                        <span>友情链接与合作伙伴</span>
                    </div>
                    ${SVG_CHEVRON}
                </div>
                <div class="online-accordion-content">
                    <div class="online-inner">
                        <div class="online-inner-divider"></div>
                        <div class="online-link-grid">${cards}</div>
                    </div>
                </div>
            </div>`;
    }

    function buildAdsHTML(ads) {
        let items = ads.map(ad => {
            const url = ad.jump_url || ad.url || '#';
            const creator = ad.username || (ad.user_id == '0' ? '后台管理员' : `用户ID:${ad.user_id || '未知'}`);
            return `
                <div class="online-ad-item">
                    <div class="online-ad-title">🔗 ${ad.webname}</div>
                    <div class="online-ad-meta">发布者: ${creator} &nbsp;·&nbsp; ${ad.date || '未知'}</div>
                    ${ad.introduction ? `<div class="online-ad-intro">${ad.introduction}</div>` : ''}
                    <a href="${url}" target="_blank" class="online-ad-btn">前往访问 ➔</a>
                </div>`;
        }).join('');

        return `
            <div class="online-accordion-item">
                <div class="online-accordion-header">
                    <div class="title-wrap">
                        <span class="online-tag ad" style="display:inline-flex;align-items:center;gap:4px">${SVG_STAR}推荐</span>
                        <span>独家赞助与推荐项目</span>
                    </div>
                    ${SVG_CHEVRON}
                </div>
                <div class="online-accordion-content">
                    <div class="online-inner">
                        <div class="online-inner-divider"></div>
                        <div class="online-ad-list">${items}</div>
                    </div>
                </div>
            </div>`;
    }

    function initOnlineAccordion(container) {
        container.querySelectorAll('.online-accordion-header').forEach(header => {
            header.addEventListener('click', function () {
                const item = this.parentElement;
                const isActive = item.classList.contains('active');
                container.querySelectorAll('.online-accordion-item').forEach(el => el.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                    setTimeout(() => item.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 350);
                }
            });
        });
    }

    function render() {
        const container = document.getElementById('onlineContainer');
        const loading   = document.getElementById('onlineLoading');
        if (!container) return;

        Promise.all([
            fetch(API.notice).then(r => r.json()).catch(() => null),
            fetch(API.link).then(r => r.json()).catch(() => null),
            fetch(API.ad).then(r => r.json()).catch(() => null)
        ]).then(([noticeData, linkData, adData]) => {
            if (loading) loading.remove();

            // 这里分别传入了不同接口判断有效性的关键字段和状态字段
            // 公告取 title 和 state
            const notices = getValidList(noticeData, 'title', 'state');
            const links   = getValidList(linkData,   'name',  'state');
            // 广告取 webname 和 status
            const ads     = getValidList(adData,     'webname','status');

            // 当三个接口都为空或者 code!=1 时，由于上面都会返回空数组，这里就会显示“暂无云端数据”
            if (!notices.length && !links.length && !ads.length) {
                container.insertAdjacentHTML('beforeend', `<div class="online-empty">— 暂无云端数据 —</div>`);
                return;
            }

            notices.forEach(n => container.insertAdjacentHTML('beforeend', buildNoticeHTML(n)));
            if (links.length) container.insertAdjacentHTML('beforeend', buildLinksHTML(links));
            if (ads.length)   container.insertAdjacentHTML('beforeend', buildAdsHTML(ads));

            initOnlineAccordion(container);
        });
    }

    document.addEventListener('DOMContentLoaded', render);
})();
