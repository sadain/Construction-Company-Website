let navbar = document.querySelector('.header .navbar');
// let searchForm = document.querySelector('.header .search-form');
// let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   // searchForm.classList.remove('active');
   // loginForm.classList.remove('active');
};

// document.querySelector('#search-btn').onclick = () =>{
//    searchForm.classList.toggle('active');
//    navbar.classList.remove('active');
//    loginForm.classList.remove('active');
// };

// document.querySelector('#login-btn').onclick = () =>{
//    loginForm.classList.toggle('active');
//    navbar.classList.remove('active');
//    searchForm.classList.remove('active'); 
// };

document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   // searchForm.classList.remove('active');
   // loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});


var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});


// filter projects 

const buttons = document.querySelectorAll(".btn");
const projectBoxes = document.querySelectorAll(".box");

// Add click event listeners to all buttons
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Remove active class from all buttons
    buttons.forEach(function(btn) {
      btn.classList.remove("active");
    });
    // Add active class to the clicked button
    button.classList.add("active");

    // Filter projects based on the selected category
    const category = button.getAttribute("data-filter");
    projectBoxes.forEach(function(box) {
      const boxCategory = box.getAttribute("data-category");
      if (category === "all" || category === boxCategory) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});

