const RMVP = {
  html: document.getElementsByTagName('html')[0],

  init: function() {
    // Hide the whole page
    RMVP.html.style.visibility = 'hidden';
  },

  onLoad: function() {
    // Hide the buttons, suggestion links and footer
    document.getElementsByClassName('jsb')[0].style.display = 'none';
    document.getElementById('prm-pt').style.display = 'none';
    document.getElementById('footer').style.display = 'none';

    // Show the whole page
    RMVP.html.style.visibility = 'visible';
  },
};

// Hide the whole page immediately
RMVP.init();

// Hide and show other element of the page once DOM contents are loaded
document.addEventListener('DOMContentLoaded', RMVP.onLoad, false);
