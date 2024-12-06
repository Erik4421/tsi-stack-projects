import { push, pop, peek, isEmpty, size, stack } from './stack.js';

const buttonPush = document.querySelector("#buttonPush");
const buttonPop = document.querySelector("#buttonPop");
const buttonPeek = document.querySelector("#buttonPeek");
const buttonSize = document.querySelector("#buttonSize");
const buttonIsEmpty = document.querySelector("#buttonIsEmpty");

buttonPush.addEventListener("click", () => pushValue());
buttonPop.addEventListener("click", () => popValue());
buttonPeek.addEventListener("click", () => peekValue());
buttonSize.addEventListener("click", () => sizeValue());
buttonIsEmpty.addEventListener("click", () => isEmptyValue());

// Push
function pushValue() {
    let valor = document.getElementById("elemento").value;
    if (valor) {
        push(valor);
        updateMeuArray();
    }
}

// Pop
function popValue() {
    pop();
    updateMeuArray();
}

// Peek
function peekValue() {
    alert(`Topo da pilha: ${peek()}`);
}

// Size
function sizeValue() {
    alert(`Tamanho da pilha: ${size()}`);
}

// IsEmpty
function isEmptyValue() {
    alert(`IsEmpty: ${isEmpty()}`);
}


function updateMeuArray() {
    document.getElementById("meuArray").innerHTML = ""
    for (const i of stack) {
        document.getElementById("meuArray").innerHTML += `<div class="valor_array p-5">${i}</div>`
    }
    
}