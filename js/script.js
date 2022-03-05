"use strict";

//Подключение js других страниц или элементов////////////////////////////////////////////////////////////////////////////////////////////////////
// //Функция добавляющая классы дочерним элементам(одному из)////////////////////////////////////////////////////////////////////////////////////////////////////
// const wrapObj = document.querySelector('.header__primary-list');
// wrapObj.onclick = function (e) {
// 	for (let i = 0; i < wrapObj.children.length; i++) {
// 		wrapObj.children[i].classList.remove('active');
// 	}
// 	e.target.classList.add('active');
// }
//Удаляем атрибут при разрешении экрана больше 851////////////////////////////////////////////////////////////////////////////////////////////////////
// $(window).on('resize', function () {
// 	if ($(window).width() > 851) {
// 		 $('.li').removeAttr('style');
// 	}
// });
//Добавление - удаление класса слушая размер экрана////////////////////////////////////////////////////////////////////////////////////////////////////
// $(document).ready(function(){
//     var width = $(window).width(); 
//     alert(width);
//     if(width <= 768  ){
//       $('body').addClass('js');
//       var $menu = $('#menu'),
//       $menulink = $('.menu-link'),
//       $menuTrigger = $('.has-submenu > a');
//      $menulink.on('click',function(e) {
//         e.preventDefault();
//         $menulink.toggleClass('active');
//         $menu.toggleClass('active');
//      });
//      $menuTrigger.on('click',function(e) {
//         e.preventDefault();
//         var $this = $(this);
//         $this.toggleClass('active').next('ul').toggleClass('active');
//      });
// }
// });
// $(document).ready(function () {
// 	if($(window).width() < 992) {
// 	   $("").addClass("myClass");
// 	   $("#otherDiv").removeClass("myClass");  
// 	}    
// });
//Скролл к якорям ссылок////////////////////////////////////////////////////////////////////////////////////////////////////
// $('.link, .link_2').on('click', function (event) {
// 	event.preventDefault();
// 	let id = $(this).attr('href'),
// 		 top = $(id).offset().top;
// 	$('body,html').animate({
// 		 scrollTop: top
// 	}, 800);
// });
//Добавление класса блоку при прокрутке////////////////////////////////////////////////////////////////////////////////////////////////////
// $(window).on('scroll', function () {
// 	if ($(this).scrollTop() > 20) {
// 		(!$('block').hasClass('class'))
// 		$('block').addClass('class');
// 	}
// 	else {
// 		$('block').removeClass('class');
// 	}
// });
//Подключение Slick слайдера с настройками////////////////////////////////////////////////////////////////////////////////////////////////////
// $('.slider').slick({
// 	arrows: true,
// 	prevArrow: '<button type="button" class="slick-prev slick-arrow" style="background-image: url(../images/arrow-left.svg);"></button>',
// 	nextArrow: '<button type="button" class="slick-next slick-arrow" style="background-image: url(../images/arrow-right.svg);"></button>',
// 	infinite: true,
// 	autoplay: true,
// 	autoplaySpeed: 4000,
// 	speed: 600,
// 	pauseOnFocus: false,
// pauseOnHover: false,
// 	dots: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	centerMode: false,
// 	variableWidth: false,
// 	adaptiveHeight: false,
// 	fade: false,
// 	// asNavFor: '.slider-nav', //Связываем с другим слайдером
// 	responsive: [{
// 		breakpoint: 1050,
// 		settings: {
// 			prevArrow: false,
// 			nextArrow: false,
// 		}
// 	},]
// });
//Параматеры для многоточий в конце слов(по клику)|см.заготовки////////////////////////////////////////////////////////////////////////////////////////////////////
// $('.header__primary-link').click(function () {
// 	$('.header__primary-link').addClass('text_dots');
// 	$(this).removeClass('text_dots');
// });
//Функция добавляющая анимации////////////////////////////////////////////////////////////////////////////////////////////////////
// const animItems = document.querySelectorAll('._anim-items');
// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);
// 	function animOnScroll(params) {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 10;
// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}
// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_active');
// 			}
// 			else {
// 				if (!animItem.classList.contains('_anim-no-hide')) {
// 					animItem.classList.remove('_active');
// 				}
// 			}
// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageXOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 	}
// 	setTimeout(() => {
// 		animOnScroll();
// 	}, 333);
// }
//Функция для использования конструкции вместо object-fit: cover; для IE////////////////////////////////////////////////////////////////////////////////////////////////////
// function ibg() {
// 	$.each($('.ibg'), function (index, val) {
// 		if ($(this).find('img').length > 0) {
// 			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
// 		}
// 	});
// }
// ibg();
//Функция перемещающая курсор в input с типом tel в начало строки////////////////////////////////////////////////////////////////////////////////////////////////////
// $.fn.setCursorPosition = function (pos) {
// 	if ($(this).get(0).setSelectionRange) {
// 		 $(this).get(0).setSelectionRange(pos, pos);
// 	} else if ($(this).get(0).createTextRange) {
// 		 let range = $(this).get(0).createTextRange();
// 		 range.collapse(true);
// 		 range.moveEnd('character', pos);
// 		 range.moveStart('character', pos);
// 		 range.select();
// 	}
// };
// $('input[type="tel"]').on('click', function () {
// 	$(this).setCursorPosition(3);
// });
//Маска для input с типом tel (Нужен плагин jquery.maskedinput)////////////////////////////////////////////////////////////////////////////////////////////////////
// $("input[type=tel]").mask("+7 (999) 999-9999");
//Меняем css свойства блокам при клике по кнопке и ссылкам, необходимо так же задать такие же изменения при клике по документу вне объекта////////////////////////
// $('.btn, .link').on('click', function () {
// 	if (!$('.link').hasClass('openDone')) {
// 		 $('.link').addClass('openDone');
// 		 $('.li').css({
// 			  'left': '-15px',
// 			  'right': '-15px'
// 		 });
// 	} else {
// 		 $('.link').removeClass('openDone');
// 		 $('.li').css({
// 			  'left': '-100vw',
// 			  'right': '150vw'
// 		 });
// 	}
// });
//Скрытие элемента по клику вне его////////////////////////////////////////////////////////////////////////////////////////////////////
// $(document).on('click', function (e) {
// 	if (!$('.hint__Link').is(e.target) && $('.hint__Link').has(e.target).length === 0 &&
// 		 !$('.hint__block').is(e.target) && $('.hint__block').has(e.target).length === 0) {
// 		 $('.hint__block').fadeOut();
// 	}
// });
//Всплывающая подсказка////////////////////////////////////////////////////////////////////////////////////////////////////
// $('.hint__Link').on('click', function () {
// 	$('.hint__block').fadeToggle();
// });
//Удаляем вместе с собой блок прапрародитель////////////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('click', '.remove__дштл', function () {
// 	$(this).parent().parent().remove()
// });
//Добавляем блок без элементов с id в конец блока будущего родителя при нажатии на кнопку-ссылку////////////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('click', '.added__link', function () {
// 	$('.parent__block').append('<div></div>')
// });
//Добавление всех имен загруженных файлов в input multiple через запятую в span////////////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('change', '.files__input', function () {
// 	let name_file = [];
// 	for (let i = 0; i < $(this).get(0).files.length; ++i) {
// 		name_file.push($(this).get(0).files[i].name);
// 	}
// 	$(this).next().next('span').text(name_file.join(", "));
// });
//Параметры селекта(нужно добавить класс select селекту|см.заготовки//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// $('.select').each(function () {
// 	const _this = $(this),
// 		selectOption = _this.find('option'),
// 		selectOptionLength = selectOption.length,
// 		selectedOption = selectOption.filter(':selected'),
// 		duration = 150; // длительность анимации 
// 	_this.hide();
// 	_this.wrap('<div class="select"></div>');
// 	$('<div>', {
// 		class: 'new-select',
// 		text: _this.children('option:disabled').text()
// 	}).insertAfter(_this);
// 	const selectHead = _this.next('.new-select');
// 	$('<div>', {
// 		class: 'new-select__list'
// 	}).insertAfter(selectHead);
// 	const selectList = selectHead.next('.new-select__list');
// 	for (let i = 1; i < selectOptionLength; i++) {
// 		$('<div>', {
// 			class: 'new-select__item',
// 			html: $('<span>', {
// 				text: selectOption.eq(i).text()
// 			})
// 		})
// 			.attr('data-value', selectOption.eq(i).val())
// 			.appendTo(selectList);
// 	}
// 	const selectItem = selectList.find('.new-select__item');
// 	selectList.slideUp(0);
// 	selectHead.on('click', function () {
// 		if (!$(this).hasClass('on')) {
// 			$(this).addClass('on');
// 			selectList.slideDown(duration);
// 			selectItem.on('click', function () {
// 				let chooseItem = $(this).data('value');
// 				$('select').val(chooseItem).attr('selected', 'selected');
// 				selectHead.text($(this).find('span').text());
// 				selectList.slideUp(duration);
// 				selectHead.removeClass('on');
// 			});
// 		} else {
// 			$(this).removeClass('on');
// 			selectList.slideUp(duration);
// 		}
// 	});
// });
//Считаем и запоминаем чекбоксы////////////////////////////////////////////////////////////////////////////////////////////////////
// let checkboxCategories = document.querySelectorAll('.header__services-checkbox');
// let searchSelect = document.querySelector('.header__secondary-service');
// for (let index = 0; index < checkboxCategories.length; index++) {
// 	const checkboxCategory = checkboxCategories[index];
// 	checkboxCategory.addEventListener("change", function (e) {
// 		checkboxCategory.classList.toggle('_active');
// 		let checkboxActiveCategories = document.querySelectorAll('.header__services-checkbox._active');
// 		if (checkboxActiveCategories.length > 0) {
// 			searchSelect.classList.add('_categories');
// 			let serviceOpted = searchSelect.querySelector('.header__secondary-service_opted');
// 			serviceOpted.innerHTML = serviceOpted.getAttribute('data-text') + '  ' + checkboxActiveCategories.length;
// 		} else {
// 			searchSelect.classList.remove('_categories');
// 		}
// 	})
// }
//Скрываем блок при установке флажка в чекбоксе и показываем при отключении////////////////////////////////////////////////////////////////////////////////////////////////////
// $('body').on('change', 'input#formCheckbox', function () {
// 	if (!$('.files__item').hasClass('openDone')) {
// 		$('.files__item').addClass('openDone');
// 		$('.files__item').fadeOut(300).show();
// 		$('.files__item').removeAttr('style');
// 		$('.files__input').prop('required', false);
// 	} else {
// 		$('.files__item').removeClass('openDone');
// 		$('.files__item').fadeIn(300);
// 		$('.files__input').prop('required', true);
// 	}
// });
//Форма обратной связи (без файлов)////////////////////////////////////////////////////////////////////////////////////////////////////
// $(".fancybox-form").on('submit', function () {
// 	let th = $(this);
// 	$.ajax({
// 		type: "POST",
// 		url: "mail.php",
// 		data: th.serialize()
// 	}).done(function () {
// 		alert("Спасибо, Ваша заявка принята. Наш специалист свяжется с Вами в ближайшее время. График работы: с 10 до 19 часов ежедневно.");
// 		setTimeout(function () {
// 			th.trigger("reset");
// 		}, 1000);
// 	});
// 	return false;
// });
//Форма отправки с файлами и выведенными именами файлов в span////////////////////////////////////////////////////////////////////////////////////////////////////
// $(function () {
// 	document.getElementById('form').addEventListener('submit', function (evt) {
// 		let pr = document.querySelector('.progress-bar'),
// 			// checkboxNoInspect = document.querySelector('.files__item-noinspect'),
// 			// NoInspect = document.querySelectorAll('.files__input-noinspect'),
// 			// checkboxNoDriver = document.querySelectorAll('.files__item-nodrivers'),
// 			// noDriver = document.querySelectorAll('.files__input-nodrivers'),
// 			// inputs = document.getElementById('form').querySelectorAll('.files__btn span');
// 			let http = new XMLHttpRequest(),
// 			f = this;
// 		let th = $(this);
// 		evt.preventDefault();
// 		//Появление анимации загрузки файлов пока они грузятся
// 		http.upload.onloadstart = function () {
// 			pr.style.opacity = 1;
// 			pr.style.visibility = 'visible';
// 		};
// 		////////////////////////////////////////////////////////////////////////////////////////////////////
// 		http.onreadystatechange = function () {
// 			if (http.readyState == 4 && http.status == 200) {
// 				alert(http.responseText);
// 				console.log(http.responseText);
// 				if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (name)
// 					th.trigger("reset"); //Очестка всех input
// 					// inputs.forEach(element => {
// 					// 	element.textContent = 'файл не выбран'; //Очистка названий файлов
// 					// });
// 					// checkboxNoInspect.classList.remove('openDone');//В случае если перед отправкой данный блок был скрыт при помощи чекбокса убираем у него класс openDone
// 					// checkboxNoInspect.style.display = '';//Очищаем стиль display
// 					// checkboxNoDriver.forEach(element => {//То же самое, только этот код если чекбокс мог скрыть несколько таких одинаковых элементов
// 					// 	element.classList.remove('openDone');
// 					// });
// 					// checkboxNoDriver.forEach(element => {//И очищаем у них стиль display
// 					// 	element.style = '';
// 					// });
// 					// NoInspect.forEach(element => {
// 					// 	element.setAttribute('required', true);//Возвращаем ранее скрытым инпутам атрибут required, который был там изначально
// 					// });
// 					// noDriver.forEach(element => {
// 					// 	element.setAttribute('required', true);//Возвращаем ранее скрытым инпутам атрибут required, который был там изначально
// 					// });
// 					//Скрытие анимации загрузки файлов после их загрузки
// 					pr.style.opacity = 0;
// 					pr.style.visibility = 'hidden';
// 				}
// 			}
// 		};
// 		http.onerror = function () {
// 			alert('Ошибка, попробуйте еще раз');
// 		};
// 		http.open("POST", "contact.php", true);
// 		http.send(new FormData(f));
// 	}, false);
// });
// Определение поддержки браузером формата webp для использования webp в свойстве background-image в scss////////////////////////////////////////////////////////////////////////////////////////////////////
function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
}); //Основной блок////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Параметры бургера////////////////////////////////////////////////////////////////////////////////////////////////////
// $(document).ready(function () {
// 	$('.header__burger').click(function (event) {
// 		$('.header__burger, .header__menu').toggleClass('active');
// 		$('body').toggleClass('lock');
// 	});
// });