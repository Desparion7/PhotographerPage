const navBtn = document.querySelector('.burger-btn');
const navBox = document.querySelector('.nav-box');
const arrow = document.querySelector('.arrow');
const aboutMeText = document.querySelector('.section-body');
const aboutMePhoto = document.querySelector('.aboutme-img');
const portfolioBox1 = document.querySelector('.couple-box-1');
const portfolioBox2 = document.querySelector('.couple-box-2');
const portfolioBox3 = document.querySelector('.couple-box-3');
const portfolioBox4 = document.querySelector('.couple-box-4');
const bottomPhoto = document.querySelector('.bottom-photo');

const formContact = document.querySelector('.form-contact');
const formMsgArea = document.querySelector('#message');
const formNameInput = document.querySelector('#client-name');
const formMailInput = document.querySelector('#email');
const formPhoneInput = document.querySelector('#phone');
const formBtn = document.querySelector('#send-btn');
// Navigation
const openNav = () => {
	if (!navBox.classList.contains('nav-animation-open')) {
		navBox.classList.add('nav-animation-open');
		navBox.classList.remove('nav-animation-close');
	} else {
		navBox.classList.remove('nav-animation-open');
		navBox.classList.add('nav-animation-close');
	}
};
const scrollCloseNav = () => {
	navBox.classList.remove('nav-animation-open');
	navBox.classList.add('nav-animation-close');
};
// Animation in section Aboutme
const animationAboutText = () => {
	if (window.scrollY >= 200) {
		aboutMeText.classList.add('aboutme-animation-text');
		arrow.style.display = 'none';
	}
};
const animationAboutPhoto = () => {
	if (!window.matchMedia('(max-width: 768px)').matches) {
		if (window.scrollY >= 600) {
			aboutMePhoto.classList.add('aboutme-animation-photo');
		}
	} else if (window.scrollY >= 1100) {
		aboutMePhoto.classList.add('aboutme-animation-photo');
	}
};
// Loading photo size
const loadImg = () => {
	if (!window.matchMedia('(max-width: 768px)').matches) {
		aboutMePhoto.setAttribute('src', 'dist/img/about_me_photo_desktop.jpg');
		portfolioBox1.firstElementChild.setAttribute(
			'src',
			'dist/img/portfolio1_desktop.jpg'
		);
		portfolioBox2.firstElementChild.setAttribute(
			'src',
			'dist/img/portfolio2_desktop.jpg'
		);
		portfolioBox3.firstElementChild.setAttribute(
			'src',
			'dist/img/portfolio3_desktop.jpg'
		);
		portfolioBox4.firstElementChild.setAttribute(
			'src',
			'dist/img/portfolio4_desktop.jpg'
		);
		bottomPhoto.firstElementChild.setAttribute(
			'src',
			'dist/img/portfolio5_desktop.jpg'
		);
	}
};
// Animation section portfolio
const animationPortfolio = () => {
	if (!window.matchMedia('(max-width: 768px)').matches) {
		if (window.scrollY >= 1700 && window.scrollY < 2200) {
			portfolioBox1.classList.add('portfolio-animation');
			portfolioBox2.classList.add('portfolio-animation');
		} else if (window.scrollY >= 2200 && window.scrollY < 2400) {
			portfolioBox3.classList.add('portfolio-animation');
			portfolioBox4.classList.add('portfolio-animation');
		}
	} else if (window.scrollY >= 1600 && window.scrollY < 1800) {
		portfolioBox1.classList.add('portfolio-animation');
	} else if (window.scrollY >= 1800 && window.scrollY < 2200) {
		portfolioBox2.classList.add('portfolio-animation');
	} else if (window.scrollY >= 2200 && window.scrollY < 2400) {
		portfolioBox3.classList.add('portfolio-animation');
	} else if (window.scrollY >= 2400) {
		portfolioBox4.classList.add('portfolio-animation');
	}
};

// From validator and send message
const checkFrom = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	if (re.test(formMailInput.value)) {
	} else {
		formMailInput.value = '';
		formMailInput.setAttribute('placeholder', 'E-mail nie jest poprawny');
		event.preventDefault();
	}
	if (formPhoneInput.value.length < 9) {
		formPhoneInput.value = '';
		formPhoneInput.setAttribute(
			'placeholder',
			'numer telefonu jest nieprawidłowy'
		);
		event.preventDefault();
	}
};

navBtn.addEventListener('click', openNav);
window.addEventListener('scroll', scrollCloseNav);
window.addEventListener('scroll', animationAboutText);
window.addEventListener('scroll', animationAboutPhoto);
window.addEventListener('scroll', animationPortfolio);

loadImg();
