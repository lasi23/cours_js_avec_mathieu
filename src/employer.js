export default class Employee {

    // ------------constructor
    constructor(nom, prenom, age, salaireMensuel){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
        this.cout = calculCout();
    }
    calculCount(){
        const NB_MOIS = 12;
        const TAXE = 90;

        return this.salaireMensuel * NB_MOIS * (1 + TAXE);
    }
}


