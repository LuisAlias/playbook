/*
  export default nos permite exportar esta clase e importara

  import myPokemon from './pokemon.js'
*/

export default class myPokemon {
    constructor(name) {
        this.name = name
    }

    sayHello(message) {
        console.log(`Hola yo soy un ${this.name}, ${message}`)
    }
}