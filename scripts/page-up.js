// Go to a specific anchor
function goToAnchor(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
  }

// Make the button appear when you scroll down
window.addEventListener('scroll', function() {
  var element = document.getElementById('header');
  var position = element.getBoundingClientRect();
  var navalt = document.getElementById('page-up');
  // checking whether fully visible
  if(position.top >= 0 && position.bottom <= window.innerHeight) {
    // console.log('Element is fully visible in screen');
    navalt.style.visibility = "hidden";
  }
  else if(position.top < window.innerHeight && position.bottom >= 0) {
    // console.log('Element is partially visible in screen');
    navalt.style.visibility = "visible";
  }
});
