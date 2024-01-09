/**
 * Could do a lot of work on this to prevent calls from sites that make no sense
 * Probably best if done from content script that can make decisions based on the page
 * @param url 
 * @returns
 */
const canMapUrl = (url: string) => {
    if (!url.startsWith('http')) return false
    if (url.includes('mapthis.ai')) return false
    if (url.includes('google.com')) return false
    return true
}

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: `https://mapthis.ai/?url=${encodeURIComponent(tab.url)}` })
})

chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
    if (changeInfo.status === 'loading') return
    if (!tabId || !tab?.url) return
    if (canMapUrl(tab.url)) {
        chrome.action.enable(tabId)
        chrome.action.setTitle({ title: "Map this" })
    } else {
        chrome.action.disable(tabId)
        chrome.action.setTitle({ title: "Can't map this page" })
    }
})