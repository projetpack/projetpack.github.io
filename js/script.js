const navLink = document.querySelector("nav a.title");
const navLinkImage = navLink.querySelector("img");
var $loader = document.querySelector('.loader');

const mobileMenuToggle = document.getElementById('mobile-nav-toogle');
const mobileMenu = document.querySelector("nav.mobile");
const cookiePopup = document.querySelector(".popup-cookies");

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    navLinkImage.setAttribute("src","images/logo/White Icon.svg");
}else {
    navLinkImage.setAttribute("src","images/logo/Black Icon.svg");
}

function scrollElement() {
    if (window.scrollY >= 170){
        document.getElementById("scroll-down").classList.add("scrolled");
    }else {
        document.getElementById("scroll-down").classList.remove("scrolled");
    }
}

//? VERSION CONTROLLER
var version = document.getElementsByClassName('version');
version.innerText = "β0.5";

/* LOADER */

window.onload = function() {
  $loader.classList.remove('loader--active')
};


  //? COOKIES POPUP

  function cookieX() {
    cookiePopup.style.display = "none";
    cookiePopup.style.opacity = 0;
  }





  /////
  //? MACHINE/BROWSER ID

  function getMachineId() {

let machineId = localStorage.getItem('MachineId');

if (!machineId) {
  machineId = crypto.randomUUID();
  localStorage.setItem('MachineId', machineId);
}

return machineId;
}


//? MOBILE MENU

function mobileToggle() {
mobileMenuToggle.classList.toggle("active");
if(mobileMenu.style.display == "block" & mobileMenu.style.opacity == 1) {
  mobileMenu.style.display = "none";
  mobileMenu.style.opacity = 0;
}else {
  mobileMenu.style.display = "block";
  mobileMenu.style.opacity = 1;
}

}


//? PANELS

function openPanel(id) {
  const panel = document.getElementById(id);
  const zIndex = panel.style.zIndex;

  panel.style.display = "block";
  panel.style.opacity = "100%";
  panel.style.zIndex = zIndex + 1;
}