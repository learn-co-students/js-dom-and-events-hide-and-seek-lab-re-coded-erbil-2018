function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(nested,target){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  var num = document.querySelectorAll('.ranked-list');
  for(let a of num){
    parseInt(a);
    a+n;
  }
}