// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSelectedText") {
    const selection = window.getSelection().toString();
    sendResponse({ selectedText: selection });
  }
  return true; // Required for async response
});

// You can also add a context menu option
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "readSelectedText",
    title: "Read selected text",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "readSelectedText" && info.selectionText) {
    chrome.runtime.sendMessage({
      action: "speakText",
      text: info.selectionText
    });
  }
});