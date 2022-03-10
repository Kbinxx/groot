// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbarpop").style.top = "0";
  } else {
    document.getElementById("navbarpop").style.top = "-50px";
  }
}