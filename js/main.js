const envelopeButton = document.querySelector(".envelope-link");
const openInvite = document.querySelector("#open-invite");
const inviteReveal = document.querySelector("#invite-reveal");
const revealFrame = document.querySelector(".reveal-frame");
const revealImage = document.querySelector(".reveal-image");

const inviteStates = [
  {
    src: "assets/images/ART.png",
    alt: "Ilustracion de torta rosada con iniciales A y F",
    label: "Ver invitacion formal",
  },
  {
    src: "assets/images/TEXT.png",
    alt: "Invitacion formal de Ariam y Francisco",
    label: "Volver al sobre",
  },
];

let inviteState = 0;

if (envelopeButton && openInvite && inviteReveal && revealFrame && revealImage) {
  envelopeButton.addEventListener("click", () => {
    openInvite.setAttribute("hidden", "");
    inviteReveal.removeAttribute("hidden");
    inviteState = 0;

    revealImage.src = inviteStates[inviteState].src;
    revealImage.alt = inviteStates[inviteState].alt;
    revealFrame.setAttribute("aria-label", inviteStates[inviteState].label);
    envelopeButton.setAttribute("aria-expanded", "true");

    inviteReveal.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  revealFrame.addEventListener("click", () => {
    if (inviteState === 0) {
      inviteState = 1;
      revealImage.src = inviteStates[inviteState].src;
      revealImage.alt = inviteStates[inviteState].alt;
      revealFrame.setAttribute("aria-label", inviteStates[inviteState].label);
      return;
    }

    inviteReveal.setAttribute("hidden", "");
    openInvite.removeAttribute("hidden");
    envelopeButton.setAttribute("aria-expanded", "false");
    openInvite.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
