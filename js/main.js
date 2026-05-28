const envelopeButton = document.querySelector(".envelope-link");
const inviteReveal = document.querySelector("#invite-reveal");

if (envelopeButton && inviteReveal) {
  envelopeButton.addEventListener("click", () => {
    const isHidden = inviteReveal.hasAttribute("hidden");

    if (isHidden) {
      inviteReveal.removeAttribute("hidden");
      envelopeButton.setAttribute("aria-expanded", "true");
    }

    inviteReveal.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
