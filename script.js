// Shared small interactions
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 640) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var phone = (data.get('phone') || '').toString().trim();
      var msg = (data.get('message') || '').toString().trim();
      var subject = encodeURIComponent('Security inquiry from ' + (name || 'website visitor'));
      var body = encodeURIComponent(
        'Name: ' + name + '\nPhone: ' + phone + '\n\nRequest:\n' + msg
      );
      window.location.href = 'mailto:2monarchy0@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
})();
