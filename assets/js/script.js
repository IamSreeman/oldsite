document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

$(document).ready(function() {
  $(".dropdown-trigger").dropdown();
  Barba.Pjax.start();

  initializeScripts();

  
  $('.sidenav').sidenav();
});
