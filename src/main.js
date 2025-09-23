import './style.css'
import CompteBanquaire from './compteBanquaire';

const alex = new CompteBanquaire("alex", 0);
const marco = new CompteBanquaire("Marco", 0);
const clovis = new CompteBanquaire("clovis", 0);

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