
export default class Pme {

    // --------constructeur
    constructor(){
        this.name = nom;
        this.equipe = equipe;
        this.vente = vente;
        this.fraisFixes = this.fraisFixes;
        this.achats = this.achats;
        this.bilan = 0;
    }

    calculBilan(){
        let coutSalaire = 0;
        for (const employer of this.equipe) {
            coutSalaire += employer.cout;
        }

        console.log(this.nomm + "cout initial : " + (this.fraisFixes + this.achats));
        console.log(this.nom + "cout Equipe : " + (coutSalaire));
        console.log("co")
    }
}