document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const name = data.get("name");
  const email = data.get("email");
  const phone = data.get("phone") || "Non renseigné";
  const jewelry = data.get("jewelry");
  const message = data.get("message");

  // REMPLACER l'adresse ci-dessous par votre vraie adresse email.
  const destination = "VOTREEMAIL@EXEMPLE.COM";
  const subject = encodeURIComponent("Demande de devis — " + jewelry + " — " + name);
  const body = encodeURIComponent(
    "Bonjour NF Gold & Luxury Jewelry,\n\n" +
    "Nom : " + name + "\n" +
    "Email : " + email + "\n" +
    "Téléphone / WhatsApp : " + phone + "\n" +
    "Type de bijou : " + jewelry + "\n\n" +
    "Projet :\n" + message + "\n\nMerci."
  );
  window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
});
