const progressSlider = document.querySelector('.progress');

const swiperSkills = new Swiper(".mySwiper-skills", {
  breakpoints:{
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    }
  },
    grid: {
      rows: 2,
    },
    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
  const swiperProjects = new Swiper(".mySwiper-projects", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    autoplay:{
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.projects__list',
      clickable: true,
    },
    on: {
      autoplayTimeLeft(s, time, progress, id) {

          progressSlider.style.setProperty('width', `${progress * 1000}%` )
          
          // console.log(s.activeIndex)
          
      }
      
    }
  });

  let slide = 0;
const projectSliderBtn = $('.projects__item');
$('.projects__item').on('click', function (e) { 
  projectSliderBtn.removeClass('--active');
  $(this).addClass('--active')

})



let myLogo = [
'DXDXDXDXDXDXDXDXDXDANILADXDXDXDXDXDXDXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDXDXDXXXDXDXDXDXD DXDXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDXDXDXAXDXDX   DD   DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDXDXDXTXDXDX   DD   DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDXDXDXIXDXDX   DD   DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDD         D        DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDD     NDDDD   DD   DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDD    DYDDDD   DD   DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDD    3LDDDD   DD   DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDD             DD   DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDDD3          DDD   DXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDXDXDXDYDXDXDXDD   DXDXDXDXDXDXDXD',
'DXDXDXDXDXDXDXDXDXDXD3            DXDXDXDXDXDXDXDX',
'Designed by      yLuTo4KA    DXDXDXDXDXDXDXDXDDDDD',
'DXDXDXDXDXDXDXDXDXDXDXDXTXDXDXDXDXDXDXDXDXDXDXDXDX',
'DXDXDXDXDXDXDXDXDXDXDXDXoXDXDXDXDXDXDXDXDXDXDXDXDX',]
myLogo.forEach(logoString =>{
    console.log(logoString)
})


