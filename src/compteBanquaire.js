export default class CompteBanquaire{
    
    constructor (titulaire, solde){
        this.nom = titulaire;
        this.solde = solde;
    }
    
    credit(montantCredit){
        this.solde += montantCredit;
        console.log(`Àjout de ${montantCredit} à ${this.nom}`)
    }
    
    retrait(montantRetrait){
        this.solde -= montantRetrait;
        console.log(`${this.nom} vous avez retiré ${montantRetrait}`);
    }
    
    consultation(){
        console.log(`le compte banquaire de ${this.nom} est de  ${this.solde}`);
    }
    
    virement(montantVirement, beneficiaire){
        if(montantVirement > this.solde){
            throw new Error("Votre solde n'est pas suffisanr le virrement n'à pas pu être effectué");
        }else{
            beneficiaire.solde += montantVirement;
            this.solde -= montantVirement;
            console.log(`après le virement à ${beneficiaire.nom} d'un montant de ${montantVirement} votre solde est de ${this.solde}`)
            
        }
    }
}

