const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('#site-navigation');
const currentPage = window.location.pathname.endsWith('/') ? 'index.html' : window.location.pathname.split('/').pop();

siteNavigation?.querySelectorAll('a').forEach((link) => {
  if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page');
});

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
};

const closeMenu = ({ restoreFocus = false } = {}) => {
  if (!menuToggle || !siteNavigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  siteNavigation.classList.remove('is-open');
  if (restoreFocus) menuToggle.focus();
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNavigation?.classList.toggle('is-open', !isOpen);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') closeMenu({ restoreFocus: true });
});
siteNavigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();