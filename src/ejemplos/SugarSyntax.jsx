function cuadrado (num){
    return num * num
}
console.log(cuadrado(5))

//sugar

const cuadrado = (num) => {
    return num * num
}

const cuadrado = num => num * num

//destructuring

// const usuario ={
//     nombre:'Laura',
//     edad:37
// }

// const nombre = usuario.nombre
// const edad = usuario.edad

//sugar

// const {nombre, edad} = usuario

// console.log(nombre, edad)

const colores = ['rojo', 'azul', 'violeta']

// const primero = colores[0]
// const segundo = colores[1]
// const tercero = colores[2]

const [primero, segundo, tercero]=colores

//operador ternario

// const edad = 18
// let mensaje;

// if(edad >= 18){
//     mensaje = "Sos mayor de edad"
// }else{
//     mensaje = "Sos menor de edad"
// }

//sugar

const mensaje = edad >=18 ? "Sos mayor de edad" : "Sos menor de edad"


//Spread Operator (...)

 const numeros = [1,2,3]
// const nuevosNumeros = numeros.slice()

// nuevosNumeros.push(4)
// [1,2,3,4]

//sugar
const nuevosNumeros = [...numeros, 4]


const usuario ={
    nombre:'Laura',
    edad:37
}

const nuevoData = {...usuario, mail:'lala@lala.com'}


//Optional Chaining (?.)

const user = {
    perfil:{
        nombre:'Lau'
    }
}

console.log(user.perfil.nombre)
console.log(user.perfil ? user.perfil.nombre : "No disponible")

//sugar
console.log(user?.perfil?.nombre)