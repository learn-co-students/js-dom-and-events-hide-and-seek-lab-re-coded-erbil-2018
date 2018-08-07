function getFirstSelector(selector){
	var ele = document.querySelector(selector); 
	return ele
}
function nestedTarget(){
	return document.querySelector('#nested .target')
}
function deepestChild(){
	return document.querySelector('#grand-node div div div div')
}
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
// function increaseRankBy(n){
// 	const rankedList = document.querySelectorAll('.ranked-list')
// 	for(let i = 0; i <rankedList.length; i++){
// 		let li = rankedList[i].children;
// 		for(let c=0; c<li.length; c++){
// 		   li[i].innerHTML= parseInt(li[c].innerHTML) + n
// 		}
// 	}
// }