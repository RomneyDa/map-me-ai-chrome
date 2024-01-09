declare let htmlToText

const ai_prompt = "Given the following text, deduce if there is a comprehensible list of mappable locations with in it. If there isn't, let me know. If there is, provide the list with one line per item. Try to ignore extraneous information as this text is scraped from a web page and could contain recommended articles, footers, headers, etc. Here is the text:"

console.log("RUNNING CONTENT SCRIPT")
const body = document.querySelector('body');
const text = htmlToText.convert(body.innerHTML, {
  wordwrap: null,
  selectors: [
    {
      selector: 'a', options: {
        ignoreHref: true,
        hideLinkHrefIfSameAsText: true
      }
    },
    { selector: 'img', format: 'skip' },
    { selector: 'header', format: 'skip' },
    { selector: 'footer', format: 'skip' }
  ]
})
console.log(text)
console.log("FINISHED 2")

// (async () => {
//   console.log("RUNNING CONTENT SCRIPT")
//   const body = document.querySelector('body');
//   const htmlParser = await import('../modules/html-to-text.js')
//   const text = htmlParser.convert(body.innerHTML, {
//     wordwrap: 130
//   })
//   console.log(text)
//   console.log("FINISHED")
// })();

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
// function isShown(el) {
//   const style = window.getComputedStyle(el);
//   return style.display !== 'none' && style.visibility !== 'hidden'
// }

