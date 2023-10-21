

// // STORAGE
// chrome.storage.local.set({key: value}, () => {
//     console.log('Value is set to ' + value);
// })
// chrome.storage.local.get(['key'], (result) => {
//     console.log('Value currently is ' + result.key);
// })
// chrome.storage.sync.set({ key: value }).then(() => {
//     console.log("Value is set");
// });
// chrome.storage.sync.get(["key"]).then((result) => {
// console.log("Value currently is " + result.key);
// });
// chrome.storage.session.set({ key: value }).then(() => {
// console.log("Value was set");
// });
// chrome.storage.session.get(["key"]).then((result) => {
// console.log("Value currently is " + result.key);
// });

// // Storage listener
// chrome.storage.onChanged.addListener((changes, area) => {
//     for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
//       console.log(
//         `Storage key "${key}" in namespace "${area}" changed.`,
//         `Old value was "${oldValue}", new value is "${newValue}".`
//       );
//     }
//   });