document.querySelectorAll('.expand-arrow').forEach(expand => {
  expand.addEventListener('click', () => {
    const expandable = expand.previousElementSibling;
    const parent = expand.parentElement;
    console.log(parent);
    parent.classList.toggle('article-active');
    if(expand.innerHTML == "expand_less"){
      // panel is closed
      expand.innerHTML = "expand_more";
      expandable.style.maxHeight = '0px';
    }
    else {
      // panel is open
      expand.innerHTML = "expand_less";
      expandable.style.maxHeight = '150px';
      // parent.style.backgroundColor = "lightgrey";
    }
  });
});
