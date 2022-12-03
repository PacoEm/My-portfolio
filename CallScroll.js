const devsect = document.getElementById("section_dev");

function CallScroll() {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 400) {
      devsect.style.backgroundColor = "beige";
      devsect.style.transition = "1.5s ease";
    } else if (window.scrollY < 400) {
      devsect.style.backgroundColor = "black";
      devsect.style.transition = "1.5s ease";
    }
  });

  // reset the rtansitions when resizing
  window.addEventListener(
    "resize",
    function (event) {
      devsect.style.transition = "none";
    },
    true
  );
  window.onresize = ResetTransition();
  function ResetTransition() {
    devsect.style.transition = "none";
  }
}

CallScroll();
