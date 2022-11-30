// the script manage the appearance of each élément
// of the index page
function CallIndex() {
  const titleUp = document.getElementById("title_up");
  const titleDown = document.getElementById("title_down");

  const linksUp = document.querySelectorAll(".linkup");
  const linksDown = document.querySelectorAll(".linkdown");
  const separation = document.getElementById("separations_container");

  // title opacity time transition
  const TITLE_TIME = 3;
  // separations opacity time transition
  const SEP_TIME = 2;

  window.addEventListener("load", () => {
    // title
    titleUp.style.transition = TITLE_TIME + "s ease";
    titleUp.style.transitionProperty = "opacity";
    titleUp.style.opacity = "1";
    //   title reflection
    titleDown.style.transition = TITLE_TIME + "s ease";
    titleDown.style.transitionProperty = "opacity";
    titleDown.style.opacity = "0.6";

    // dev link appearance
    for (i = 0; i < linksUp.length; i += 1) {
      linksUp[i].className = "linkuptrans";
    }

    // dev reflection appearance
    for (i = 0; i < linksDown.length; i += 1) {
      linksDown[i].className = "linkdowntrans";
    }

    // separation appearence
    separation.style.transition = SEP_TIME + "s ease";
    separation.style.transitionProperty = "opacity";
    separation.style.opacity = "1";
  });
}

CallIndex();
