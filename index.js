function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector(`#nested`).getElementsByClassName('target')[0]
}

function deepestChild() {
  let grandNode = document.querySelector(`div#grand-node`)
  while (grandNode.querySelector('div') != null) {
    grandNode = grandNode.querySelector('div')
  }
    return grandNode
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}
