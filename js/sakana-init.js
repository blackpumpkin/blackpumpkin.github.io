function loadSakanaWidget() {
    // 1. 如果页面上不存在挂件容器，则重新创建
    if (!document.getElementById('sakana-widget')) {
      const sakanaDiv = document.createElement('div');
      sakanaDiv.id = 'sakana-widget';
      sakanaDiv.style.cssText = 'position: fixed; bottom: 10px; right: 10px; z-index: 999;';
      document.body.appendChild(sakanaDiv);
    }
  
    // 2. 如果 Sakana 库已加载，直接挂载；否则按需动态加载 CDN
    if (window.SakanaWidget) {
      // 防止重复挂载，确保节点干净
      document.getElementById('sakana-widget').innerHTML = '';
      new SakanaWidget().mount('#sakana-widget');
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/sakana-widget@2.2.1/lib/sakana.min.js';
      script.async = true;
      script.onload = () => {
        new SakanaWidget().mount('#sakana-widget');
      };
      document.head.appendChild(script);
    }
  }
  
  // 页面首次加载完成后执行
  document.addEventListener('DOMContentLoaded', loadSakanaWidget);
  
  // 监听 PJAX 跳转完成事件，保证切换页面后挂件依旧正常
  document.addEventListener('pjax:complete', loadSakanaWidget);