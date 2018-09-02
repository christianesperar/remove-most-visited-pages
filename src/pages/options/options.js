const RMVPOptions = {
  /**
   * Attach events once DOM contents are loaded
   * @return void
   */
  onLoad: () => {
    [RMVPOptions.inputs, RMVPOptions.button] = [
      document.getElementsByClassName('options'),
      document.getElementById('save'),
    ];
    // Go directly to the website if search query is url format
    const urlRedirection = RMVPOptions.inputs[0];

    // Get options set by the user
    chrome.storage.sync.get([
      'RMVP_Options_UrlRedirection',
    ], (result) => {
      // Go directly to the website if search query is url format
      urlRedirection.checked = [undefined, true].indexOf(result.RMVP_Options_UrlRedirection) > -1;
    });

    // Update options set by the user
    RMVPOptions.button.addEventListener('click', () => {
      chrome.storage.sync.set({
        RMVP_Options_UrlRedirection: urlRedirection.checked,
      }, () => {
        // Do something
      });
    });
  },
};

document.addEventListener('DOMContentLoaded', RMVPOptions.onLoad, false);
