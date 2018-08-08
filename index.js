function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(val)
{
  let listItems = document.querySelectorAll('.ranked-list');
  
  for (let i=0; i<listItems.length; i++)
  {
    let childs = listItems[i].children;
  
  
  for (let j=0; j<childs.length; j++)
  {
    childs[j].innerHTML = parseInt(childs[j].innerHTML) + val;
  }
 }
}


function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
