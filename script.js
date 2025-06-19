function initLoader() {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
  }, 1500);
}

// Theme toggle
const toggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
}

toggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
