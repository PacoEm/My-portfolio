const devsect = document.getElementById("section_dev");

function CallScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      devsect.style.backgroundColor = "rgb(240, 235, 235)";
      devsect.style.color = "rgb(41, 38, 38)";
      devsect.style.transition = "3s ease";
    } else if (window.scrollY < 600) {
      devsect.style.backgroundColor = "black";
      devsect.style.color = "beige";
      devsect.style.transition = "3s ease";
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
