
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target")
}

function deepestChild() {
  let selector = document.getElementById("grand-node").querySelectorAll("div")
    return selector[selector.length -1]
}

// function increasedRankBy(n) {
//   let ranked = document.querySelectorAll('.ranked-list')
//   for (let i = 0, l = children.length; i < l; i++) {
//
//   }
// }
