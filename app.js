function botonEncriptar() {
  let mensaje = document.querySelector(".fondo");
  let recibido = document.querySelector(".entrada").value;
  let encriptado = encriptar(recibido);
  mensaje.value = encriptado;
  mensaje.style.backgroundImage = "none";
}

function botonDesencriptar() {
  let mensaje = document.querySelector(".fondo");
  let recibido = document.querySelector(".entrada").value;
  let desencriptado = desencriptar(recibido);
  mensaje.value = desencriptado;
  mensaje.style.backgroundImage = "none";
}

function botonCopiar() {
  let mensaje = document.querySelector(".fondo");
  mensaje.select();
  document.execCommand("copy")
  alert("¡copiado!")
}

function encriptar(texto) {
    texto = texto.toLowerCase();
    const localizar = {
        "a":"ai",
        "e":"enter", 
        "i":"imes", 
        "o":"ober",
        "u":"ufat"
    };
    let encriptamiento = "";
    let i=0;
    let letra;
    while(i<texto.length) {
        letra = texto[i];
        if(localizar[letra]){
            encriptamiento += localizar[letra];
        }
        else {
            encriptamiento +=letra;
        }
        i++;
    }
    return encriptamiento;
}

function desencriptar(encriptado) {
    encriptado = encriptado.toLowerCase();
    let desencriptado = '';
    let i = 0;
    while (i < encriptado.length) {
      let letra = encriptado[i];
      if (letra == 'a' && encriptado[i + 1] == 'i') {
        desencriptado += 'a';
        i += 2;
      } else if (letra == 'e' && encriptado[i + 1] == 'n' && encriptado[i + 2] == 't' && encriptado[i + 3] == 'e' && encriptado[i + 4] == 'r') {
        desencriptado += 'e';
        i += 5;
      } else if (letra == 'i' && encriptado[i + 1] == 'm' && encriptado[i + 2] == 'e' && encriptado[i + 3] == 's') {
        desencriptado += 'i';
        i += 4;
      } else if (letra == 'o' && encriptado[i + 1] == 'b' && encriptado[i + 2] == 'e' && encriptado[i + 3] == 'r') {
        desencriptado += 'o';
        i += 4;
      } else if (letra == 'u' && encriptado[i + 1] == 'f' && encriptado[i + 2] == 'a' && encriptado[i + 3] == 't') {
        desencriptado += 'u';
        i += 4;
      } else {
        desencriptado += letra;
        i++;
      }
    }
    return desencriptado;
}


