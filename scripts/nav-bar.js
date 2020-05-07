// Pas encore d'utilisations de ce script
window.addEventListener('scroll', function() {
  var element = document.getElementById('nav');
  var position = element.getBoundingClientRect();
  var navalt = document.getElementById('nav-alt');
  // checking whether fully visible
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
    console.log('Element is fully visible in screen');
  }

  // checking for partial visibility
  if(position.top < window.innerHeight && position.bottom >= 0) {
    console.log('Element is partially visible in screen');
    navalt.style.visibility = "hidden";
  }
  else {
    navalt.style.visibility = "visible";
  }
});
