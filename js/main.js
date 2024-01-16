const menu = document.querySelector('.header-menu')
const printInput = document.querySelector('.icon-search')
const searchInput = document.querySelector('.search')
const close = document.querySelector('.fa-times')

const imgs = document.querySelectorAll('.main-slider img')
const dots = document.querySelectorAll('.dot')
let currentImg = 0;
const interval = 3000;
let timer = setInterval(changeSlide, interval);


printInput.addEventListener('click', function () {
    menu.style.display = 'none';
    searchInput.setAttribute("style", "display:block;");
})
close.addEventListener('click', function () {
    menu.style.display = 'block'
    searchInput.style.display = 'none'
})

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}


//onClick Ảnh

const img = document.querySelector("img");
img.addEventListener("click", function() {
  window.location.href = "trang-moi.html";
});
















