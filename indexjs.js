const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    } else {
        navEl.classList.remove('navbar-scrolled');
    }
    })

     const grad = document.querySelector('.cursor-gradient');
    document.addEventListener('mousemove', e => {
      /* set CSS vars to the mouse position */
      grad.style.setProperty('--mouse-x', e.clientX + 'px');
      grad.style.setProperty('--mouse-y', e.clientY + 'px');
    });