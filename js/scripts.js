$(document).ready(function(){
  
mybutton = document.getElementById("myBtn");

  window.onscroll = function() {
    scrollFunction()
  };

  window.onclick = function() {
    topFunction();
  }
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop
      > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
  }
  
  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
})
