import Vehicule from './vehicule.js';


const voiture = new Vehicule("Mercedes CLK", 4, 250);
const moto = new Vehicule("Honda CBR ", 2, 280);

console.log(`${voiture.nomVehicule} est une ${voiture.detect()}`); 
console.log(`${moto.nomVehicule} est une ${moto.detect()}`); 


voiture.boost();

console.log(`${voiture.nomVehicule} a une nouvelle vitesse de ${voiture.vitesse}`);