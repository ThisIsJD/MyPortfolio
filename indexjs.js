//Scroll effects
const navbar = document.getElementById('navbar');
let lastY = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentY = window.pageYOffset;

  // 1) scrolled background
  if (currentY >= 56) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }

  // 2) hide on scroll down, show on scroll up
  if (currentY > lastY) {
    // scrolling down
    navbar.style.top = `-${navbar.offsetHeight}px`;
  } else {
    // scrolling up
    navbar.style.top = '0';
  }

  lastY = currentY;
});

//cursor follower
     const grad = document.querySelector('.cursor-gradient');
    document.addEventListener('mousemove', e => {
      /* set CSS vars to the mouse position */
      grad.style.setProperty('--mouse-x', e.clientX + 'px');
      grad.style.setProperty('--mouse-y', e.clientY + 'px');
    });

// const navEl = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 56) {
//         navEl.classList.add('navbar-scrolled');
//     } else {
//         navEl.classList.remove('navbar-scrolled');
//     }
//     })

//     let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-72px";
//   }
//   prevScrollpos = currentScrollPos;
// }

 // 1) “Install” the modules you plan to use
  Swiper.use([Swiper.EffectCoverflow, Swiper.Pagination, Swiper.Navigation]);

  // 2) Initialize Swiper on your .swiper container
new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 60,

     autoplay: {
      delay: 3000,           // 3 seconds
      disableOnInteraction: false,  
      // (keeps autoplay running even after you manually swipe)
    },

    // Coverflow settings
    coverflowEffect: {
      rotate: 35,     // how much the side slides rotate (degrees)
      stretch: 0,     // space between slides in px
      depth: 200,     // depth offset in px (perspective)
      modifier: 1,    // multiplier for all params
      slideShadows: true,
    },

    // Pagination (dots)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows (if you have them)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

     breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }
  });