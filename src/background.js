chrome.runtime.onInstalled.addListener((object) => {
  if (object.reason === 'install') {
    chrome.tabs.create({ url: 'pages/getting-started/getting-started.html' });
  }
});
