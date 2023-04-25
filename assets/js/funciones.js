const reglas = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

// Funciones de encriptación, desencriptación y validación de texto
/**
 * Se obtienen las llaves y los valores del objeto reglas
 * Se declara una variable que contendrá el texto encriptado
 * Se recorre el objeto reglas para ir reemplazando las letras del texto
 * Se retorna el texto encriptado
 *
 * @param {string} texto
 * @param {object} reglas
 * @returns {string} textoEncriptado
 */
const encriptar = (texto, reglas) => {
  const keys = Object.keys(reglas);
  const values = Object.values(reglas);

  let textoEncriptado = texto;

  for (let i = 0; i < keys.length; i++) {
    textoEncriptado = textoEncriptado.replaceAll(keys[i], values[i]);
  }

  return textoEncriptado;
};

/**
 * Se obtienen las llaves y los valores de las reglas en dos arreglos distintos.
 * Se crea una variable que va a almacenar el texto desencriptado.
 * Se crea un ciclo que va a iterar por cada una de las llaves.
 * Por cada iteración del ciclo, se reemplazan todas las ocurrencias del valor en el texto por la llave.
 * Al final del ciclo, se devuelve el texto desencriptado.
 *
 * @param {string} texto
 * @param {object} reglas
 * @return {string} textoDesencriptado
 */
const desencriptar = (texto, reglas) => {
  const keys = Object.keys(reglas);
  const values = Object.values(reglas);

  let textoDesencriptado = texto;

  for (let i = 0; i < keys.length; i++) {
    textoDesencriptado = textoDesencriptado.replaceAll(values[i], keys[i]);
  }

  return textoDesencriptado;
};

/**
 * La función recibe un texto como parámetro.
 * Se crea una expresión regular que acepte caracteres de la A a la Z (mayúsculas y minúsculas), así como espacios.
 * Se crea una variable llamada regExp que es una instancia de la clase RegExp (expresión regular), en la cual se le pasa como parámetro la expresión regular que creamos en el paso 2.
 * Se retorna la función test() de la clase RegExp, la cual recibe como parámetro el texto que recibe la función validarTexto().
 * La función test() retorna true si el texto cumple con la expresión regular, y false si no cumple.
 *
 * @param {string} texto
 * @return {boolean} regExp.test(texto)
 */
const validarTexto = (texto) => {
  const regExp = /^[a-z\s.,0-9!]*$/;
  return regExp.test(texto);
};

/**
 * creamos la funcion copiar que recibe un parametro llamado texto.
 * creamos una constante llamada input y a ella le asignamos la creacion de un elemento html input.
 * al input que creamos le asignamos el valor del parametro que recibe la funcion.
 * insertamos el input al final del documento html.
 * seleccionamos el input.
 * copiamos el texto que esta en el input.
 * removemos el input del documento html.
 * mostramos un mensaje de que el texto fue copiado en el portapapeles.
 *
 * @param {string} texto
 */
const copiar = (texto) => {
  if (texto === "") {
    return false;
  } else {
    const input = document.createElement("input");
    input.value = texto;
    document.body.appendChild(input);
    input.select();
    navigator.clipboard.writeText(input.value);
    document.body.removeChild(input);

    return true;
  }
};

// Exportación de funciones
export { reglas, encriptar, desencriptar, validarTexto, copiar };
