
// ---------------------------------Méthode qui vérifie si le nom du compte est existant------
export function isCompteBancaireExist(compteTab, nom){
    for(const compte of compteTab){
        if (compte.nom == nom){
            return true;
        }
    }
    return false
}


export function trouverCompteParNom(tab, nom){
    return tab.find(compte => compte.nom === nom);
}


export function resetMessage(target) {
    setTimeout(() => {
        target.textContent = "";
    }, 3000)
}

export function clearInput(){
    document.querySelectorAll('input').forEach(input =>{
        input.value= "";
    })
}

export function messageColorValid(target){
    target.classList.add("valid");
    target.classList.remove("error");
}

export function messageColorError(target){
    target.classList.add("error");
    target.classList.remove("valid");
}