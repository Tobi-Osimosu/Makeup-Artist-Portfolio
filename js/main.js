function scrolling() {
  if (matchMedia("(min-width: 992px)").matches) {
    const scrollY = window.scrollY;

    scrollY > 0
      ? document.body.classList.add("scroll")
      : document.body.classList.remove("scroll");
  } else {
    document.body.classList.remove("scroll");
  }
}
