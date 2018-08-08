function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested').querySelector('.target');
}


function deepestChild () {
  let deepestChildElement = document.getElementById('grand-node');
  let nextChild = deepestChildElement.children[0];
  for(;nextChild;){
  deepestChildElement = nextChild;
  nextChild = nextChild.children[0];
  }
  
  return deepestChildElement;
}



function increaseRankBy(n) {
  let parent = document.querySelectorAll('.ranked-list');
  for(let i = 0; i< parent.length; i++){
    let child = parent[i].children;
    for(let j = 0; j< child.length; j++){
      child[j].innerHTML = parseInt(child[j].innerHTML) + n;
     }
  }
}