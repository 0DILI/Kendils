/*========== HEADER2 MENU ==========*/
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
  if(!menu.classList.contains("active")){
    return;
  }
 if(e.target.closest(".menu-item-has-children")){
  const hasChildren = e.target.closest(".menu-item-has-children");
  showSubMenu(hasChildren)
 }
});

goBack.addEventListener("click",() => {
  hideSubMenu();
})

menuTrigger.addEventListener("click",() => {
 toggleMenu();
})

closeMenu.addEventListener("click",() => {
  toggleMenu();
})

document.querySelector(".menu-overlay").addEventListener("click",() =>{
  toggleMenu();
})

function toggleMenu(){
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active")
}

function showSubMenu(hasChildren){
 subMenu = hasChildren.querySelector(".sub-menu");
 subMenu.classList.add("active");
 subMenu.style.animation = "slideLeft 0.5s ease forwards";
 const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
 menu.querySelector(".current-menu-title").innerHTML=menuTitle;
 menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu(){
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300) 
  menu.querySelector(".current-menu-title").innerHTML="";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
  if(this.innerWidth >991){
    if(menu.classList.contains("active")){
      toggleMenu();
    }
    
  }
}




/*========== Hide Show ==========*/
/* validate if constant exists */

/*========== IMAGE GALLERY ==========*/
function imgGallery() {
  const mainImg = document.querySelector('.details_img'),
  smallImg = document.querySelectorAll('.details_small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function() {
      mainImg.src = this.src;
    })
  })
}

imgGallery();

/*========== SWIPER CATEGORIES ==========*/
var swiperProducts = new Swiper('.categories_container', {
    spaceBetween: 24,
    loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        350: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },
    });

    /*========== SWIPER PRODUCTS ==========*/
    var swiperCategories = new Swiper('.new_container', {
      spaceBetween: 24,
      loop: true,
  
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
  
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      });

    /*========== PRODUCTS TABS ==========*/
    const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[content]');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
          tabContent.classList.remove('active-tab');
        });

        target.classList.add('active-tab');

        tabs.forEach((tab) => {
          tab.classList.remove('active-tab')
        });

        tab.classList.add('active-tab')
       });
      });
