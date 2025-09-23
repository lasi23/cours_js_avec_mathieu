class habitation {
    constructor(largeur, longeur, nbrEtage){
        this.largeur = largeur;
        this.longeur = longeur;
        this.nbrEtage = nbrEtage;
    }
    // methode
    superficie(){
        return this.largeur * this.longeur * this.nbrEtage;
    }
}

const maison = new habitation(15,20,3);
const bigMaison = new habitation(30,30,3);
const immeuble = new habitation(80,90,30);

console.log(`l'hbitation maison a une superficie de ${maison.superficie()} m2`);
console.log(`l'hbitation bigMaison a une superficie de ${bigMaison.superficie()} m2`);
console.log(`l'hbitation immeuble a une superficie de ${immeuble.superficie()} m2`);