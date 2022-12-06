function CallContact() {
  const idee = document.getElementById("idee");
  const projet = document.getElementById("projet");
  const talk = document.getElementById("letstalk");
  const contact = document.getElementById("contact");

  const SIZE_1 = "scale(1)";
  const SIZE_2 = "scale(1.1)";
  const SHADOW_1 = "rgb(219, 180, 136)";
  const SHADOW_2 = "beige";

  const DELAY = 150;

  const TRANS = "0.2s ease-out";

  idee.style.transition = TRANS;
  projet.style.transition = TRANS;
  talk.style.transition = TRANS;
  contact.style.transition = TRANS;

  function Idee() {
    idee.style.transform = SIZE_2;
    idee.style.color = SHADOW_1;
  }
  function Projet() {
    idee.style.transform = SIZE_1;
    idee.style.color = SHADOW_2;

    projet.style.transform = SIZE_2;
    projet.style.color = SHADOW_1;
  }
  function Talk() {
    projet.style.transform = SIZE_1;
    projet.style.color = SHADOW_2;

    talk.style.transform = SIZE_2;
    talk.style.color = SHADOW_1;
  }
  function Contact() {
    talk.style.transform = SIZE_1;
    talk.style.color = SHADOW_2;

    contact.style.transform = SIZE_2;
    contact.style.color = SHADOW_1;
  }
  function End() {
    contact.style.transform = SIZE_1;
    contact.style.color = SHADOW_2;
  }

  function Int() {
    setTimeout(Idee, 1000);
    setTimeout(Projet, 1000 + DELAY);
    setTimeout(Talk, 1000 + DELAY * 2);
    setTimeout(Contact, 1000 + DELAY * 3);
    setTimeout(End, 1000 + DELAY * 3.9);
  }

  window.addEventListener("load", () => {
    Int();
  });
  setInterval(Int, 5000);

  // -----------------------------------
  // reset the tansitions when resizing
  // -----------------------------------

  //   window.addEventListener(
  //     "resize",
  //     function (event) {
  //       idee.style.transition = "none";
  //       projet.style.transition = "none";
  //       talk.style.transition = "none";
  //       contact.style.transition = "none";
  //     },
  //     true
  //   );
  //   window.onresize = ResetTransition();
  //   function ResetTransition() {
  //     idee.style.transition = "none";
  //     projet.style.transition = "none";
  //     talk.style.transition = "none";
  //     contact.style.transition = "none";
  //   }
}
CallContact();
