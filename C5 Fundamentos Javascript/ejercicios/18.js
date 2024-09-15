function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  const vocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return letra.length !== 1 || vocals.includes(letra) !== true ? "Dato incorrecto" : "Es vocal";
  
  /* 
  if(letra.length != 1) {
    return "Dato incorrecto";
  } else if(vocals.includes(letra)) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
}
*/
}

module.exports = esVocal;
