'use strict';

(function iifeMenu(document, window, undefined) {
	var menuBtn = document.querySelector('.menu__btn');
	var	menu = document.querySelector('.menu__list');

	function toggleMenu() {
		menu.classList.toggle('menu__list--active');
		menu.classList.toggle('menu__list--transition');
		this.classList.toggle('menu__btn--active');
		this.setAttribute(
			'aria-expanded',
			this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
		);
	}

	function removeMenuTransition() {
		this.classList.remove('menu__list--transition');
	}

	if (menuBtn && menu) {
		menuBtn.addEventListener('click', toggleMenu, false);
		menu.addEventListener('transitionend', removeMenuTransition, false);
	}

	// Get the TOC title and menu elements
	var tocTitle = document.querySelector('.toc__title');
	var tocMenu = document.querySelector('.toc__menu');
	var tocIcon = document.querySelector('.toc__icon');
	// 获取tocIcon下的svg元素
	var tocIconSvg = tocIcon.querySelector('svg');

	// Add click event listener to the TOC title
	tocTitle.addEventListener('click', function() {
		tocTitle.classList.toggle('active');
		tocMenu.classList.toggle('active');
		tocIconSvg.classList.toggle('active');

		// If menu is active, calculate its height based on content
		if (tocMenu.classList.contains('active')) {
			// Show the menu and set its height based on its content
			tocMenu.style.height = tocMenu.scrollHeight + "px";
		} else {
			// Hide the menu by setting its height to 0
			tocMenu.style.height = "0";
		}
	});
}(document, window));
