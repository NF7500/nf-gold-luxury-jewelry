document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const name = data.get("name");
  const email = data.get("email") || "Non renseigné";
  const phone = data.get("phone") || "Non renseigné";
  const jewelry = data.get("jewelry");
  const message = data.get("message");
  const text =
    "Bonjour NF Gold & Luxury Jewelry,\n\n" +
    "Je souhaite demander un devis.\n\n" +
    "Nom : " + name + "\n" +
    "Email : " + email + "\n" +
    "Téléphone / WhatsApp : " + phone + "\n" +
    "Type de bijou : " + jewelry + "\n\n" +
    "Projet :\n" + message;
  window.open("https://wa.me/15615379432?text=" + encodeURIComponent(text), "_blank");
});
