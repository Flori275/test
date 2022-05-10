// Import all bootstrap plugins
import * as bootstrap from 'bootstrap'; 
/* TIME COUNTDOWN */
  // Setup End Date for Countdown (getTime == Time in Milleseconds)
  let launchDate = new Date("May 22, 2022 12:00:00").getTime();

  // Setup Timer to tick every 1 second
  let timer = setInterval(tick, 1000);
  
  function tick () {
    // Get current time
    let now = new Date().getTime();
    // Get the difference in time to get time left until reaches 0
    let t = launchDate - now;
  
    // Check if time is above 0
    if (t > 0) {
      // Setup Days, hours, seconds and minutes
      // Algorithm to calculate days...
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      // prefix any number below 10 with a "0" E.g. 1 = 01
      if (days < 10) { days = "0" + days; }
      
      // Algorithm to calculate hours
      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) { hours = "0" + hours; }
  
      // Algorithm to calculate minutes
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      if (mins < 10) { mins = "0" + mins; }
  
      // Algorithm to calc seconds
      let secs = Math.floor((t % (1000 * 60)) / 1000);
      if (secs < 10) { secs = "0" + secs; }
  
      // Create Time String
      let time = `${days} : ${hours} : ${mins} : ${secs}`;
  
      // Set time on document
      document.querySelector('.countdown').innerText = time;
    }
  }


var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



  var swiper2 = new Swiper(".Swiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  let appendNumber = 600;
          let prependNumber = 1;
          const swiper = new Swiper('.Swiper', {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

          });

          document
            .querySelector('.slide-1')
            .addEventListener('click', function (e) {
              e.preventDefault();
              swiper.slideTo(0, 0);
            });

          document
            .querySelector('.slide-250')
            .addEventListener('click', function (e) {
              e.preventDefault();
              swiper.slideTo(249, 0);
            });

          document
            .querySelector('.slide-500')
            .addEventListener('click', function (e) {
              e.preventDefault();
              swiper.slideTo(499, 0);
            });

          document
            .querySelector('.prepend-2-slides')
            .addEventListener('click', function (e) {
              e.preventDefault();
              swiper.virtual.prependSlide([
                'Slide ' + --prependNumber,
                'Slide ' + --prependNumber,
              ]);
            });

          document
            .querySelector('.append-slide')
            .addEventListener('click', function (e) {
              e.preventDefault();
              swiper.virtual.appendSlide('Slide ' + ++appendNumber);
            });








           
// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}






