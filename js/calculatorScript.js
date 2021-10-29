"use strict"

let tela = "";

document.getElementById("1").addEventListener("click", function(){
    tela += "1";
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("2").addEventListener("click", function(){
    tela += "2"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("3").addEventListener("click", function(){
    tela += "3"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("4").addEventListener("click", function(){
    tela += "4"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("5").addEventListener("click", function(){
    tela += "5"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("6").addEventListener("click", function(){
    tela += "6"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("7").addEventListener("click", function(){
    tela += "7"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("8").addEventListener("click", function(){
    tela += "8"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("9").addEventListener("click", function(){
    tela += "9"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("0").addEventListener("click", function(){
    tela += "0"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("ponto").addEventListener("click", function(){
    tela += "."
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("somar").addEventListener("click", function(){
    tela += "+" 
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("subtrair").addEventListener("click", function(){
    tela += "-"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("multiplicar").addEventListener("click", function(){
    tela += "*"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("dividir").addEventListener("click", function(){
    tela += "/"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("potencia").addEventListener("click", function(){
    tela += "**"
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("raiz").addEventListener("click", function(){
    tela = Math.sqrt(tela);
    document.querySelector("#tela").innerText = tela;

    if(document.querySelector("#tela").innerText == "NaN"){
        alert("OBTENHA O RESULTADO PRIMEIRO!")
    }
})

document.getElementById("arredondar").addEventListener("click", function(){
    tela = Math.round(tela);
    document.querySelector("#tela").innerText = tela;

    if(document.querySelector("#tela").innerText == "NaN"){
        alert("OBTENHA O RESULTADO PRIMEIRO!")
    }
})

document.getElementById("c").addEventListener("click", function(){
    tela = "";
    document.querySelector("#tela").innerText = tela;
})

document.getElementById("resultado").addEventListener("click", function(){
    calcular()
})

function calcular(){
    let resultado = document.getElementById("tela").innerHTML;
    if(resultado){
        document.getElementById("tela").innerHTML = eval(resultado);
    }
}