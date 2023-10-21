import { convert } from 'html-to-text';
// const { convert } = require('html-to-text');
const options = {
  wordwrap: 130
}

console.log("RUNNING CONTENT SCRIPT")
function isShown(el) {
  const style = window.getComputedStyle(el);
  return style.display !== 'none' && style.visibility !== 'hidden'
}

// get the body tag
const body = document.querySelector('body');
const text = convert(body.innerHTML, options);
// const allTags = body.getElementsByTagName('*');

console.log(text)

// const shownText = []
// console.log("# Tags: " + allTags.length)
// for (let i = 0; i < allTags.length; i++) {
//   const tag = allTags[i]
//   if (isShown(tag) && tag.innerHTML) {
//     console.log("HAS CHILD NODES", tag.hasChildNodes())
//     shownText.push(tag.innerHTML)
//     // console.log(tag)
//   }
// }
// console.log(shownText)
// const allShownText = shownText.join('\n')
// // console.log(allShownText)
// // console.log("HELLO")
