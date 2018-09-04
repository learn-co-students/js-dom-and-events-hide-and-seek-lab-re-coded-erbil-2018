function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(nested,target){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  let num = document.querySelectorAll('.ranked-list');
  for(let i = 0; i< num.length; i++){
    let subNum = num[i].children;
    for(let q = 0; q< subNum.length; q++){
      subNum[q].innerHTML = parseInt(subNum[q].innerHTML) + n;
     }
  }
}
 function deepestChild() {
  let num = document.getElementById('grand-node');
  let nextnum = num.children[0];
  while (nextnum) {
    num = nextnum;
    nextnum = num.children[0];
  }

  return num;
}