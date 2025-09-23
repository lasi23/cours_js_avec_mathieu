import './style.css'
import CompteBanquaire from './compteBanquaire';

let alex = new CompteBanquaire("alex", 0);
let marco = new CompteBanquaire("Marco", 0);
let clovis = new CompteBanquaire("clovis", 0);

const listeClients = [alex, marco, clovis];

alex.credit(1000);
marco.credit(1000);
clovis.credit(1000);

alex.retrait(100);
marco.virement(300, clovis);

try{
  alex.virement(2000);
}catch(err){
  alert(err.message);
}

alex.consultation();
marco.consultation();
clovis.consultation();


alex.virement(2000, "fabrice");