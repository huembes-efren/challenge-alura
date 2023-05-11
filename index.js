function encriptar() {
    let texto = document.getElementById("texto").value;
   /*let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");*/


    let textoCifrado = texto
                    .replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat")

if (document.getElementById("texto").value.length !=0) {   
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("tituloMensaje").textContent = "Texto Encriptado con exito";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("texto").value = textoCifrado;

} else{
    document.getElementById("muñeco").src = "./img/muñeco.png";
    alert("Debes Ingresar algún texto");
}
 }