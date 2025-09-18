export default class Imc {
    constructor(nom, poid, taille){
        this.nom = nom;
        this.poid = poid;
        this.taille = taille;
    }
    calculImc(){
        return (this.poid / (this.taille ** 2) * 100 )/ 100
    }
    display(){
        console.log("coucou");
        console.log(`${this.nom} pèse ${this.poid} kg, mesure  ${this.taille} cm et donc son IMC est de ${this.calculImc()} `)
    }
}

