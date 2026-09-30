const loader = document.querySelector('.page-loader');
window.addEventListener('load', () => setTimeout(() => loader?.classList.add('done'), 450));

const menuButton = document.querySelector('[data-menu]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
menuButton?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  mobileMenu.setAttribute('aria-hidden', String(!open));
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.classList.toggle('open', open);
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const signupForm = document.getElementById('signupForm');
const formNote = document.getElementById('formNote');
signupForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  if (!email) return;
  formNote.textContent = 'Thank you — you are now on the private list.';
  signupForm.reset();
});

const searchButton = document.querySelector('[data-search]');
searchButton?.addEventListener('click', () => {
  const query = window.prompt('What would you like to find?');
  if (query) alert(`Demo search: “${query}”`);
});

let bagCount = 0;
document.querySelector('.bag')?.addEventListener('click', () => {
  bagCount += 1;
  document.querySelector('.bag span').textContent = bagCount;
});
