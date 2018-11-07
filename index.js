const getFirstSelector = function(selector){
  return document.querySelector(selector);
}

const nestedTarget = function(){
  return document.querySelector('#nested .target');
}

const increaseRankBy = function(n) {
  const rankedList = document.querySelectorAll('.ranked-list li')

  return Array.from(rankedList).forEach(function(listEl){
    listEl.innerHTML = parseInt(listEl.innerHTML) + parseInt(n);
    return listEl.innerHTML;
  })
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
