import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
import slick from 'slick-carousel';
import 'magnific-popup';
import mask from "jquery-mask-plugin";
// import 'jquery-validation';
// import printThis from "print-this";
import WOW from 'wowjs/dist/wow';

(function ($) {
	svg4everybody();

	var styles = [
		'padding: 0 9px',
		'background: #fff',
		'color: #000',
		'display: inline-block',
		'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
		'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
		'line-height: 1.4',
		'text-align: left',
		'font-size: 12px',
		'font-weight: 400'
	].join(';');

	console.log('%c заказать html верстку', styles);
	console.log('%c sales@webjeb.ru', styles);
	console.log('%c портфолио webjeb.ru', styles);


	$(function() {

		/*
			Trainers slider
		*/

		let $slider = $('.trainers__slider');

		if ($slider.length) {

			$slider.slick({
				slidesToShow: 1,
				dots: true,
				arrows: true,
				speed: 900,
				waitForAnimate: true,
				adaptiveHeight: true
			});

		}

		// Reviews carousel

		let $reviewsCarousel = $('.reviews__list');

		if ($reviewsCarousel.length) {

			$reviewsCarousel.slick({
				loop: true,
				infinite: true,
				speed: 900,
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				centerMode: true,
				centerPadding: '28px',
				focusOnSelect: true,
				variableWidth: false,
				waitForAnimate: true,
				responsive: [
					{
						breakpoint: 1025,
						settings: {
							arrows: true,
							centerMode: true,
							centerPadding: '0',
							slidesToShow: 1
						}
					},
					{
						breakpoint: 992,
						settings: {
							arrows: true,
							centerMode: true,
							centerPadding: '0',
							slidesToShow: 1
						}
					},
					{
						breakpoint: 769,
						settings: {
							arrows: true,
							centerMode: true,
							centerPadding: '0',
							slidesToShow: 1
						}
					},
					{
						breakpoint: 426,
						settings: {
							arrows: false,
							centerMode: true,
							centerPadding: '0',
							slidesToShow: 1
						}
					}
				]
			});

		}

		/*
		 Tabs gallery
		*/

		var tabsNavLink = $('.life__tabs-link');
		var tabsNavLinkActive = 'life__tabs-link_active';
		var tab = $('.life__tab');
		var tabActive = 'life__tab_active';

		tabsNavLink.click(function (event) {
			event.preventDefault();
			$(this).addClass(tabsNavLinkActive);
			$(this).siblings().removeClass(tabsNavLinkActive);
			var tabCurrent = $(this).attr('href');
			tab.not(tabCurrent).removeClass(tabActive).hide();
			$(tabCurrent).fadeIn(50).addClass(tabActive).show();
		});

		/*
		 Tabs reviews
		*/

		var tabsNavLinkSecond = $('.reviews__tabs-link');
		var tabsNavLinkActiveSecond = 'reviews__tabs-link_active';
		var tabSecond = $('.reviews__tab');
		var tabActiveSecond = 'reviews__tab_active';

		tabsNavLinkSecond.click(function (event) {
			event.preventDefault();
			$(this).addClass(tabsNavLinkActiveSecond);
			$(this).siblings().removeClass(tabsNavLinkActiveSecond);
			var tabCurrentSecond = $(this).attr('href');
			tabSecond.not(tabCurrentSecond).removeClass(tabActiveSecond).hide();
			$(tabCurrentSecond).fadeIn(50).addClass(tabActiveSecond).show();
		});


		/*
		 Video
		*/


		$('.popup-video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});


		$('.maps__item').on('click', function (e) {
			e.preventDefault();
			$('.maps__item').siblings().removeClass('maps__item_active');
			$(this).toggleClass('maps__item_active');
		})

		/*
		 Scroll to element
		*/

		$('.contacts__item_address .contacts__link, .header__scroll').on('click', function(e) {
			var _scroll = $(this).attr('href');
			if (_scroll != '#' && $(_scroll).length) {
				$('html, body').animate({ scrollTop: $(_scroll).offset().top  }, 800);
			}
		});


		// Phone Mask

		$('.form__field_phone input').mask("+ 7 (999) 999-99-99", {
			placeholder: "Ваш телефон"
		});


		// Animate

		new WOW.WOW().init();


		// Popup

		const magnificPopupInstance = $.magnificPopup.instance,

		button = $('.teacher__link');

		button.click(function(e){
			e.preventDefault();
			let dataset = $(this).data();
			magnificPopupInstance.open({
				type: 'inline',
				items: dataset,
				inline: {
					markup: `
					<div class="popup">
						<div class="mfp-close"></div>
						<div class="popup__col">
							<div class="popup__image">
								<img src="${dataset.image}" alt="${dataset.name}" />
							</div>
						</div>
						<div class="popup__col_wide">
							<div class="popup__title">${dataset.name}</div>
							<div class="popup__text">
								<p>${dataset.text}</p>

							</div>
							<div class="popup__text">
								${dataset.resume}
							</div>
						</div>
					</div>
					`
				}
			});
		});

		// Process photo

		$('.process__photo-link').magnificPopup({
			type: 'image',
			midClick: true,
			gallery: {
				enabled: true
			}
		});


	});

})(jQuery);




