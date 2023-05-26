const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
let muneco = document.getElementById("muneco");
let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let mensajeEncriptado = document.getElementById("mensaje-encriptado");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){//Botón para encriptar texto
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    if (muneco) {
        muneco.remove();
    }
    mensaje.style.backgroundImage = "none";
    if(mensajeEncriptado){
        mensajeEncriptado.remove();
    }
}

function btnDesencriptar(){//Botón para desencriptar texto
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarTexto() {
    var mensajeTextarea = document.querySelector(".mensaje");
    var texto = mensajeTextarea.value;

    navigator.clipboard.writeText(texto)
      .then(function() {
        alert("Texto copiado al portapapeles");
    })
    .catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });
}