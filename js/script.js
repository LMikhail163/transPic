const slider = tns({
  container: '.slider',
  nav: true,
  items: 1,
  slideBy: 1,
  autoplay: false,
  controls: false,
  preventScrollOnTouch: 'force',
  navPosition: 'bottom',
  responsive: {
    575: {
      items: 1,
    },
    700: {
      items: 2,
      nav: true,
    },
    1200: {
      items: 3,
      nav: false,
    }
  }
});

const reviews = tns({
  container: '.reviews__items',
  nav: true,
  items: 1,
  slideBy: 1,
  autoplay: false,
  controls: false,
  preventScrollOnTouch: 'force',
  navPosition: 'bottom',
  responsive: {
    576: {
      disable: true,
    },
  }
})

document.querySelector('.prev').addEventListener('click',  function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click',  function () {
  slider.goTo('next');
});

const hamb = document.querySelector('.hamb');
const navMenu = document.querySelector('.menu__list');
const navLink = document.querySelectorAll('.menu__list-item');

hamb.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamb.classList.toggle('active');
  navMenu.classList.toggle('active');
}

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamb.classList.remove('active');
  navMenu.classList.remove('active');
}