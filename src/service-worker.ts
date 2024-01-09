chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: `https://mapthis.ai/?url=${encodeURIComponent(tab.url)}` })
})

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
    if (!changeInfo.url.startsWith('http')) {
        chrome.action.disable(tabId)
        chrome.action.setTitle({ title: "Can't map this page" })
    } else {
        chrome.action.enable(tabId)
        chrome.action.setTitle({ title: "Map this" })
    }
}
);

// chrome.tabs.onActivated.addListener(function (activeInfo) {
//     chrome.tabs.get(activeInfo.tabId, function (tab) {
//         if (!tab?.url?.startsWith('http')) {
//             chrome.action.disable(activeInfo.tabId)
//         } else {
//             chrome.action.enable(activeInfo.tabId)
//         }
//     })
// });