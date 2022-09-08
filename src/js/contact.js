const navBtn = document.querySelector('.burger-btn');
const navBox = document.querySelector('.nav-box');

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

navBtn.addEventListener('click', openNav);
window.addEventListener('scroll', scrollCloseNav);


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