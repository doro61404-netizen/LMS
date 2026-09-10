document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal');
const serviceTabs = document.querySelectorAll('.service-tab');
const servicePanel = document.querySelector('#service-panel');

const serviceContent = {
  products: ['01', 'Digital products', 'From first question to working interface, we shape digital products that make difficult things easier to understand and use.', 'Product / Strategy / Craft'],
  web: ['02', 'Web development', 'Fast, accessible web experiences that give a clear idea the right structure and a reliable home.', 'Web / Performance / Accessibility'],
  mobile: ['03', 'Mobile development', 'Focused mobile tools designed around the moments when people need them most.', 'Mobile / Prototyping / Systems'],
  cloud: ['04', 'Cloud & infrastructure', 'Practical foundations that help digital services stay dependable as their users and needs change.', 'Cloud / Reliability / Operations'],
  data: ['05', 'Data & AI', 'Responsible ways to turn information into useful signals, decisions, and better everyday workflows.', 'Data / Intelligence / Governance']
};

const setService = (tab) => {
  const content = serviceContent[tab.dataset.service];
  if (!content || !servicePanel) return;
  serviceTabs.forEach((item) => {
    const selected = item === tab;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.setAttribute('tabindex', selected ? '0' : '-1');
  });
  servicePanel.setAttribute('aria-labelledby', tab.id);
  servicePanel.querySelector('.service-panel__number').textContent = content[0];
  servicePanel.querySelector('h3').textContent = content[1];
  servicePanel.querySelector('p:not(.service-panel__number)').textContent = content[2];
  servicePanel.querySelector('.service-panel__signal').textContent = content[3];
};

serviceTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setService(tab));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? serviceTabs.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + serviceTabs.length) % serviceTabs.length;
    serviceTabs[nextIndex].focus();
    setService(serviceTabs[nextIndex]);
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}