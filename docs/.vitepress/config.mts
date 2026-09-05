import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '服务平台',
  description: '综合公告、业务规则、用户协议与公益生态',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { src: 'https://cdn.jsdelivr.net/gh/mocchen/cssmeihua/js/aixin.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/gh/mocchen/cssmeihua/js/yinghua.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/gh/mocchen/cssmeihua/js/xiaoxingxing.js' }],
    ['script', {}, `
      window.GoCustomerServiceConfig = {
        serverUrl: 'https://kf.yunbai.icu',
        groupKey: 'yunbai'
      };
      var script = document.createElement('script');
      script.src = 'https://kf.yunbai.icu/static/js/chat-widget.js';
      script.async = true;
      document.head.appendChild(script);
    `]
  ],
  themeConfig: {
    logo: { text: '🐾 YUNBAI' },
    siteTitle: '服务平台',
    nav: [
      { text: '首页', link: '/' },
      { text: '群规与边界', link: '/rules/group' },
      { text: '云平台注意事项', link: '/notices/platform' },
      { text: '免费主机规则', link: '/rules/free-host' },
      { text: '关于我们', link: '/about' },
      {
        text: '相关链接',
        items: [
          { text: '云白综合云平台', link: 'https://yunbai.org' },
          { text: 'API 接口管理 V2', link: 'http://v2.api.yunbai.icu' },
          { text: '在线客服', link: 'https://kf.yunbai.icu' }
        ]
      }
    ],
    sidebar: [
      {
        text: '公告与规则',
        items: [
          { text: '群规与服务边界', link: '/rules/group' },
          { text: '免费公益与有偿服务', link: '/rules/services' },
          { text: '免费主机规则', link: '/rules/free-host' }
        ]
      },
      {
        text: '云平台服务规则',
        items: [
          { text: '家庭宽带 (Residential) 声明', link: '/notices/residential' },
          { text: '售后支持与服务规范', link: '/notices/support' },
          { text: '退款保障与售后细则', link: '/notices/refund' },
          { text: '免费产品使用须知', link: '/notices/free-terms' }
        ]
      },
      {
        text: '技术指南',
        items: [
          { text: '服务器 DD 纯净重装', link: '/notices/reinstall' },
          { text: '系统换软件源与 Docker', link: '/notices/mirrors' }
        ]
      },
      {
        text: '社区信息',
        items: [
          { text: '关于我们与核心成员', link: '/about' }
        ]
      }
    ],
    footer: {
      message: 'From Interest to Practice · Skills make the future',
      copyright: 'Copyright © 2025-2026 yunbai.icu All Rights Reserved.'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '主题外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部'
  }
})
