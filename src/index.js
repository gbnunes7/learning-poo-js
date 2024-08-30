import Personagem from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"

const personagemGabriel = new Personagem('Lucas',50,50,6,'Mago')
const personagemLucas = new Personagem('Gabriel',80,20,6,'Guerreiro')

const personagens = [personagemGabriel,personagemLucas]

new PersonagemView(personagens).render()

console.log(personagemGabriel.vida)