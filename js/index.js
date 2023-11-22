/*
Luego crea la interfaz necesaria para que el usuario 
pueda crear un objeto persona, permitiendo ingresar 
las propiedades mediante un formulario, 
también agregar los botones “mostrar generación”, 
es “mayor de edad” e indicar en un alert el resultado 
de la función correspondiente.
*/



let d = document;
let myForm = d.getElementById('myForm')

class Persona {
    #generacion;
    #rasgoCaracteristico;
    constructor(nombre, edad, dni = 0, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo === 'H' ? 'Hombre' : 'Mujer';
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;


        switch (true) {
            case (this.añoNacimiento >= 1944) && (this.añoNacimiento <= 2010):
                this.#generacion = 'Generacion Z'
                this.#rasgoCaracteristico = 'Irreverencia'
                break;
            case (this.añoNacimiento >= 1981) && (this.añoNacimiento <= 1993):
                this.#generacion = 'Generacion Y "Milennials"'
                this.#rasgoCaracteristico = 'Frustracion'
                break;
            case (this.añoNacimiento >= 1969) && (this.añoNacimiento <= 1980):
                this.#generacion = 'Generacion X'
                this.#rasgoCaracteristico = 'Obsesion por el exito'
                break;
            case (this.añoNacimiento >= 1949) && (this.añoNacimiento <= 1968):
                this.#generacion = 'Baby Boom'
                this.#rasgoCaracteristico = 'Ambicion'
                break;
            case (this.añoNacimiento >= 1930) && (this.añoNacimiento <= 1948):
                this.#generacion = 'Silent Generation "Niños posguerra" '
                this.#rasgoCaracteristico = 'Austeridad'
                break;
            default:
                break;
        }
    }

    mostrarGeneracion() {
        return `El rasgo caracteristico es: ${this.#generacion} y su rasgo caracteristico es: ${this.#rasgoCaracteristico}`
    }

    esMayorDeEdad() {
        return `la persona ${this.edad >= 18 ? 'Es mayor de edad' : 'Es menor'}`
    }

    mostrarDatos() {
        return this
    }

    generaDNI() {
        if (this.dni >= 0) {
            let nuevoDni = ''

            let i = 1
            while (i <= 8) {
                nuevoDni += Math.floor(Math.random() * 10)
                i++
            }

            this.dni = nuevoDni
            return nuevoDni
        }

        return
    }
}

myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let inputNombre = d.getElementById('nombre')
    let inputEdad = d.getElementById('edad')
    let inputDni = d.getElementById('dni')
    let inputHombre = d.getElementById('Hombre')
    let inputMujer = d.getElementById('Mujer')
    let inputPeso = d.getElementById('Peso')
    let inputAltura = d.getElementById('altura')
    let inputAñoNacimiento = d.getElementById('anioNacimiento')

    let showDiv = d.getElementById('showDiv')
    let mostrarGeneracionBtn = d.getElementById('mostrarGeneracion')
    let esMayorBtn = d.getElementById('esMayor')

    let newPerson = new Persona(
        inputNombre.value,
        parseInt(inputEdad.value),
        parseInt(inputDni.value),
        inputHombre.value || inputMujer.value,
        parseFloat(inputPeso.value),
        parseFloat(inputAltura.value),
        parseInt(inputAñoNacimiento.value)
    )

    showDiv.classList.remove('showBlock')

    mostrarGeneracionBtn.addEventListener('click',(e)=>{
        alert(newPerson.mostrarGeneracion())
    })

    
    esMayorBtn.addEventListener('click',(e)=>{
        alert(newPerson.esMayorDeEdad())
    })

})