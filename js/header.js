let menu = document.querySelector(".menu-icon");
let navigation = document.querySelector(".navigation");
let close = document.querySelector(".close-nav-menu");
let span = document.querySelectorAll(".menu-icon span");


menu.addEventListener("click", () => {
  navigation.classList.toggle("active");
  document.body.style.overflowY = "hidden";
  for (let i = 0; i < span.length; i++) {
    span[i].style.display = "none";
  }
});

close.addEventListener("click", () => {
  navigation.classList.remove("active");
  document.body.style.overflowY = "auto";
  for (let i = 0; i < span.length; i++) {
    span[i].style.display = "block";
  }
});

// menu 2

let menu2 = document.querySelector(".menu-icon2");
let navigationBlack = document.querySelector(".navigationBlack");
let close2 = document.querySelector(".close-nav-menu2");
let span2 = document.querySelectorAll(".menu-icon2 .span-2");
let span3 = document.querySelectorAll(".menu-icon span");


menu2.addEventListener("click", () => {
  navigationBlack.classList.toggle("active");
  document.body.style.overflowY = "hidden";
  for (let i = 0; i < span.length; i++) {
    span2[i].style.visibility= "hidden";
  }
});

close2.addEventListener("click", () => {
  navigationBlack.classList.remove("active");
  document.body.style.overflowY = "auto";
  for (let i = 0; i < span2.length; i++) {
    span2[i].style.visibility = "visible";
  }
});


window.onscroll = function() {

  let headerWhite = document.querySelector(".headerWhite");
  let header_black = document.querySelector(".header-black");

  let logo_small = document.querySelector(".logo-small");
  let logo_pig = document.querySelector(".logo-pig");
  let navigation = document.querySelector("headerWhite .navigation");


  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    headerWhite.style.display = "none";
    header_black.style.display = "flex";
    // logo_small.style.display = "block";
    // logo_pig.style.display = "none";
    header_black.style.position= "fixed";
    header_black.style.background= "black";

  // navigation.style.background = "none";

    
  } // if
  else{ 
    headerWhite.style.display = "flex";
    header_black.style.display = "none";
    // logo_small.style.display = "none";
    // logo_pig.style.display = "block";



    } // else 

  }

  // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //   header.style.background = "black";
  //   header.style.position = "fixed";
  //   logo_small.style.display = "block";
  //   logo_small.style.margin = "0 32px 0 -41px !important";
  //   logo_small.transform.display = "scale(1.3)";
  //   navigation.margin = "-44px 0 0 -19px !important";


  // } else {
  //   header.style.background = "transparent";
  //   header.style.position = "absolute";
  //   logo_pig.style.display = "none";
  //   navigation.margin = "0 0 0 -15px";


  //   logoSmall.style.display = "none";
  //   logoPig.style.display = "block";
  // }
  // }