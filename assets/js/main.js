// Minimal accessible toggle — expects button.menu-toggle and nav.site-nav in DOM
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const expanded = btn.classList.toggle('open'); // toggles hamburger -> X
    nav.classList.toggle('show');                  // toggles dropdown
    // keep aria in sync for screen readers
    btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    btn.setAttribute('aria-pressed', expanded ? 'true' : 'false');
  });
});


<script>
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
</script>
