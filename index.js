function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje")


    let textoCifrado = texto
                    .replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat")

if (texto.length !=0){
    document.getElementById("resultado").value=  textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";

 } else{
    tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    window.alert("Debes ingresar un texto");
 }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje")


    let textoCifrado = texto
                    .replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u")

if (texto.length !=0){
    document.getElementById("resultado").value=  textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";

 } else{
    tituloMensaje.textContent = "Ningún mensaje fue encontrado"
    window.alert("Debes ingresar un texto");
 }
}

var textoCifrado =document.querySelector("resultado");
var botonCopiar = document.querySelector("botonCopiar");
var copiar = document.querySelector("copiar");

function bontonHandler(){
    copiar.textContent = textoCifrado.value;
    textoCifrado.value = "";

    const $content = document.getElementById("resultado");
    $btn = document.getElementById("btn");

    $btn.addEventListener("click"), e =>{
        $content.select();
        document.execCommand("copy");
    }
}