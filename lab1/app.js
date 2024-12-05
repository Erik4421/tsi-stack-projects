import {push, pop, peek, size, isEmpty, stack  } from './stack.js'

const buttonPush = document.querySelector("#buttonPush")
const buttonPop = document.querySelector("#buttonPop")
const buttonPeek = document.querySelector("#buttonPeek")

buttonPush.addEventListener("click", ()=>pushValue())
buttonPop.addEventListener("click", ()=>popValue())
buttonPeek.addEventListener("click", ()=>peekValue())

function pushValue(){
    let valor = document.getElementById("elemento").value
    push(valor)
    console.log(stack)
}

function popValue() {
    pop()
    console.log(stack)
}

function peekValue() {
    console.log(peek)
}



