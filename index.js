
function getFirstSelector(selector){
  const firstElement = document.querySelector(selector);
  return firstElement;
}

function nestedTarget(){
  const targetElement = document.querySelector('#nested .target');
  return targetElement;
}

function deepestChild(){
  //think of like a step
  let step =   document.querySelector('#grand-node');
  let nextStep = step.lastElementChild;

  while (nextStep) {

    step = nextStep;
    nextStep = step.lastElementChild;
  }

  return step;
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
