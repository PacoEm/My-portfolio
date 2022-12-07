const devsect = document.getElementById("section_dev");
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");
const stylezic1 = document.getElementById("stylezic1");
const stylezic2 = document.getElementById("stylezic2");
const stylezic3 = document.getElementById("stylezic3");
const stylezic4 = document.getElementById("stylezic4");
const compoh1 = document.getElementById("compo_h1");
const idee = document.getElementById("idee");
const projet = document.getElementById("projet");
const talk = document.getElementById("letstalk");
const contact = document.getElementById("contact");

function CallScroll() {
  window.addEventListener("scroll", () => {
    let Y_TITLE1 = compoh1.offsetTop - window.innerHeight / 1.3;
    let Y_TITLE2 = compoh1.offsetTop - window.innerHeight / 1.5;
    let Y_TITLE3 = compoh1.offsetTop - window.innerHeight / 1.7;
    let Y_TITLE4 = compoh1.offsetTop - window.innerHeight / 1.9;

    let Y_IDEE = idee.offsetTop - window.innerHeight + 60;

    const APP_TIME = 1;

    projet.style.transition = "1s linear";
    talk.style.transition = "1s linear";
    contact.style.transition = "1s linear";

    const CONTACT_TIME = "1.5";

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

      stylezic1.style.opacity = "1";
      stylezic1.style.transition = APP_TIME + "s ease";
    } else if (window.scrollY < Y_TITLE1) {
      title1.style.width = "0%";
      title1.style.transition = "0.5s ease";

      stylezic1.style.opacity = "0";
      stylezic1.style.transition = "0.5s ease";
    }

    // scroll title2
    if (window.scrollY > Y_TITLE2) {
      title2.style.width = "60%";
      title2.style.transition = "0.5s ease";

      stylezic2.style.opacity = "1";
      stylezic2.style.transition = APP_TIME + "s ease";
    } else if (window.scrollY < Y_TITLE2) {
      title2.style.width = "0%";
      title2.style.transition = "0.5s ease";

      stylezic2.style.opacity = "0";
      stylezic2.style.transition = "0.5s ease";
    }

    // scroll title3
    if (window.scrollY > Y_TITLE3) {
      title3.style.width = "60%";
      title3.style.transition = "0.5s ease";

      stylezic3.style.opacity = "1";
      stylezic3.style.transition = APP_TIME + "s ease";
    } else if (window.scrollY < Y_TITLE3) {
      title3.style.width = "0%";
      title3.style.transition = "0.5s ease";

      stylezic3.style.opacity = "0";
      stylezic3.style.transition = "0.5s ease";
    }

    // scroll title4
    if (window.scrollY > Y_TITLE4) {
      title4.style.width = "60%";
      title4.style.transition = "0.5s ease";

      stylezic4.style.opacity = "1";
      stylezic4.style.transition = APP_TIME + "s ease";
    } else if (window.scrollY < Y_TITLE4) {
      title4.style.width = "0%";
      title4.style.transition = "0.5s ease";

      stylezic4.style.opacity = "0";
      stylezic4.style.transition = "0.5s ease";
    }

    if (window.scrollY > Y_IDEE) {
      idee.style.opacity = "1";
      projet.style.transform = "translateY(7px)";
      projet.style.opacity = "1";
      talk.style.transform = "translateY(15px)";
      talk.style.opacity = "1";
      contact.style.transform = "translateY(22px)";
      contact.style.opacity = "1";
    } else if (window.scrollY < Y_IDEE) {
      idee.style.opacity = "0";
      projet.style.transform = "translateY(0px)";
      projet.style.opacity = "0";
      talk.style.transform = "translateY(0px)";
      talk.style.opacity = "0";
      contact.style.transform = "translateY(0px)";
      contact.style.opacity = "0";
    }
  });

  // -----------------------------------
  // reset the tansitions when resizing
  // -----------------------------------

  window.addEventListener(
    "resize",
    function (event) {
      devsect.style.transition = "none";
      stylezic1.style.transition = "none";
      stylezic2.style.transition = "none";
      stylezic3.style.transition = "none";
      stylezic4.style.transition = "none";
      projet.style.transition = "none";
      talk.style.transition = "none";
      contact.style.transition = "none";
    },
    true
  );
  window.onresize = ResetTransition();
  function ResetTransition() {
    devsect.style.transition = "none";
    stylezic1.style.transition = "none";
    stylezic2.style.transition = "none";
    stylezic3.style.transition = "none";
    stylezic4.style.transition = "none";
    projet.style.transition = "none";
    talk.style.transition = "none";
    contact.style.transition = "none";
  }
}

CallScroll();
