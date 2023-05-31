function encriptarTexto() {
    var textoAEncriptar = document.getElementById("textobase").value;

    var arreglo = textoAEncriptar.split('');
    var textoEncriptadoFinal = "";
    var i = 0;
    while (i < textoAEncriptar.length) {
        if (arreglo[i] == "e") {
            textoEncriptadoFinal = textoEncriptadoFinal + "enter"
        }
        else if (arreglo[i] == "i") {
            textoEncriptadoFinal = textoEncriptadoFinal + "imes"
        }
        else if (arreglo[i] == "a") {
            textoEncriptadoFinal = textoEncriptadoFinal + "ai"
        }
        else if (arreglo[i] == "o") {
            textoEncriptadoFinal = textoEncriptadoFinal + "ober"
        }
        else if (arreglo[i] == "u") {
            textoEncriptadoFinal = textoEncriptadoFinal + "ufat"
        }
        else {
            textoEncriptadoFinal = textoEncriptadoFinal + arreglo[i]
        }

        i++;
    }

    document.getElementById("textosalida").value = textoEncriptadoFinal;
}

function desencriptarTexto() {
    var textoAEncriptar = document.getElementById("textobase").value;
    var textoEncriptadoFinal = "";
    var i = 0;

    const correction = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    textoEncriptadoFinal = textoAEncriptar.replace(/enter|imes|ai|ober|ufat/g, matched => correction[matched]);

    document.getElementById("textosalida").value = textoEncriptadoFinal;
}

function copytoclipboard()
{
    let textoCopiar = document.getElementById("textosalida"); //se obtine el id del elemento
    textoCopiar.select(); //selecciona todo el texto en un elemento
    document.execCommand("copy"); //usamos el metodo copiar 
    window.getSelection().removeAllRanges(); //se deselecciona el elemento
    alert("Copiado al portapapeles");
    document.getElementById("textosalida").value="";
}

 