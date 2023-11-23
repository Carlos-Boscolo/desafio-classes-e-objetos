class hero{
    constructor(name, age, type, attackType){
        this.name = name
        this.age = age
        this.type = type
        this.attackType = attackType

    }

    attack(){
        console.log(`O ${this.type} atacou usando ${this.attackType}`)
    }

}
let heroWarrior = new hero("Kratos", 45, "Guerreiro", "Espada")
let heroMage = new hero("Doctor Strange", 50, "Mago", "Magia")
let heroMonk = new hero("Aang", 12, "Monge", "Artes Marciais")
let heroNinja = new hero("Naruto", 16, "Ninja", "Shuriken")

heroWarrior.attack()
heroMage.attack()
heroMonk.attack()
heroNinja.attack()