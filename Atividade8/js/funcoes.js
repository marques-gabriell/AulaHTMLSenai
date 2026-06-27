function soma() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Soma", primeiroNumero, segundoNumero, resultado);
}

function subtracao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Subtração", primeiroNumero, segundoNumero, resultado);
}

function multiplicacao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Multiplicação", primeiroNumero, segundoNumero, resultado);
}

function divisao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;

    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Divisão", primeiroNumero, segundoNumero, resultado);
}

function calculo() {
    let terceiroNumero = document.getElementById("terceiro-numero").value;
    let resultado;

    if(terceiroNumero < 50){
        resultado = terceiroNumero * 0.20;
    } else {
        resultado = terceiroNumero * 0.20;
        resultado = resultado + (resultado * 0.90);
    }
    

    document.getElementById("resultado_imposto").innerText = resultado;
    document.getElementById("resultado_total").innerText = resultado * terceiroNumero;

    salvarHistorico("20%", terceiroNumero, resultado);
}


function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro numero: " + num1 + ", SegundoNumero: " + num2);
    console.log("Resultado: " + resultado);
    console.log("--------------------------------------");

    let operacao = {
        funcao: nomeDaFuncao,
        numero1: num1,
        numero2: num2,
        resultado: resultado
    };

    let historicoLocal = JSON.parse(localStorage.getItem("historicoCalculos")) || [];
    historicoLocal.push(operacao);

    localStorage.setItem("historicoCalculos", JSON.stringify(historicoLocal));
}

function apagarLocalStorage(){

    let confirmaApagar = window.confirm("Você deseja apagar seu histórico?")
    
    if(confirmaApagar){
        localStorage.clear();
    }
}

/*
    Nova função de calculo de imposto de importação

    Se o produto custar menos que $50 (cinquenta dolares)
    Você vai ter que pagar o valor produto, mais 20%

    Se o produto custar mais do que $50
    Você vai ter que pagar o valor do produto +20%, depois mais 90% sobre o resultado

    Seja salvo num novo objeto, dentro do local storage, seu hitórico de coversão.

    Ex: histórico de calculos matemáticos, e histórico de conversões

 */