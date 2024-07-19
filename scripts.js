// Vou zerar o valor da calculadora
let resultadoFinal = "0"
function attCalculadora() {
    document.getElementById('resultado').textContent = resultadoFinal
}

// Aqui iremos anexar os valores 
function anexarResultado(value) {
    if (resultadoFinal === "0") {
        resultadoFinal = value
    } else {
        resultadoFinal += value
    }

    attCalculadora()
}

// Se não existir uma conta válida, vou mandar um Error, caso exista vou fazer a conta, e atualizar.
function calcularResultado() {
    try {
        resultadoFinal = eval(resultadoFinal).toString()
    } catch (error) {
        resultadoFinal = "Conta não existente"

    }
    attCalculadora()
}

// Botão de deletar, deleto sempre o ultimo digito.
function deletarUltimoDigito() {
    resultadoFinal = resultadoFinal.slice(0, -1)

    attCalculadora()
}

// Botão de limpar tudo, e trazer devolta o " 0 "
function limparResultado() {
    resultadoFinal = "0"

    attCalculadora()
}