/* Inject sidebar HTML into #sidebar-mount */
(function () {
  const html = `
<aside class="sidebar" id="sidebar">
  <div class="sidebar-brand">
    <div class="brand-icon">
      <svg viewBox="0 0 24 24" style="stroke:none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,3 21,7.5 12,12 3,7.5" fill="rgba(255,255,255,0.92)"/>
        <polygon points="3,7.5 12,12 12,21 3,16.5" fill="rgba(255,255,255,0.6)"/>
        <polygon points="21,7.5 21,16.5 12,21 12,12" fill="rgba(255,255,255,0.38)"/>
      </svg>
    </div>
    <span class="brand-text">Wei Hub</span>
  </div>

  <nav class="sidebar-nav">
    <div class="nav-section">
      <div class="nav-section-title">概览</div>
      <a class="nav-item" href="dashboard.html" data-page="dashboard.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        <span>数据概览</span>
      </a>
    </div>

    <div class="nav-section">
      <div class="nav-section-title">业务管理</div>
      <a class="nav-item" href="users.html" data-page="users.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        <span>用户管理</span>
      </a>
      <a class="nav-item" href="user-categories.html" data-page="user-categories.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        <span>用户分类</span>
      </a>
      <a class="nav-item" href="channels.html" data-page="channels.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/></svg>
        <span>渠道管理</span>
      </a>
      <a class="nav-item" href="model-catalogs.html" data-page="model-catalogs.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        <span>模型配置</span>
      </a>
      <a class="nav-item" href="discounts.html" data-page="discounts.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><path d="M3 3l18 18"/></svg>
        <span>分类折扣</span>
      </a>
      <a class="nav-item" href="enterprises.html" data-page="enterprises.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <span>企业管理</span>
      </a>
    </div>

    <div class="nav-section">
      <div class="nav-section-title">价格管理</div>
      <a class="nav-item" href="pricing-rules.html" data-page="pricing-rules.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        <span>定价规则</span>
      </a>
      <a class="nav-item" href="price-templates.html" data-page="price-templates.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"/><rect x="9" y="3" width="6" height="8" rx="1"/><line x1="9" y1="14" x2="15" y2="14"/></svg>
        <span>标准价格模版</span>
      </a>
      <a class="nav-item" href="templates.html" data-page="templates.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
        <span>价格模版</span>
      </a>
    </div>

    <div class="nav-section">
      <div class="nav-section-title">财务管理</div>
      <a class="nav-item" href="orders.html" data-page="orders.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        <span>充值订单</span>
      </a>
      <a class="nav-item" href="redemption-codes.html" data-page="redemption-codes.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
        <span>兑换码管理</span>
      </a>
      <a class="nav-item" href="gift-tokens.html" data-page="gift-tokens.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 12v10H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
        <span>Gift Token</span>
      </a>
      <a class="nav-item" href="gift-redemptions.html" data-page="gift-redemptions.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        <span>Gift 兑换记录</span>
      </a>
      <a class="nav-item" href="redemption-logs.html" data-page="redemption-logs.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3h18v18H3z" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
        <span>兑换记录</span>
      </a>
    </div>

    <div class="nav-section">
      <div class="nav-section-title">系统</div>
      <a class="nav-item" href="tokens.html" data-page="tokens.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span>Token 审计</span>
      </a>
      <a class="nav-item" href="logs.html" data-page="logs.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        <span>请求日志</span>
      </a>
      <a class="nav-item" href="admins.html" data-page="admins.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <span>管理员</span>
      </a>
      <a class="nav-item" href="settings.html" data-page="settings.html">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        <span>系统设置</span>
      </a>
    </div>
  </nav>

  <div class="sidebar-footer">
    <button class="collapse-btn" id="collapseBtn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="transition:transform .2s"><path d="M15 18l-6-6 6-6"/></svg>
      <span class="collapse-label">收起</span>
    </button>
    <div class="sidebar-user">
      <div class="avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div class="user-info">
        <div class="user-name">Root</div>
        <div class="user-role">超级管理员</div>
      </div>
      <button class="logout-btn" title="退出登录">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
      </button>
    </div>
  </div>
</aside>`;

  const mount = document.getElementById('sidebar-mount');
  if (mount) mount.outerHTML = html;
})();
