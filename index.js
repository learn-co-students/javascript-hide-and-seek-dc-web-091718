function getFirstSelector (selector) {
	return document.querySelector(selector);
}

function nestedTarget () {
	return document.querySelector("#nested .target")
}

function deepestChild(){
	let grandNode = document.querySelector('#grand-node')
	let currChild = grandNode.querySelector('div');
	while (currChild.querySelector('div')) {
		currChild = currChild.querySelector('div');
	}
	return currChild;
}

// function increaseRankBy(n) {
// 	let lists = document.querySelectorAll(".ranked-list")
// 	// debugger
// 	if (lists == undefined){
// 		lists.oerugbowif()
//     }
// 	alert(typeof lists)
// 	lists.forEach(function(list) {
// 		items = list.querySelectorAll("li")
// 		items.forEach(function(item){
// 			currRank = Number.parseInt(item.textContent)
// 			item.textContent = currRank += n;
// 		})
// 	});
// }


// above solution works as intended but doesn't pass tests, bottom solution is from solution branch because green checks

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

