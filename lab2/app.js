// Importações existentes
import { push, pop, peek, size, clear, stack, isEmpty } from './stack.js';

// Botão para validar a expressão
const buttonValidate = document.querySelector("#buttonValidate");
buttonValidate.addEventListener("click", () => validar());

// Função de validação da expressão
function validar() {
    const valor = document.getElementById("elemento").value;
    const isValid = isBalanced(valor);
    const validacao = document.getElementById("validacao");
    console.log(size())

    console.log(isValid)
    if (isValid) {
        validacao.textContent = "Balanceado";
    } else {
        validacao.textContent = "Não balanceado";
    }
}

// Função para verificar se a expressão está balanceada
function isBalanced(valor) {
    const abertos = "({[";
    const fechados = ")}]";
    const colchetes = {
        ")": "(",
        "}": "{",
        "]": "["

    };

    clear()
    for (let char of valor) {
        if (abertos.includes(char)) {
            push(char);
            console.log(char)

        } else if (fechados.includes(char)) {
            console.log(char)
            if (isEmpty()) {
                return false;
            }
            pop()
        }
    }

    
    return isEmpty()
}