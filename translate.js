const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa)

const linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "idiomas/espnahol.js";
document.head.appendChild(linguaEspanhola)

const linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "idiomas/frances.js";
document.head.appendChild(linguaFrancesa)

const linguaInglesa = document.createElement("script");
linguaInglesa.src = "idiomas/ingles.js";
document.head.appendChild(linguaInglesa)

let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function (){
    translate(this.value);
} )

function translate(idiomas) {
    const traducao = 
    (idiomas == "br") ? portugues()
    : (idiomas == "es") ? espanhol()
    : (idiomas == "fr") ? frances()
    : (idiomas == "en") ? ingles()
    : null
    settLeangue(traducao)

}

   function settLeangue (traducao) {

        btSoma = document.getElementById("btSoma")
        btSubtracao = document.getElementById("btSubtracao")
        btMultiplicacao = document.getElementById("btMultiplicacao")
        btDivisao = document.getElementById("btDivisao")

        btSoma.value = traducao.btSoma;
        btSubtracao = traducao.btSubtracao;
        btDivisao.value = traducao.btDivisao;
        btMultiplicacao.value = traducao.btMultiplicacao
    }




