const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!isOpen));
    menu.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !isOpen);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
    }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const interest = new URLSearchParams(window.location.search).get('interest');
if (interest === 'residential' || interest === 'business') {
  document.querySelector('#' + interest + '-choice')?.classList.add('selected');
}
