const FARBA = {
  WH: window.innerHeight,

  WW: document.documentElement.clientWidth,

  isTouch: 'ontouchstart' in window || navigator.msMaxTouchPoints,

  //lazy load для сторонних либ
  lazyLibraryLoad(scriptSrc, linkHref, callback) {
    let script;
    const domScript = document.querySelector(`script[src="${scriptSrc}"]`);
    const domLink = document.querySelector(`link[href="${linkHref}"]`);

    if (!domScript) {
      script = document.createElement("script");
      script.src = scriptSrc;
      document.querySelector("#wrapper").after(script);
    }

    if (linkHref !== "" && !domLink) {
      let style = document.createElement("link");
      style.href = linkHref;
      style.rel = "stylesheet";
      document.querySelector("link").before(style);
    }

    if (!domScript) {
      script.onload = callback;
    } else {
      domScript.onload = callback;
    }
  }
}



document.addEventListener('DOMContentLoaded', () => {

  (function() {
    let ornt = window.innerWidth > window.innerHeight ? 'land' : 'port'
    let prev = window.innerHeight;
    let vh = prev * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('load', () => {
        setTimeout(()=>{
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      },1)
    });

    window.addEventListener('resize', () => {
      let current = window.innerWidth > window.innerHeight ? 'land' : 'port'

      let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        ornt = current

      if (ornt !== current) {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        ornt = current
      }
    });
  })();

  $('.ui-select, .ui-checkbox').styler();

  // Инициализация телефонных полей
  (function() {
    const phoneInputs = document.querySelectorAll(".ui-input__phone");
    
    phoneInputs.forEach(input => {
      const iti = window.intlTelInput(input, {
        loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.10.1/build/js/utils.js"),
        initialCountry: "ru",
        separateDialCode: true,
        formatOnDisplay: true,
        autoPlaceholder: "off",
        i18n: {
          // Основные страны
          ru: "Россия",
          us: "США",
          gb: "Великобритания",
          de: "Германия",
          fr: "Франция",
          it: "Италия",
          es: "Испания",
          ua: "Украина",
          by: "Беларусь",
          kz: "Казахстан",
          cn: "Китай",
          jp: "Япония",
          kr: "Южная Корея",
          in: "Индия",
          tr: "Турция",
          pl: "Польша",
          ca: "Канада",
          au: "Австралия",
          br: "Бразилия",
          mx: "Мексика",
          
          // Дополнительные страны
          af: "Афганистан",
          al: "Албания",
          dz: "Алжир",
          as: "Американское Самоа",
          ad: "Андорра",
          ao: "Ангола",
          ai: "Ангилья",
          ag: "Антигуа и Барбуда",
          ar: "Аргентина",
          am: "Армения",
          aw: "Аруба",
          at: "Австрия",
          az: "Азербайджан",
          bs: "Багамы",
          bh: "Бахрейн",
          bd: "Бангладеш",
          bb: "Барбадос",
          be: "Бельгия",
          bz: "Белиз",
          bj: "Бенин",
          bm: "Бермуды",
          bt: "Бутан",
          bo: "Боливия",
          ba: "Босния и Герцеговина",
          bw: "Ботсвана",
          bn: "Бруней",
          bg: "Болгария",
          bf: "Буркина-Фасо",
          bi: "Бурунди",
          kh: "Камбоджа",
          cm: "Камерун",
          cv: "Кабо-Верде",
          ky: "Каймановы острова",
          cf: "ЦАР",
          td: "Чад",
          cl: "Чили",
          co: "Колумбия",
          km: "Коморы",
          cg: "Конго",
          cd: "ДР Конго",
          ck: "Острова Кука",
          cr: "Коста-Рика",
          ci: "Кот-д'Ивуар",
          hr: "Хорватия",
          cu: "Куба",
          cw: "Кюрасао",
          cy: "Кипр",
          cz: "Чехия",
          dk: "Дания",
          dj: "Джибути",
          dm: "Доминика",
          do: "Доминиканская Республика",
          ec: "Эквадор",
          eg: "Египет",
          sv: "Сальвадор",
          gq: "Экваториальная Гвинея",
          er: "Эритрея",
          ee: "Эстония",
          et: "Эфиопия",
          fk: "Фолклендские острова",
          fo: "Фарерские острова",
          fj: "Фиджи",
          fi: "Финляндия",
          ga: "Габон",
          gm: "Гамбия",
          ge: "Грузия",
          gh: "Гана",
          gi: "Гибралтар",
          gr: "Греция",
          gl: "Гренландия",
          gd: "Гренада",
          gu: "Гуам",
          gt: "Гватемала",
          gn: "Гвинея",
          gw: "Гвинея-Бисау",
          gy: "Гайана",
          ht: "Гаити",
          hn: "Гондурас",
          hk: "Гонконг",
          hu: "Венгрия",
          is: "Исландия",
          id: "Индонезия",
          ir: "Иран",
          iq: "Ирак",
          ie: "Ирландия",
          il: "Израиль",
          jm: "Ямайка",
          jo: "Иордания",
          ke: "Кения",
          ki: "Кирибати",
          kp: "КНДР",
          kw: "Кувейт",
          kg: "Киргизия",
          la: "Лаос",
          lv: "Латвия",
          lb: "Ливан",
          ls: "Лесото",
          lr: "Либерия",
          ly: "Ливия",
          li: "Лихтенштейн",
          lt: "Литва",
          lu: "Люксембург",
          mo: "Макао",
          mk: "Северная Македония",
          mg: "Мадагаскар",
          mw: "Малави",
          my: "Малайзия",
          mv: "Мальдивы",
          ml: "Мали",
          mt: "Мальта",
          mh: "Маршалловы Острова",
          mr: "Мавритания",
          mu: "Маврикий",
          md: "Молдова",
          mc: "Монако",
          mn: "Монголия",
          me: "Черногория",
          ms: "Монтсеррат",
          ma: "Марокко",
          mz: "Мозамбик",
          mm: "Мьянма",
          na: "Намибия",
          nr: "Науру",
          np: "Непал",
          nl: "Нидерланды",
          nc: "Новая Каледония",
          nz: "Новая Зеландия",
          ni: "Никарагуа",
          ne: "Нигер",
          ng: "Нигерия",
          no: "Норвегия",
          om: "Оман",
          pk: "Пакистан",
          pw: "Палау",
          ps: "Палестина",
          pa: "Панама",
          pg: "Папуа-Новая Гвинея",
          py: "Парагвай",
          pe: "Перу",
          ph: "Филиппины",
          pt: "Португалия",
          pr: "Пуэрто-Рико",
          qa: "Катар",
          ro: "Румыния",
          rw: "Руанда",
          ws: "Самоа",
          sm: "Сан-Марино",
          st: "Сан-Томе и Принсипи",
          sa: "Саудовская Аравия",
          sn: "Сенегал",
          rs: "Сербия",
          sc: "Сейшелы",
          sl: "Сьерра-Леоне",
          sg: "Сингапур",
          sk: "Словакия",
          si: "Словения",
          sb: "Соломоновы Острова",
          so: "Сомали",
          za: "ЮАР",
          ss: "Южный Судан",
          lk: "Шри-Ланка",
          sd: "Судан",
          sr: "Суринам",
          sz: "Эсватини",
          se: "Швеция",
          ch: "Швейцария",
          sy: "Сирия",
          tw: "Тайвань",
          tj: "Таджикистан",
          tz: "Танзания",
          th: "Таиланд",
          tl: "Восточный Тимор",
          tg: "Того",
          to: "Тонга",
          tt: "Тринидад и Тобаго",
          tn: "Тунис",
          tm: "Туркменистан",
          tv: "Тувалу",
          ug: "Уганда",
          ae: "ОАЭ",
          uy: "Уругвай",
          uz: "Узбекистан",
          vu: "Вануату",
          va: "Ватикан",
          ve: "Венесуэла",
          vn: "Вьетнам",
          ye: "Йемен",
          zm: "Замбия",
          zw: "Зимбабве",
          
          // Поисковая подсказка
          searchPlaceholder: "Поиск"
        }
      });
      
      // Устанавливаем фиксированный placeholder
      input.placeholder = '(000) 000-00-00*';
      
      // Маска для российского номера
      function formatRussianPhone(value) {
        const cleaned = value.replace(/\D/g, '');
        
        let formatted = '';
        for (let i = 0; i < cleaned.length && i < 10; i++) {
          if (i === 0) formatted += '(';
          if (i === 3) formatted += ') ';
          if (i === 6) formatted += '-';
          if (i === 8) formatted += '-';
          formatted += cleaned[i];
        }
        
        return formatted;
      }
      
      // Обработка ввода
      input.addEventListener('input', function(e) {
        const countryData = iti.getSelectedCountryData();
        
        if (countryData.iso2 === 'ru') {
          const cursorPos = this.selectionStart;
          const oldLength = this.value.length;
          
          // Форматируем значение
          this.value = formatRussianPhone(this.value);
          
          // Корректируем позицию курсора
          const newLength = this.value.length;
          const newCursorPos = cursorPos + (newLength - oldLength);
          this.setSelectionRange(newCursorPos, newCursorPos);
        }
      });
      
      // Обработка удаления
      input.addEventListener('keydown', function(e) {
        const countryData = iti.getSelectedCountryData();
        
        if (countryData.iso2 === 'ru' && e.key === 'Backspace') {
          const cursorPos = this.selectionStart;
          const value = this.value;
          
          if (cursorPos > 0) {
            const prevChar = value[cursorPos - 1];
            if (prevChar === '(' || prevChar === ')' || prevChar === ' ' || prevChar === '-') {
              e.preventDefault();
              const cleaned = value.replace(/\D/g, '');
              const newCleaned = cleaned.slice(0, -1);
              this.value = formatRussianPhone(newCleaned);
              
              // Позиционируем курсор в конец
              const newPos = this.value.length;
              this.setSelectionRange(newPos, newPos);
            }
          }
        }
      });
    });
  })();

  (function() {
    if (!document.querySelector('.team-slider')) return
  
    var swiper = new Swiper('.team-slider', {   
      grabCursor: true,    
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      autoHeight: true,
      autoplay: false,
      // loop: true,
      pagination: {
        el: ".section-destinations .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".team-nav-next",
        prevEl: ".team-nav-prev",
      },
      breakpoints: {
        480: {
          slidesPerView: 1.6,
        },
        577: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        },
        1140: {
          slidesPerView: 4, 
        },       
      }
    });  
  })();

  // бургер меню
  (function() {
    const menu = document.querySelector('.menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuBtn = document.querySelector('.header-burger');
    const menuClose = document.querySelector('.menu-close');
    const body = document.querySelector('body');

    menuBtn.addEventListener('click', () => {
      menu.classList.add('active');
      menuOverlay.classList.add('active');
      body.classList.add('non-scroll');
    });

    menuClose.addEventListener('click', () => {
      menu.classList.remove('active');
      menuOverlay.classList.remove('active');
      body.classList.remove('non-scroll');
    });
  })();

  // аккордеон
  (function() {  
    const accordionContainers = document.querySelectorAll('.accordion');

    accordionContainers.forEach(container => {
      const accordionItems = container.querySelectorAll('.accordion-item');

      accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-item-header');
        const content = item.querySelector('.accordion-item-content');

        header.addEventListener('click', () => {          
          accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
              otherItem.querySelector('.accordion-item-content').style.maxHeight = '0';
            }
          });
    
          item.classList.toggle('active');

          if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = '0';
          }
        });

        if (item.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  })();

  // Кнопка "Наверх"
  (function() {
    const goUpBtn = document.querySelector('.go-up-btn');
    
    if (!goUpBtn) return;
  
    goUpBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Показываем кнопку после второй секции
    const sections = document.querySelectorAll('section');
    
    if (sections.length < 2) return;

    const secondSection = sections[1];    
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          goUpBtn.classList.add('show');
        } else if (entry.isIntersecting) {
          goUpBtn.classList.remove('show');
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px'
    });

    observer.observe(secondSection);
  })();

  // Плавная прокрутка к якорям
  (function() {
    const menuOverlay = document.querySelector('.menu-overlay');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    
    // Функция плавной прокрутки
    function smoothScrollTo(target) {
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Функция закрытия меню
    function closeMenu() {
      menu.classList.remove('active');
      menuOverlay.classList.remove('active');
      body.classList.remove('non-scroll');
    }
    
    // Обработка кликов по ссылкам в хедере
    const headerLinks = document.querySelectorAll('.header__wrapper a[href^="#"]');
    headerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          smoothScrollTo(targetElement);
        }
      });
    });
    
    // Обработка кликов по ссылкам в бургер-меню
    const menuLinks = document.querySelectorAll('.menu-nav a[href^="#"]');
    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Сначала закрываем меню
          closeMenu();
          
          // Затем делаем прокрутку с небольшой задержкой
          setTimeout(() => {
            smoothScrollTo(targetElement);
          }, 300); // Задержка соответствует времени анимации закрытия меню
        }
      });
    });
    
    // Обработка кликов по ссылкам в футере
    const footerLinks = document.querySelectorAll('.footer a[href^="#"]');
    footerLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          smoothScrollTo(targetElement);
        }
      });
    });
  })();

  // Открытие попапа
  $(document).on("click", ".mfp-link", function () {
    var a = $(this);
    $.magnificPopup.open({
      items: { src: a.attr("data-href") },
      type: "ajax",
      overflowY: "scroll",
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      ajax: {
        tError: "Error. Not valid url",
      },
      callbacks: {
        open: function () {
          setTimeout(function(){
            $('.mfp-wrap').addClass('not_delay');
            $('.mfp-popup').addClass('not_delay');
          },700);
  
          document.documentElement.style.overflow = 'hidden'
        },
  
        close: function() {
          document.documentElement.style.overflow = ''
        }
      }
    });
    return false;
  });

  // Анимация элементов с классом .animate-fade-up при скролле
  (function() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP или ScrollTrigger не загружен');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Находим все элементы с классом .animate-fade-up
    const animatedElements = document.querySelectorAll('.animate-fade-up');

    animatedElements.forEach((element, index) => {
      // Устанавливаем начальное состояние
      gsap.set(element, {
        opacity: 0,
        y: 50
      });

      // Создаём анимацию появления
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          // markers: true // Для отладки
        }
      });
    });

    // Дополнительно: анимация с задержкой для групп элементов
    // Используйте класс .animate-fade-up-delay на дочерних элементах
    const delayedGroups = document.querySelectorAll('.animate-group');
    
    delayedGroups.forEach(group => {
      const children = group.querySelectorAll('.animate-fade-up-delay');
      
      children.forEach((child, index) => {
        gsap.set(child, {
          opacity: 0,
          y: 50
        });

        gsap.to(child, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15, // Задержка между элементами
          ease: 'power2.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    });
  })();

  // квиз, проверка отмеченных чекбоксов
  (function() {  
    const quizNavRight = document.querySelector('.ui-nav-item-icon__right');
    const quizContent = document.querySelector('.quiz-content-questions');
    const checkboxes = document.querySelectorAll('.ui-checkbox');
   
    function hasCheckedCheckbox() {
      return Array.from(checkboxes).some(checkbox => checkbox.checked);
    }

    function removeError() {
      if (quizContent.classList.contains('error')) {
        quizContent.classList.remove('error');
      }
    }
 
    if (quizNavRight) {
      quizNavRight.closest('.quiz-nav-item').addEventListener('click', function(e) {
        if (!hasCheckedCheckbox()) {
          e.preventDefault();
          quizContent.classList.add('error');
        } else {
          removeError();          
        }
      });
    }

    const checkboxWrappers = document.querySelectorAll('.ui-checkbox-wrapper');

    checkboxWrappers.forEach(wrapper => {
      wrapper.addEventListener('click', function() {
        setTimeout(() => {
          if (hasCheckedCheckbox()) {
            removeError();
          }
        }, 50);
      });
    });
  })();

  $(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Нормализация скролла для Mac
    if (isMac()) {
      console.log('MAC');
      ScrollTrigger.normalizeScroll({
        allowNestedScroll: true,
        target: document.body
      });
    }

    function isMac() {
      return navigator.platform.indexOf('Mac') > -1;
    }   
  })
})
