/**
 * free-cloud-host-rules.js
 * 渲染"免费主机 / 公益测试节点公告"Accordion 条目并注入到 #free-cloud-host-rules-container
 *
 * 说明：这是一个全新的独立公告 JS 文件；结构参考群公告 Accordion 写法，内容为免费主机规则。
 * 更新：已将全部条目内容合并为单一条目。
 */
(function () {
  const SVG_ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`;

  const items = [
    {
      title: '免费主机服务说明与承诺边界',
      colorClass: 'doc-4',
      content: `

        <div class="header">
          <h1>免费主机服务说明与承诺边界</h1>
          <div class="subtitle">功能筹备中 · 上线时间待定</div>
        </div>
<div class="warning-box"><span class="warning-title">⚠️ 提示：</span>该功能正在筹备中，暂未正式上线，具体上线时间目前尚未确定。相关规则与说明将在正式开放前发布，请留意后续公告。</div>
<p>感谢关注，敬请期待。</p>
      `
    }
  ];

  function render() {
    const container = document.getElementById('free-cloud-host-rules-container');
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

    // 绑定折叠交互：同一时间只展开一个条目
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
