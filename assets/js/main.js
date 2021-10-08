/*===== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/* Menu Show */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
}

/* Menu Hidden */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
	const navMenu = document.getElementById('nav-menu');
	// When we click on each nav__link, we remove the show-menu
	navMenu.classList.remove('show-menu');
};
navLink.forEach(link => link.addEventListener('click', linkAction));

/*===== HOME SWIPER =====*/
let homeSwiper = new Swiper('.home-swiper', {
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});

/*===== CHANGE BACKGROUND HEADER =====*/
const scrollHeader = () => {
	const header = document.getElementById('header');
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 50) {
		header.classList.add('scroll-header');
	} else {
		header.classList.remove('scroll-header');
	}
};
window.addEventListener('scroll', scrollHeader);

/*===== NEW SWIPPER =====*/
let newSwiper = new Swiper('.new-swiper', {
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 16,
	loop: true,
});