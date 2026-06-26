/**
 * utils.js
 * 通用工具函数：复制代码、Toast 提示、背景图加载、防调试
 */
(function () {

    // ===== 复制代码 Toast =====
    window.showCopyToast = function (msg) {
        let toast = document.getElementById('custom-copy-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'custom-copy-toast';
            toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${msg}</span>`;
            document.body.appendChild(toast);
        } else {
            toast.querySelector('span').innerText = msg;
        }
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    };

    window.copyCodeText = function (element) {
        const text = element.getAttribute('data-clipboard');
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy')
                ? showCopyToast('代码已复制成功！')
                : showCopyToast('复制失败，请手动复制');
        } catch (e) {
            showCopyToast('复制失败，请手动复制');
        } finally {
            ta.remove();
        }
    };

    // ===== 背景图按需加载 =====
    function tryLoadBg() {
        const img = new Image();
        const timer = setTimeout(() => {}, 6000);
        img.onload = function () { clearTimeout(timer); document.body.classList.add('bg-loaded'); };
        img.onerror = function () { clearTimeout(timer); };
        img.src = 'https://v2.api.yunbai.icu/api/acg/api.php';
    }

    // ===== 防调试 =====
    function antiDebug() {
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && ['I','C','J'].includes(e.key.toUpperCase())) ||
                (e.ctrlKey && ['U','S','u','s'].includes(e.key))
            ) { e.preventDefault(); return false; }
        });
        try {
            setInterval(function () { (function(){}).constructor('debugger')(); }, 200);
        } catch (e) {}
    }

    document.addEventListener('DOMContentLoaded', function () {
        tryLoadBg();
        antiDebug();
    });

})();
