// JavaScript Document


$(document).ready(function () {
  var h = $(window).height();
  var w = $(window).width();
  if (w > 640) {
    $('.wrapper').css({ transform: "scale(" + w / 1920 + ")"});
    var iw = $(".wrapper")[0].getBoundingClientRect().width;
    var ih = $(".wrapper")[0].getBoundingClientRect().height;
    $('body').css({ height: ih, width: iw });

  }
  else if  (320 < w < 640){
    $('.wrapper').css({ transform: "scale(" + w / 640 + ")" });
    var mw = $(".wrapper")[0].getBoundingClientRect().width;
    var mh = $(".wrapper")[0].getBoundingClientRect().height;
    $('body').css({ height: mh, width: mw });
  }
  $(window).on('resize', function () {
    var h1 = $(window).height();
    var w1 = $(window).width();
    if (w1 > 1024) {
      $('.wrapper').css({ transform: "scale(" + w1 / 1920 + ")" });
      var iw1 = $(".wrapper")[0].getBoundingClientRect().width;
      var ih1 = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: ih1, width: iw1 });

    }
    else if (320 < w1 < 1024) {
      $('.wrapper').css({ transform: "scale(" + w1 / 1024 + ")" });
      var mw1 = $(".wrapper")[0].getBoundingClientRect().width;
      var mh1 = $(".wrapper")[0].getBoundingClientRect().height;
      $('body').css({ height: mh1, width: mw1 });
    }
  });

});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,

});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 400000,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper,
  },

});

var mySwiper3 = new Swiper('.mySwiper3', {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 80,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});





function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
// --------------------------
// gsap
// --------------------------

/* global ready, gsap, ScrollTrigger*/
ready(() => {
  'use strict';
  gsap.registerPlugin(ScrollTrigger);

  const tlSection1 = gsap.timeline({
    defaults: { autoAlpha: 0 },
  });

  tlSection1
    .from('.logo', { y: '6rem', duration: 0.5 }, '-=0.1')
    .from('.download-main', { y: '6rem', duration: 0.5}, '-=0.1')
    .from('.art1-page1', { scale: 2, stagger: 0.2, duration: 0.5 }, '-=0.1')
    .from('.slogan img', { x: '6rem', duration: 0.5}, '-=0.1')
    .from('.art2-page1', { scale: 2, stagger: 0.2, duration: 0.5 }, '-=0.1')
    .from('.art3-page1', { scale: 2, stagger: 0.2, duration: 0.5 }, '-=0.1')
    

  if (window.innerWidth >= 992) {
    ScrollTrigger.defaults({
      // toggleActions: 'play complete none reverse',
      start: 'top bottom',
      end: '80% bottom',
      scrub: 1,
      // markers: true
    });
    const tlPosition = '-=0.1';
    // frame 2
    gsap.timeline({
      defaults: { autoAlpha: 0 },
      scrollTrigger: { trigger: '#section2' }
    }).from('#section2 .title', { y: '6rem', duration: 1 }, tlPosition)
      .from('#section2 .main-slider', { scale: 0.2, duration: 1 }, tlPosition);
    // frame 3
    gsap.timeline({
      defaults: { autoAlpha: 0 },
      scrollTrigger: { trigger: '#section3' }
    }).from('#section3 .title', { y: '6rem', duration: 1 }, '-=0.1')
      .from('#section3 .desktop .item', { scale: 0.5, stagger: 0.1, ease: 'back.out(2)' }, tlPosition)
      .from('#section3 .btn-thele', { y: '6rem', duration: 1 }, '-=0.1');

    // frame 4
    gsap.timeline({
      defaults: { autoAlpha: 0 },
      scrollTrigger: { trigger: '#section4' }
    }).from('#section4 .title', { y: '6rem', duration: 1 }, '-=0.1')
    .from('#section4 .tab-bxh a', { scale: 0.5, stagger: 0.1, ease: 'back.out(2)' }, tlPosition)
    .from('#section4 .server', { y: '6rem', duration: 1 }, '-=0.1')
    .from('#section4 .tbl-bxh', { y: '6rem', duration: 1 }, '-=0.1');

    // frame 5
    gsap.timeline({
      defaults: { autoAlpha: 0 },
      scrollTrigger: { trigger: '#section5' }
    }).from('#section5 .title', { y: '6rem', duration: 1 }, '-=0.1')
      .from('#section5 .container1', { scale: 0.2, duration: 1 }, '-=0.1');
      // frame 6
    gsap.timeline({
      defaults: { autoAlpha: 0 },
      scrollTrigger: { trigger: '#section6' }
    }).from('#section6 .title', { y: '6rem', duration: 1 }, '-=0.1')
      .from('#section6 .art-page6', { x: '-6rem', duration: 1 }, '-=0.1')
      .from('#section6 .desktop a', { scale: 0.5, stagger: 0.1, ease: 'back.out(2)' }, tlPosition);
  }

});
