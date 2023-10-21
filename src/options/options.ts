// // Where we will expose all the data we retrieve from storage.sync.
// const storageCache = { count: 0 };
// // Asynchronously retrieve data from storage.sync, then cache it.
// const initStorageCache = async () => {
//     try {
//         await chrome.storage.sync.get().then((items) => {
//             // Copy the data retrieved from storage into storageCache.
//             Object.assign(storageCache, items);
//         });
//     } catch (error) {
//         console.error("Error initializing storage cache", error);
//     }
// }


// // Saves options to chrome.storage
// const saveOptions = () => {
//     const color = document.getElementById('color').value;
//     const likesColor = document.getElementById('like').checked;


//     chrome.storage.sync.set(
//       { favoriteColor: color, likesColor: likesColor },
//       () => {
//         // Update status to let user know options were saved.
//         const status = document.getElementById('status');
//         status.textContent = 'Options saved.';
//         setTimeout(() => {
//           status.textContent = '';
//         }, 750);
//       }
//     );
//   };

//   // Restores select box and checkbox state using the preferences
//   // stored in chrome.storage.
//   const restoreOptions = () => {
//     chrome.storage.sync.get(
//       { favoriteColor: 'red', likesColor: true },
//       (items) => {
//         document.getElementById('color').value = items.favoriteColor;
//         document.getElementById('like').checked = items.likesColor;
//       }
//     );
//   };

//   document.addEventListener('DOMContentLoaded', restoreOptions);
//   document.getElementById('save').addEventListener('click', saveOptions);
const y = 2;