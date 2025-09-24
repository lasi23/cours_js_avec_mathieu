
// ---------------------------------Méthode qui vérifie si le nom du compte est existant------
export function isCompteBancaireExist(compteTab, nom){
    for(const compte of compteTab){
        if (compte.nom == nom){
            return true;
        }
    }
    return false
}


export function resetMessage(target) {
    setTimeout(() => {
        target.value = "";
    }, 3000)
}

export function clearInput(){
    document.querySelectorAll('input').forEach(input =>{
        input.value= "";
    })
}