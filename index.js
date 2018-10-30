function getFirstSelector(selector){
	return document.querySelectorAll(`${selector}`)[0]
}

function nestedTarget(){
	return document.querySelector('#nested .target')

}
function deepestChild(){
	return document.querySelector("#grand-node").querySelectorAll("div")[3]
}

function increaseRankBy(n){
let arr = document.querySelectorAll(".ranked-list")
	for (let obj of arr ){
		for (let ranked of obj.querySelectorAll("li") ){
			ranked.innerHTML = parseInt(ranked.innerHTML) + n + ""
	}
}
}