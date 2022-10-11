// Object

const person = {
    // Property, attribut
    nom: "Koto",
    prenom: "Flao",
    age: 23,

    // Methode
    getNomComplet: function(){
        return `${this.nom} ${this.prenom}`
    }
}

console.log(person, person.age, person.nom)
console.log(person.getNomComplet())

console.log(person["nom"])

// Question 1 : Nomenclature
// Question 2 : 