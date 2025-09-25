import * as tools from './tools.js';
import CompteBanquaire from './compteBanquaire.js';


// -------------------CREATION D UN COMPTE------------------------

const create = document.getElementById("btn_create");

const nomCompte = document.getElementById("nom");

const message = document.querySelector("#message");


const compteTab = [];

create.addEventListener("click", ()=> {
try{
    if(nomCompte.value === ""){
        throw new Error("Veuillez remplir le champ");
    }
    if(tools.isCompteBancaireExist(compteTab, nomCompte.value)){
        throw new Error(`Le compte ${nomCompte.value} existe déjà`)
    }
        compteTab.push(new CompteBanquaire(nomCompte.value));
        console.log(compteTab);
        message.textContent = `le compte ${nomCompte.value} à bien été ajouté`;
        tools.messageColorValid(message);
    }catch (error){
    message.textContent = error.message;
    tools.messageColorError(message);
    }
    tools.resetMessage(message);
    tools.clearInput();
    
});


// --------------------------CREDITER UN COMPTE--------------


const compte = document.getElementById("compte");
const montant = document.getElementById("montant");

const crediter = document.getElementById("crediter");
const retirer = document.getElementById("retirer");

crediter.addEventListener("click", ()=> {
    try {
        if(montant.value == "" || compte.value == ""){
            throw new Error(`Veuillez remplir tous les champs`)
        }
        if(isNaN(montant.value)){
            throw new Error("La valeur à créditer n'est pas une valeur numérique");
        }

        if(!tools.trouverCompteParNom(compteTab, compte)){
            throw new Error(`Le compte ${compte.value} n'existe pas`)
        }      
            
        const compte = tools.trouverCompteParNom(compte, compteOperation.value);
        compte.credit(parseFloat(montantOperation.value));
        message.innerText = `Le compte : ${compteOperation.value} à été crédité de : ${montantOperation.value} €, 
        ${compte.afficherCompte()}`;
        tools.messageColorValid(message);
        
    }catch(error){
        message.textContent = error.message;
        tools.messageColorError(message);
    }
})

// ------------------------------RETIRER-----------------------

retirer.addEventListener("click", ()=> {
    for(let i = 0; i < compteTab.length; i++){
    if(compte.value == compteTab[i].nom){

        compteTab[i].solde -= Number(montant.value);
        }
    }
})


// ----------------------VIREMENT---------------------

const source = document.getElementById("source");
const cible = document.getElementById("cible");

const montantVirement = document.getElementById("montant_virement");

const virement = document.getElementById("virement");


virement.addEventListener("click", () => {
    console.log("j'adore js quand sa marche");
    const compteSource = compteTab.find(c => c.nom === source.value);
    const compteCible = compteTab.find(c => c.nom === cible.value);

    if(compteSource && compteCible){
        console.log("les deux compte sont ok")
        compteCible.solde += Number(montantVirement.value);
        compteSource.solde -= Number(montantVirement.value);
        console.log(compteTab);
    }
})

