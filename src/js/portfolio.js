const navBtn = document.querySelector('.burger-btn');
const navBox = document.querySelector('.nav-box');
const arrow = document.querySelector('.arrow');

const thumbnails = document.querySelectorAll('.thumbnail img');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup-close-btn');
const popupImg = document.querySelector('.popup-img');
const arrowNext = document.querySelector('.arrow-right');
const arrowPrev = document.querySelector('.arrow-left');
const currentPhoto = document.querySelector('.current-photo');
const allPhotoNumber = document.querySelector('.all-photo');

let currentImgIndex;

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

const scrollDownBtn = () => {
	window.scrollBy(0, 600);
};
const arrowAnimation = () => {
	if (window.scrollY >= 200) {
		arrow.style.display = 'none';
	} else if (window.scrollY >= 50) {
		arrow.style.display = 'block';
	}
};

// Gallery 1
const showNextImg = () => {
	if (currentImgIndex === thumbnails.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex++;
	}
	popupImg.src = thumbnails[currentImgIndex].src;
	addPhotoNumber();
};
const showPrevImg = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = thumbnails.length - 1;
	} else {
		currentImgIndex--;
	}
	popupImg.src = thumbnails[currentImgIndex].src;
	addPhotoNumber();
};
const hidePopup = () => {
	popup.classList.add('popup-fade-out');
	setTimeout(() => {
		popup.classList.add('hidden');
		popup.classList.remove('popup-fade-out');
	}, 300);
	thumbnails.forEach((element) => {
		element.setAttribute('tabindex', 0);
	});
};
thumbnails.forEach((thumbnail, index) => {
	const ShowPopup = (e) => {
		popup.classList.remove('hidden');
		popupImg.src = e.target.src;
		currentImgIndex = index;
		addPhotoNumber();
		thumbnails.forEach((element) => {
			element.setAttribute('tabindex', -1);
		});
	};
	thumbnail.addEventListener('click', ShowPopup);
	thumbnail.addEventListener('keydown', (e) => {
		if (e.code === 'Enter' || e.code === 13) {
			ShowPopup(e);
		}
	});
});
document.addEventListener('keydown', (e) => {
	if (!popup.classList.contains('hidden')) {
		if (e.code === 'ArrowRight' || e.code === 39) {
			showNextImg();
		} else if (e.code === 'ArrowLeft' || e.code === 37) {
			showPrevImg();
		} else if (e.code === 'Escape' || e.code === 27) {
			hidePopup();
		}
	}
});
const addPhotoNumber = () => {
	currentPhoto.textContent = currentImgIndex + 1;
	allPhotoNumber.textContent = thumbnails.length;
};

arrowNext.addEventListener('click', showNextImg);
arrowPrev.addEventListener('click', showPrevImg);
closeBtn.addEventListener('click', hidePopup);

navBtn.addEventListener('click', openNav);
window.addEventListener('scroll', scrollCloseNav);
arrow.addEventListener('click', scrollDownBtn);
window.addEventListener('scroll', arrowAnimation);
