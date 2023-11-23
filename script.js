
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", clq2);

function clq2(){
    alert("Você clicou no Botão 2")
}

let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

//SOMA
let btSoma = document.querySelector("#btSoma")
btSoma.addEventListener("click", function(){
    soma(Number(valor1.value), Number(valor2.value));
})

function soma(a, b){
    resultado.textContent = (a + b)
}

//SUBTRAÇÃO
let btSubtracao = document.querySelector("#btSubtracao")
btSubtracao.addEventListener("click", function(){
    subtracao(Number(valor1.value), Number(valor2.value));
})

function subtracao(a, b){
    resultado.textContent = (a - b)
}

//MULTIPLICAÇÃO
let btMultiplicacao = document.querySelector("#btMultiplicacao")
btMultiplicacao.addEventListener("click", function(){
    multiplicacao(Number(valor1.value), Number(valor2.value));
})

function multiplicacao(a, b){
    resultado.textContent = (a * b)
}

//DIVSÃO
let btDivisao = document.querySelector("#btDivisao")
btDivisao.addEventListener("click", function(){
    divisao(Number(valor1.value), Number(valor2.value));
})

function divisao(a, b){
    resultado.textContent = (a / b)
}

//IDIOMA
let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function(){
    if(this.value == "br"){
        btSoma.value = "Somar";
        btSubtracao.value = "Subtração";
        btMultiplicacao.value = "Multiplicação";
        btDivisao.value = "Divisão";
    }
    else if(this.value == "en"){
        btSoma.value = "Sum";
        btSubtracao.value = "Subtraction";
        btMultiplicacao.value = "Multiplication";
        btDivisao.value = "Division";
    }
    else if(this.value == "fr"){
        btSoma.value = "Somme";
        btSubtracao.value = "Soustraction";
        btMultiplicacao.value = "Multiplication";
        btDivisao.value = "Division";
    }
    else if(this.value == "es"){
        btSoma.value = "Suma";
        btSubtracao.value = "Sustracción";
        btMultiplicacao.value = "Multiplicación";
        btDivisao.value = "División";
    }
})