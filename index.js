function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list li')
  return Array.from(list).forEach( function(listElement) {
  listElement.innerHTML = parseInt(listElement.innerHTML) + parseInt(n)
  return listElement.innerHTML
  })
}

// function increaseRankBy(n) {
//   let list = document.querySelectorAll('.ranked-list li')
//   return list.forEach( function(listElement) {
//     return listElement.innerHTML += n
//   })
// }
