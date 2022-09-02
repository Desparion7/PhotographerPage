const navBtn = document.querySelector('.burger-btn');
const navBox = document.querySelector('.nav-box');
const aboutMeText = document.querySelector('.section-body');
const aboutMePhoto = document.querySelector('.aboutme-img');

const openNav = () => {
	if (!navBox.classList.contains('nav-animation-open')) {
		navBox.classList.add('nav-animation-open');
		navBox.classList.remove('nav-animation-close');
	} else {
		navBox.classList.remove('nav-animation-open');
		navBox.classList.add('nav-animation-close');
	}
};

const animationAboutText = () => {
	if (window.scrollY >= 200) {
		aboutMeText.classList.add('aboutme-animation-text');
	}
};

const animationAboutPhoto = () => {
	if (!window.matchMedia('(max-width: 1024px)').matches) {
		if (window.scrollY >= 600) {
			aboutMePhoto.classList.add('aboutme-animation-photo');
		}
	} else if (window.scrollY >= 1100) {
		aboutMePhoto.classList.add('aboutme-animation-photo');
	}
};
const loadImg = () => {
	if (!window.matchMedia('(max-width: 768px)').matches) {
		aboutMePhoto.setAttribute('src', 'dist/img/about_me_photo_desktop.jpg');
	}
};

navBtn.addEventListener('click', openNav);
window.addEventListener('scroll', animationAboutText);
window.addEventListener('scroll', animationAboutPhoto);
loadImg();
