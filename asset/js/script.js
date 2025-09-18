let bouttonCalcul = document.querySelector("#calculer");

let nomProduit = document.querySelector("#nom_produit");
let quantite = document.querySelector("#quantite");
let prixHt = document.querySelector("#prix_ht");

let resultat = document.querySelector("#resultat");




bouttonCalcul.addEventListener("click", () => {
    
    if(nomProduit.value || quantite.value, prixHt.value === ""){
        console.log("ok");
        resultat.innerText = "champs à remplir";
        return;
    }
    if(isNaN(quantite.value) || isNaN(prixHt.value)){
        resultat.innerText = "Vérifier les donnés";
    }else{
        let calcul = quantite.value * prixHt.value;
        resultat.innerText = calcul;
    }
})