function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.querySelector('[aria-label="Toggle navigation menu"]');
  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
  }
}

// Highlight active page in navigation
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});
