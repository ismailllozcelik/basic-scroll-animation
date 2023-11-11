const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", handleScroll);

handleScroll();

function handleScroll() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  console.log("triggerBottom", triggerBottom);
  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log("boxTop", index, boxTop);

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
