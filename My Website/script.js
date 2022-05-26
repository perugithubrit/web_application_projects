
        function expand(target) {
  for (let slide of target.parentNode.children) {
    slide.classList.remove("slide--expanded");
  }
  target.classList.add("slide--expanded");
}