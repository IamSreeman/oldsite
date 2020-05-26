document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function() {
  Barba.Pjax.start();

  initializeScripts();

  $(".dropdown-trigger").dropdown();
  $('.sidenav').sidenav();
});
