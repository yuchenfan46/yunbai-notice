/**
 * accordion-cross-sync.js
 * 让"群公告 / 云平台注意事项"（.accordion-item）与
 * "云端公告"（.online-accordion-item）这两套彼此独立的手风琴互相联动关闭。
 *
 * 注意：本文件只做事件委托，不修改 group-rules.js / platform-notices.js /
 * online-announce.js 里任何原有的渲染逻辑与展开/收起逻辑，纯新增、不侵入。
 */
(function () {
    function closeItems(selector) {
        document.querySelectorAll(selector).forEach(item => {
            item.classList.remove('active');
            const icon = item.querySelector('.icon');
            if (icon) icon.innerText = '＋';
        });
    }

    document.addEventListener('click', function (e) {
        // 点的是"群公告 / 云平台注意事项"里的条目 -> 顺带收起"云端公告"里已展开的条目
        if (e.target.closest('.accordion-header')) {
            closeItems('.online-accordion-item');
        }
        // 点的是"云端公告"里的条目 -> 顺带收起"群公告 / 云平台注意事项"里已展开的条目
        if (e.target.closest('.online-accordion-header')) {
            closeItems('.accordion-item');
        }
    });
})();
