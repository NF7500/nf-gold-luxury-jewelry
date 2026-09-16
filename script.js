const langToggle = document.getElementById('langToggle');
let lang = 'en';
function setLanguage(next) {
  lang = next;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    const value = el.getAttribute(`data-${lang}`);
    if (value !== null) el.innerHTML = value.replace(/\\n/g, '<br>');
  });
  langToggle.textContent = lang === 'en' ? 'FR' : 'EN';
}
langToggle.addEventListener('click', () => setLanguage(lang === 'en' ? 'fr' : 'en'));

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const text = `NF Gold & Luxury Jewelry - Quote Request\n\nName: ${f.get('name')}\nPhone / WhatsApp: ${f.get('phone') || ''}\nJewelry: ${f.get('jewelry')}\nProject: ${f.get('message')}`;
  window.open(`https://wa.me/15615379432?text=${encodeURIComponent(text)}`, '_blank');
});
