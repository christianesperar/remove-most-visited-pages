const RMVP = {
  /**
   * Check if current pathname is belong to homepage
   * @return Boolean
   */
  isHomepage: () =>
    window.location.pathname === '/' ||
    window.location.pathname.indexOf('webhp') === 1,

  /**
   * Transform search value into URL format
   * @param  String value Search field
   * @return String
   */
  toUrl: (value) => {
    if (value.indexOf('//') === -1) {
      return `//${value}`;
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
    [RMVP.html, RMVP.search] = [
      document.getElementsByTagName('html')[0],
      document.getElementById('lst-ib'),
    ];

    console.log('RMVP loaded');

    function keyEvent(e) {
      const key = e.which || e.keyCode;

      if (key === 13) {
        const searchValue = RMVP.toUrl(RMVP.search.value);

        if (RMVP.isUrl(searchValue)) {
          console.log('RMVP redirect');

          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          RMVP.html.style.display = 'none';
          window.location = searchValue;

          return false;
        }
      }

      return true;
    }

    // Get options set by the user
    chrome.storage.sync.get(['RMVP_Options_UrlRedirection'], (result) => {
      // Check if url redirection features is set
      if ([undefined, true].indexOf(result.RMVP_Options_UrlRedirection) > -1) {
        RMVP.search.addEventListener('keydown', keyEvent);
      }
    });
  },
};

if (RMVP.isHomepage()) {
  document.addEventListener('DOMContentLoaded', RMVP.onLoad, false);
}
