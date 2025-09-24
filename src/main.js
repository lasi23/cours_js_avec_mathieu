import './style.css'
import CompteBanquaire from './compteBanquaire.js';

// let alex = new CompteBanquaire("alex", 0);
// let marco = new CompteBanquaire("Marco", 0);
// let clovis = new CompteBanquaire("clovis", 0);

// const listeClients = [alex, marco, clovis];

// alex.credit(1000);
// marco.credit(1000);
// clovis.credit(1000);

// alex.retrait(100);
// marco.virement(300, clovis);

// try{
//   alex.virement(2000);
// }catch(err){
//   alert(err.message);
// }

// alex.consultation();
// marco.consultation();
// clovis.consultation();


// // alex.virement(2000, "fabrice");


// -------------------CREATION D UN COMPTE------------------------

const create = document.getElementById("btn_create");

const nomCompte = document.getElementById("nom");

const message = document.querySelector("#message");


let compteTab = [];

create.addEventListener("click", ()=> {
  const enregistreNomCompte = nomCompte.value;
  try{
    if(nomCompte.value === ""){
      throw new Error("Veuillez remplir le champ")
    }
    compteTab.push(new CompteBanquaire(enregistreNomCompte));
    console.log(compteTab);
  }catch (error){
    message.value = error.message;
    console.log(message.textContent);
  }
});


// --------------------------CREDITER UN COMPTE--------------

const compte = document.getElementById("compte");
const montant = document.getElementById("montant");

const crediter = document.getElementById("crediter");
const retirer = document.getElementById("retirer");

crediter.addEventListener("click", ()=> {
  console.log("click crediter ok")
  for(let i = 0; i < compteTab.length; i++){
    if(compte.value == compteTab[i].nom){
      console.log("nom de compte ok");
      compteTab[i].solde += Number(montant.value);
      console.log(compteTab[i]);
      console.log(montant.value);
    }
  }
  return
})

// ------------------------------RETIRER-----------------------

retirer.addEventListener("click", ()=> {
  console.log("click retirer ok")
  for(let i = 0; i < compteTab.length; i++){
    if(compte.value == compteTab[i].nom){
      compteTab[i].solde -= Number(montant.value);
      console.log(compteTab[i]);
      console.log(montant.value);
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

