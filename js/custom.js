let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

window.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(() => {
      $('.photos').masonry({
          // set itemSelector so .grid-sizer is not used in layout
          itemSelector: '.photo-item',
          // use element for option
          columnWidth: '.photo-sizer',
          fitWidth: true
      })
  }, 1000);
})