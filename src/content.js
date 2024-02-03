chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("Content script received message:", request);
    if (request.action === "download") {
      // Handle download action in content script
      console.log("Download action in content script");
    }
  });