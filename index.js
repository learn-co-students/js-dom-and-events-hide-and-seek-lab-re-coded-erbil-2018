function getFirstSelector(selector)
{
  return document.querySelector(selector);
}
function nestedTarget()
{
  return document.querySelector("div#nested div.target");
}
function increaseRankBy(n)
{
  let list = document.querySelectorAll(".ranked-list li");
  for(let element of list)
  {
    element.innerHTML = parseInt(element.innerHTML)+n;
  }
}
function deepestChild()
{
  let list = document.querySelectorAll("div#grand-node div");
  
  return list[list.length-1];
}