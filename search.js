const RMVP = {
  html: document.getElementsByTagName('html')[0],

  // Hide the whole page on initialization
  init: function() {
    RMVP.html.style.visibility = 'hidden';
  },

  /**
   * Check if current pathname is belong to homepage
   * @return Boolean
   */
  isHomepage: function() {
    return window.location.pathname === '/' || window.location.pathname.indexOf('webhp') === 1;
  },

  // Hide and show other element of the page once DOM contents are loaded
  onLoad: function() {
    // Hide the buttons, suggestion links and footer
    document.getElementsByClassName('jsb')[0].style.display = 'none';
    document.getElementById('prm-pt').style.display = 'none';
    document.getElementById('footer').style.display = 'none';

    // Show the whole page
    RMVP.html.style.visibility = 'visible';
  }
};

if (RMVP.isHomepage()) {
  RMVP.init();

  document.addEventListener('DOMContentLoaded', RMVP.onLoad, false);
}
