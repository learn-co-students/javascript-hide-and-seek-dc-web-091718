const getFirstSelector = selector => {
  return document.querySelector(selector);
}

const nestedTarget = () => {
  return document.querySelector('#nested .target');
}

const deepestChild = () => {
  let element = document.getElementById('grand-node').querySelectorAll("div");
  return element[element.length - 1]
}

const increaseRankBy = n => {
  let ranked = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < ranked.length; ++i) {
      let rankedLi = ranked[i].querySelectorAll("li");
      for (let j = 0; j < rankedLi.length; ++j) {
        let value = parseInt(rankedLi[j].innerHTML);
        value += n;
        rankedLi[j].innerHTML = value.toString();
      }
  }
}
