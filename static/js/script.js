var swiper = new Swiper(".slide-content-1", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    infinite: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-next-1",
        prevEl: ".swiper-prev-1",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".slide-content-2", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    infinite: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-next-2",
      prevEl: ".swiper-prev-2",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

