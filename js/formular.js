// Die Formulare senden noch nichts. Beim Klick auf „Senden“ steht dort nur, dass das Formular bald verfügbar ist.
document.querySelectorAll('form[data-bald]').forEach(function (form) {
  var meldung = form.querySelector('.meldung');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    meldung.hidden = false;
  });
});
