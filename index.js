function getFirstSelector(selector){
  
  return document.querySelector(selectr)
}
function nestedTarget(){
  
  return document.querySelector('#nested .target')
}
 function increaseRankBy(n){
let ranking= document.querySelectorAll('.ranked-list li')
 for(let i=0;i<ranking.length;i++){
   ranking[i].innerHTML = parseInt(ranking[i].innerHTML)+n
   
 }
 }
  function deepestChild(){
    let grand = document.querySelector('div#grand-node')
    let deepest = deepest.children[0]
    for(let i=0 ; !deepest.children[i];i){
      deepest = deepest.children[0]
      return deepest;
    }
  }