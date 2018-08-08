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
    for(const li of incRank[i].getElementsByTagName('li'))
    {
      console.log(li);
      li.innerHTML = parseInt(li.innerHTML) + n;
    }
  }
}
function deepestChild(){
  var allDivs = document.querySelector('#grand-node');
  allDivs = allDivs.getElementsByTagName('div');
   let lastChild = allDivs[allDivs.length-1];
  return lastChild;
  }