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


let compteTab = [];

create.addEventListener("click", ()=> {
  const enregistreNomCompte = nomCompte.value;
  if(nomCompte.value !== ""){
    console.log("boutton créer ok");
    compteTab.push(new CompteBanquaire(enregistreNomCompte));
    console.log(compteTab);
  }else{
    alert("Champ à remplir");
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
      compteTab[i].solde += CompteBanquaire.crediter;
    }
  }
})

