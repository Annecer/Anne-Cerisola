// Menu mobile : ouvre / ferme la liste de navigation
document.addEventListener('click', function (e) {
  var toggle = e.target.closest('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (toggle && links) {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  } else if (links && links.classList.contains('open') && !e.target.closest('.nav')) {
    links.classList.remove('open');
  }
});
