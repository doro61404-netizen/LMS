const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('#site-navigation');

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
};

const closeMenu = () => {
  if (!menuToggle || !siteNavigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  siteNavigation.classList.remove('is-open');
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  siteNavigation?.classList.toggle('is-open', !isOpen);
});

siteNavigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();