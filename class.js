const persona1 = {
    nombre: "Oscar",
    apellido: "De la Hoya",
    edad: 23,
    estadoCivil: "soltero",
    cantidadCamperonatos: 20,
    nacionalidad: "mexicano"
}

const {nombre, edad, apellido: ap} = persona1;

// console.log(nombre);
// console.log(ap);

const personajes = ["nautilus", "amumu", "raisf", "cail", "tucu"]

console.log(personajes[3]);
const [ul, ol, il, ...res] = personajes;
console.log(ul, il, ol, res);

const persona2 = {
    ...persona1,
    sueldo: '23k USD'
}
console.log(persona2);
