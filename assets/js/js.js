AOS.init();
function toggleMenu()
{
    var menu = document.getElementById("menue")
    var navMenu = document.querySelector('.menu-utama2')
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}

var mengloading;
var target = document.getElementById("about");
var scrollToTopBtn = document.querySelector(".keatas")
var rootElement = document.documentElement

function loadingFunc() {
    mengloading = setTimeout(tampilin, 2000);
}

function tampilin() {
    document.getElementById("mengloding").style.visibility = "hidden";
    document.getElementById("kontener").style.visibility = "visible";
}


function callback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      scrollToTopBtn.classList.add("tampilintombolkeatas")
    } else {
      scrollToTopBtn.classList.remove("tampilintombolkeatas")
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollToTopBtn.addEventListener("click", scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target);