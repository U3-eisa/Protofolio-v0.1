const navi = document.querySelectorAll(".navi");
function activelink() {
  navi.forEach((item) => {
    item.classList.remove("clicked");
    this.classList.add("clicked");
  });
}
navi.forEach((item) => {
  item.addEventListener("click", activelink);
});
