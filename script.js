document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const data = new FormData(this);
  const name = data.get("name");
  const email = data.get("email") || "Not provided";
  const phone = data.get("phone") || "Not provided";
  const jewelry = data.get("jewelry");
  const message = data.get("message");
  const text =
    "Hello NF Gold & Luxury Jewelry,\n\n" +
    "I would like to request a quote.\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Phone / WhatsApp: " + phone + "\n" +
    "Jewelry type: " + jewelry + "\n\n" +
    "Project:\n" + message;
  window.open("https://wa.me/15615379432?text=" + encodeURIComponent(text), "_blank");
});
