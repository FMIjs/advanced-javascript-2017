'use strict';

enum Strategy {
  BFS = 1,
  Direct = 2
}

interface IToken {
  id: string|undefined,
  tag: string|undefined,
  class: string|undefined,
  strategy: Strategy
}

function test_tokenize() {
  let res:IToken[] = [];
  
  res = tokenize("div id")
  res = tokenize("div#baba.class ul li")
}

function tokenize(sel: string) : IToken[] {
  let tokstr = sel.split(/[\s]+/)
  let tokres: IToken[] = []

  for (let v of tokstr) {
    let res = v.match(/(\w+)*(#(\w+))*(\.(\w+))*/)
    let [ tag, id, cls ] = [ res[1], res[3], res[5]]

    let c: IToken = {
      tag: tag,
      id: id,
      class: cls,
      strategy: Strategy.BFS
    }

    tokres.push(c)
  }

  return tokres
}

function DFS(root: HTMLElement, matcher: Function, depth: number = 0) : HTMLElement[] {
  let eres: HTMLElement[] = []
  const nodes = Array.prototype.slice.call(root.childNodes, 0)
    .filter( (e:HTMLElement) => e.tagName !== undefined)

  const pref = Array(depth).fill('-').join('-')
  console.log(`${pref} process ${root.tagName}`)

  for (let cn of nodes) {
    if (matcher(cn)) {
      eres.push(cn) 
    } else {
      // not the most effective way maybe to concat
      eres = eres.concat(...DFS(cn, matcher, depth + 1))      
    } 
  }

  return eres
}

function select(sel: string) : HTMLElement[] {
  let tokens:IToken[] = tokenize(sel)
  let curr:HTMLElement[] = [ document.body ]

  for (let tok of tokens) {
    let ncur:HTMLElement[] = []
    console.log(curr)
    for (let elem of curr) {
      ncur.push(...DFS(elem, (el:HTMLElement):boolean =>
        (tok.id === undefined || (el.id === tok.id)) &&
        (tok.class === undefined || (el.classList.contains(tok.class))) &&
        (tok.tag === undefined || (el.tagName === tok.tag.toUpperCase()))
      ))
    }

    curr = ncur
  }

  return curr
}

for (let el of select("div li")) {
  el.setAttribute('style', 'background-color: #08a808')
}

for (let el of select("div > span")) {
  el.setAttribute('style', 'background-color: #a8a808')
}