const RMVP = {
  /**
   * Check if current pathname is belong to homepage
   * @return Boolean
   */
  isHomepage: () =>
    window.location.pathname === '/' || window.location.pathname.indexOf('webhp') === 1,


  /**
   * Transform search value into URL format
   * @param  String value Search field
   * @return String
   */
  toUrl: (value) => {
    if (value.indexOf('//') === -1) {
      value = `//${value}`;
    }

    return value;
  },

  /**
   * Check if value is URL
   * @param  String value Search field
   * @return Boolean
   */
  isUrl: (value) => {
    const matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

    return matcher.test(value);
  },

  /**
   * Attach events once DOM contents are loaded
   * @return Boolean
   */
  onLoad: () => {
    RMVP.html = document.getElementsByTagName('html')[0];
    RMVP.search = document.getElementById('lst-ib');

    console.log('RMVP loaded');

    function keyEvent(e) {
      const key = e.which || e.keyCode;

      if (key === 13) {
        const searchValue = RMVP.toUrl(RMVP.search.value);

        if (RMVP.isUrl(searchValue)) {
          console.log('RMVP redirect');

          RMVP.html.style.display = 'none';
          window.location = searchValue;

          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          return false;
        }
      }

      return true;
    }

    RMVP.search.addEventListener('keyup', keyEvent);
  },
};

if (RMVP.isHomepage()) {
  document.addEventListener('DOMContentLoaded', RMVP.onLoad, false);
}
