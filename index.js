function getFirstSelector(selector){
return document.querySelector(selector)}

function nestedTarget(){
return document.querySelector('#nested .target')}


function increaseRankBy(n) {
    let ranked = document.querySelectorAll('.ranked-list')
    for (let i = 0, l = ranked.length; i < l; i++) {

        let child = ranked[i].children

        for (let o = 0, p = child.length; o < p; o++) {
            child[o].innerHTML = parseInt(child[o].innerHTML) + n
        }
    }
}


function deepestChild() {
    let grand = document.querySelectorAll('#grand-node div');
    let deepest = grand[grand.length-1];
    return deepest;}