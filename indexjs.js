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

document.querySelectorAll('.custom-navbar .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    // remove active from all
    document.querySelectorAll('.custom-navbar .nav-link.active')
      .forEach(el => el.classList.remove('active'));

    // add to the one just clicked
    link.classList.add('active');
  });
});

// 1) Grab all the nav‐links and their target sections
const navLinks = document.querySelectorAll('.custom-navbar .nav-link');
const sections = Array.from(navLinks).map(link => {
  const id = link.getAttribute('href').slice(1);  // “#about” → “about”
  return document.getElementById(id);
});

// 2) On scroll, find the section whose top is just above the fold
function onScroll() {
  const scrollPos = window.pageYOffset + window.innerHeight / 3;

  let currentSection = sections[0];
  for (let sec of sections) {
    if (sec.offsetTop <= scrollPos) {
      currentSection = sec;
    } else {
      break;
    }
  }

  // 3) Toggle active class
  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href').slice(1) === currentSection.id
    );
  });
}

// 4) Wire it up
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);  // ensure correct on page‐load



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


  // JS: select all the cards, then attach listeners to each
const cards = document.querySelectorAll('.card-layer');

cards.forEach(card => {
  card.addEventListener('mousemove', onCardMouseMove);
  card.addEventListener('mouseleave', onCardMouseLeave);
});

function onCardMouseMove(e) {
  const card = e.currentTarget;               // the card under the pointer
  const box = card.getBoundingClientRect();
  const relX = e.clientX - box.left;
  const relY = e.clientY - box.top;

  const rotateY = -(relX - box.width  / 2) / 15;
  const rotateX =  (relY - box.height / 2) / 15;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function onCardMouseLeave(e) {
  const card = e.currentTarget;
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
}
