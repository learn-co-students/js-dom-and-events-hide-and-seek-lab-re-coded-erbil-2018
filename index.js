function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}
function deepestChild() {
  let div= document.getElementById('grand-node')
  let nextDiv = div.children[0]

  while (nextDiv) {
    div= nextDiv
    nextDiv= div.children[0]
  }

  return div
}
function increaseRankBy(x) {
  const rankedLists = document.getElementsByClassName('ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + x
    }
  }
}
