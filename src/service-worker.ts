chrome.action.onClicked.addListener((tab) => {
    // chrome.action.setTitle({ tabId: tab.id, title: `You are on tab: ${tab.id}` });
    console.log("MapThisChrome: Clicked")
});

// Badge
// chrome.action.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
// chrome.action.setBadgeText({text: 'M'});

// Unused
// chrome.action.setIcon() // programatically set icon
// chrome.action.setTitle() // programatically set title/tooltip (same as action default_title in manifest.json)


