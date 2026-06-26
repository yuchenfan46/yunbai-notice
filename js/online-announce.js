/**
 * online-announce.js (防乱码万能兼容版)
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
        if (data.code !== undefined && String(data.code) !== "1") {
            return [];
        }
        let list = Array.isArray(data) ? data
            : Array.isArray(data.data) ? data.data
            : data[requiredField] ? [data] : [];
            
        return list.filter(item => {
            if (!item || !item[requiredField]) return false;
            if (item[statusField] !== undefined && item[statusField] != 1) return false;
            return true;
        });
    }

    function buildNoticeHTML(notice) {
        return `
            <div class="online-accordion-item">
                <div class="online-accordion-header">
                    <div class="title-wrap">
                        <span class="online-tag notice" style="display:inline-flex;align-items:center;gap:4px">${SVG_BELL}\u516c\u544a</span>
                        <span>${notice.title}</span>
                    </div>
                    ${SVG_CHEVRON}
                </div>
                <div class="online-accordion-content">
                    <div class="online-inner">
                        <div class="online-inner-divider"></div>
                        <div class="online-meta">📅 ${notice.time || '\u672a\u77e5'} &nbsp;·&nbsp; 👤 ${notice.username || '\u7cfb\u7edf'}</div>
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
                        <span class="online-tag link" style="display:inline-flex;align-items:center;gap:4px">${SVG_LINK}\u94fe\u63a5</span>
                        <span>\u53cb\u60c5\u94fe\u63a5\u4e0e\u5408\u4f5c\u4f19\u4f34</span>
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
            const creator = ad.username || (ad.user_id == '0' ? '\u540e\u53f0\u7ba1\u7406\u5458' : `\u7528\u6237ID:${ad.user_id || '\u672a\u77e5'}`);
            return `
                <div class="online-ad-item">
                    <div class="online-ad-title">🔗 ${ad.webname}</div>
                    <div class="online-ad-meta">\u53d1\u5e03\u8005: ${creator} &nbsp;·&nbsp; ${ad.date || '\u672a\u77e5'}</div>
                    ${ad.introduction ? `<div class="online-ad-intro">${ad.introduction}</div>` : ''}
                    <a href="${url}" target="_blank" class="online-ad-btn">\u524d\u5f80\u8bbf\u95ee \u2794</a>
                </div>`;
        }).join('');

        return `
            <div class="online-accordion-item">
                <div class="online-accordion-header">
                    <div class="title-wrap">
                        <span class="online-tag ad" style="display:inline-flex;align-items:center;gap:4px">${SVG_STAR}\u63a8\u8350</span>
                        <span>\u72ec\u5bb6\u8d5e\u52a9\u4e0e\u63a8\u8350\u9879\u76ee</span>
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

            const notices = getValidList(noticeData, 'title', 'state');
            const links   = getValidList(linkData,   'name',  'state');
            const ads     = getValidList(adData,     'webname','status');

            if (!notices.length && !links.length && !ads.length) {
                container.insertAdjacentHTML('beforeend', `<div class="online-empty">\u2014 \u6682\u65e0\u4e91\u7aef\u6570\u636e \u2014</div>`);
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
