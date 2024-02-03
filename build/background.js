// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "download") {
      // Example: Download the current tab
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs && tabs.length > 0) {
          chrome.downloads.download({ url: tabs[0].url }, function (downloadId) {
            console.log("Download initiated with ID:", downloadId);
          });
        }
      });
    }
  });