export default class Personagem {
	constructor(name, vida, mana, level, tipo) {
			this.name = name
            this.vida = vida
            this.mana = mana
            this.level = level
            this.tipo = tipo
	}

    obterTitulo() {
        if(this.level >= 5) {
            return `${this.tipo} Implacável`
        } else {
            return `${this.tipo} Iniciante`
        }
    }
}
