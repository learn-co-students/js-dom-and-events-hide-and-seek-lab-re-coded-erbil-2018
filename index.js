function getFirstSelector(selector){
  var firstSelector =  document.querySelector(selector);
  return firstSelector;
}
function nestedTarget(){
  var nestedShit = document.getElementById('nested');
  nestedShit = nestedShit.querySelector('.target');
  return nestedShit;
}
function increaseRankBy(n){
  var incRank = document.getElementsByClassName('ranked-list');
  for(let i = 0; i < incRank.length; i++)
  {
    incRank[i].innerText = parseInt(incRank[i].innerText) + n;
  }
}
function deepestChild(){
  var allDivs = document.querySelector('#grand-node');
  allDivs = allDivs.getElementsByTagName('div');
  lastChild = allDivs[allDivs.length-1].innerHTML;
  return lastChild;
  }