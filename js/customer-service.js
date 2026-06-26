/**
 * customer-service.js
 * 初始化并加载 kf.yunbai.icu 在线客服挂件
 */
(function () {
    window.GoCustomerServiceConfig = {
        serverUrl: 'https://kf.yunbai.icu',
        groupKey: 'yunbai',
        onOpen: function () {
            console.log('聊天窗口已打开');
        },
        onClose: function () {
            console.log('聊天窗口已关闭');
        },
        onError: function (error) {
            console.error('聊天组件发生错误:', error);
        }
    };

    var script = document.createElement('script');
    script.src = 'https://kf.yunbai.icu/static/js/chat-widget.js';
    script.async = true;
    document.body.appendChild(script);
})();
