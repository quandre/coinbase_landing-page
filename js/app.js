const allDropdowns = document.querySelectorAll('.sub__menu')
const ACTIVE = 'active';
const navbar = document.querySelector('.mobile__menu');


navbar.addEventListener('click', ({target}) => {
    if (!target.classList.contains('dropdown__button')) return;
  
  const parent = target.parentNode;
  const navItems = parent
    .querySelector('.sub__menu');

  allDropdowns.forEach(el => el !== navItems && el.classList.remove(ACTIVE));
  
  if (navItems) {
    navItems.classList.toggle(ACTIVE);  
  }
});
document.querySelector(".mobile__open").addEventListener("click", () => {
  document.querySelector(".mobile__nav").classList.toggle("mobile-active");
});
