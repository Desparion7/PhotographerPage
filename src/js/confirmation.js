const navBtn = document.querySelector('.burger-btn');
const navBox = document.querySelector('.nav-box');
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
navBtn.addEventListener('click', openNav);
window.addEventListener('scroll', scrollCloseNav);