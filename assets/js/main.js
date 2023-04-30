import {
  reglas,
  encriptar,
  desencriptar,
  validarTexto,
  copiar,
} from "./funciones.js";

// Eventos
const botonEncriptar = document.getElementById("boton-encriptar");
const botonDesencriptar = document.getElementById("boton-desencriptar");
const botonCopiar = document.getElementById("boton-copiar");

botonEncriptar.addEventListener("click", () => {
  const texto = document.getElementById("entrada").value;

  if (validarTexto(texto) && texto !== "") {
    const not_found = document.getElementById("not_found");
    not_found.classList.add("not__found--off");

    const found = document.getElementById("found");
    found.classList.add("found");

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = encriptar(texto, reglas);
    resultado.classList.remove("not__found--off");

    if (texto !== "") {
      const botonCopiar = document.getElementById("boton-copiar");
      botonCopiar.classList.remove("btn__copiar--oculto");
    } else {
      const botonCopiar = document.getElementById("boton-copiar");
      botonCopiar.classList.add("btn__copiar--oculto");
    }
  } else {
    alert(
      "El texto contiene caracteres inválidos: solo se aceptan letras minúsculas, espacios, numeros del 0-9, puntos y comas"
    );

    const not_found = document.getElementById("not_found");
    not_found.classList.remove("not__found--off");

    const resultado = document.getElementById("resultado");
    resultado.classList.add("not__found--off");

    const found = document.getElementById("found");
    found.classList.remove("found");

    const botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.classList.add("btn__copiar--oculto");
  }
});

botonDesencriptar.addEventListener("click", () => {
  const texto = document.getElementById("entrada").value;

  if (validarTexto(texto) && texto !== "") {
    const not_found = document.getElementById("not_found");
    not_found.classList.add("not__found--off");

    const found = document.getElementById("found");
    found.classList.add("found");

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = desencriptar(texto, reglas);
    resultado.classList.remove("not__found--off");

    if (texto !== "") {
      const botonCopiar = document.getElementById("boton-copiar");
      botonCopiar.classList.remove("btn__copiar--oculto");
    } else {
      const botonCopiar = document.getElementById("boton-copiar");
      botonCopiar.classList.add("btn__copiar--oculto");
    }
  } else {
    alert(
      "El texto contiene caracteres inválidos: solo se aceptan letras minúsculas, espacios, numeros del 0-9, puntos y comas"
    );

    const not_found = document.getElementById("not_found");
    not_found.classList.remove("not__found--off");

    const resultado = document.getElementById("resultado");
    resultado.classList.add("not__found--off");

    const found = document.getElementById("found");
    found.classList.remove("found");

    const botonCopiar = document.getElementById("boton-copiar");
    botonCopiar.classList.add("btn__copiar--oculto");
  }
});

botonCopiar.addEventListener("click", () => {
  const texto = document.getElementById("resultado").textContent;
  const copiado = copiar(texto);
  if (copiado) {
    alert("Texto copiado en el portapapeles");
  } else {
    alert("No hay texto para copiar");
  }
});

// Fecha
const fechaActual = document.getElementById("fechaActual");
const año = new Date().getFullYear();
fechaActual.innerHTML = año;
