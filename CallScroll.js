const devsect = document.getElementById("section_dev");
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");
const compoh1 = document.getElementById("compo_h1");

function CallScroll() {
  window.addEventListener("scroll", () => {
    let Y_TITLE1 = compoh1.offsetTop - window.innerHeight / 1.3;
    let Y_TITLE2 = compoh1.offsetTop - window.innerHeight / 1.5;
    let Y_TITLE3 = compoh1.offsetTop - window.innerHeight / 1.7;
    let Y_TITLE4 = compoh1.offsetTop - window.innerHeight / 1.9;

    console.log(window.scrollY + " / " + title1.offsetTop);
    // -------------------------------------
    // scroll section dévelloppement
    // -------------------------------------
    if (window.scrollY > 600) {
      devsect.style.backgroundColor = "rgb(240, 235, 235)";
      devsect.style.color = "rgb(41, 38, 38)";
      devsect.style.transition = "3s ease";
    } else if (window.scrollY < 600) {
      devsect.style.backgroundColor = "black";
      devsect.style.color = "beige";
      devsect.style.transition = "3s ease";
    }

    // --------------------------
    // scroll section composition
    // --------------------------

    // scroll h1

    // scroll title1
    if (window.scrollY > Y_TITLE1) {
      title1.style.width = "60%";
      title1.style.transition = "0.5s ease";
      // title1.style.opacity = "0";
    } else if (window.scrollY < Y_TITLE1) {
      title1.style.width = "0%";
      title1.style.transition = "0.5s ease";
      // title1.style.opacity = "1";
    }

    // scroll title2
    if (window.scrollY > Y_TITLE2) {
      title2.style.width = "60%";
      title2.style.transition = "0.5s ease";
      // title1.style.opacity = "0";
    } else if (window.scrollY < Y_TITLE2) {
      title2.style.width = "0%";
      title2.style.transition = "0.5s ease";
      // title1.style.opacity = "1";
    }

    // scroll title3
    if (window.scrollY > Y_TITLE3) {
      title3.style.width = "60%";
      title3.style.transition = "0.5s ease";
      // title1.style.opacity = "0";
    } else if (window.scrollY < Y_TITLE3) {
      title3.style.width = "0%";
      title3.style.transition = "0.5s ease";
      title1.style.opacity = "1";
    }

    // scroll title4
    if (window.scrollY > Y_TITLE4) {
      title4.style.width = "60%";
      title4.style.transition = "0.5s ease";
      // title1.style.opacity = "0";
    } else if (window.scrollY < Y_TITLE4) {
      title4.style.width = "0%";
      title4.style.transition = "0.5s ease";
      title1.style.opacity = "1";
    }
  });

  // -----------------------------------
  // reset the tansitions when resizing
  // -----------------------------------

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
