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
const imgBlocks = document.querySelectorAll(".slider");
imgBlocks.forEach((imgBlock) => {
  imgBlock.addEventListener("click", () => {
    imgBlocks.forEach((btn) => {
      btn.classList.remove("active");
      imgBlock.classList.add("active");
    });
  });
});
