"use strict";chrome.runtime.onInstalled.addListener(function(t){"install"===t.reason&&chrome.tabs.create({url:"pages/getting-started/getting-started.html"})});