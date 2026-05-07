/* ============================================================
   WeiHub Admin — Common JS
   ============================================================ */

// ---- Navigation active state ----
(function () {
  const path = location.pathname.split('/').pop() || 'dashboard.html';
  document.querySelectorAll('.nav-item[data-page]').forEach(el => {
    if (el.dataset.page === path) el.classList.add('active');
  });
})();

// ---- Sidebar collapse ----
(function () {
  const sidebar = document.getElementById('sidebar');
  const collapseBtn = document.getElementById('collapseBtn');
  if (!sidebar || !collapseBtn) return;

  const STORAGE_KEY = 'sidebar_collapsed';
  const collapsed = localStorage.getItem(STORAGE_KEY) === '1';
  if (collapsed) sidebar.classList.add('collapsed');

  collapseBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    const isNowCollapsed = sidebar.classList.contains('collapsed');
    localStorage.setItem(STORAGE_KEY, isNowCollapsed ? '1' : '0');
    collapseBtn.querySelector('.collapse-label').textContent =
      isNowCollapsed ? '' : '收起';
    collapseBtn.querySelector('svg').style.transform =
      isNowCollapsed ? 'rotate(180deg)' : '';
  });
})();

// ---- Format amount ----
function formatAmount(value, symbol = '¥') {
  if (value == null || isNaN(value)) return `${symbol}0.00`;
  return `${symbol}${Number(value).toFixed(2)}`;
}

// ---- Format number with commas ----
function formatNumber(value) {
  if (value == null) return '0';
  return Number(value).toLocaleString('zh-CN');
}

// ---- Format date ----
function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleString('zh-CN', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });
}

// ---- Modal helpers ----
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'flex';
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

// Close modal on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.style.display = 'none';
  }
});

// Close modal on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(el => {
      el.style.display = 'none';
    });
  }
});

// ---- Tab switching ----
function initTabs(containerSelector) {
  const containers = document.querySelectorAll(containerSelector || '.tabs');
  containers.forEach(container => {
    container.addEventListener('click', e => {
      const btn = e.target.closest('.tab-btn');
      if (!btn || !btn.dataset.tab) return;
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.dataset.tab;
      const parent = container.closest('.tab-scope') || document;
      parent.querySelectorAll('[data-tab-panel]').forEach(panel => {
        panel.style.display = panel.dataset.tabPanel === tabId ? '' : 'none';
      });
    });
  });
}
document.addEventListener('DOMContentLoaded', () => initTabs());

// ---- Simple search filter ----
function initTableSearch(inputSelector, tableSelector, colIndex) {
  const input = document.querySelector(inputSelector);
  const table = document.querySelector(tableSelector);
  if (!input || !table) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    table.querySelectorAll('tbody tr').forEach(row => {
      const text = colIndex != null
        ? (row.cells[colIndex]?.textContent || '')
        : row.textContent;
      row.style.display = text.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}
