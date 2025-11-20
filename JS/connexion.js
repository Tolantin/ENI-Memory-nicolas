// -------------------TEST PSEUDO-------------------------

let inputPseudo = document.getElementById("pseudo")
let errorPseudo = document.getElementById("errorPseudo");

function verifPseudo() {
    const pseudoStored = localStorage.getItem("pseudo");
    return inputPseudo.value === pseudoStored;
}


// -------------------TEST MDP-------------------------

let inputMdp = document.getElementById('mdp')
let errorMdp = document.getElementById('errorMdp')

function verifMdp() {
    const mdpStoded = localStorage.getItem("mdp");
    return inputMdp.value === mdpStored;
}


// Show/Hide MDP
let showMdp = document.getElementById('showMdp')
showMdp.addEventListener('click', function () {
    if (inputMdp.type === "password") {
        inputMdp.type = "text"
        showMdp.src = "ressources/eye-opened.png"
    } else {
        inputMdp.type = "password"
        showMdp.src = "ressources/eye-closed.png"
    }
});


// -------------------TEST FORMULAIRE COMPLET-------------------------

function testInfos(){
    let pseudoOK = verifPseudo();
    let mdpOK = verifMdp();

    if(!pseudoOK){
        errorPseudo.classList.add("messageError-visible");
        inputPseudo=""
    }else {
        // pseudo correct → on masque l'erreur si elle était affichée
        errorPseudo.classList.remove("messageError-visible");
    }

    if (!mdpOK) {
        errorMdp.classList.add("messageError-visible");
        inputMdp.value = "";
    } else {
        errorMdp.classList.remove("messageError-visible");
    }

    return pseudoOK && mdpOK;
}







function backgroundBouton() {
    let formulaireValide = verifPseudo() && verifMdp()
    if (formulaireValide) {
        // formulaire OK → bouton "vert"
        boutonConnexion.classList.remove('btnRed');
        boutonConnexion.classList.add('btnGreen');
    } else {
        // formulaire pas OK → bouton "rouge"
        boutonConnexion.classList.remove('btnGreen');
        boutonConnexion.classList.add('btnRed');
    }
}



// Submit

let boutonConnexion = document.getElementById('boutonConnexion')
let formConnexion = document.getElementById('formConnexion')


boutonConnexion.addEventListener('click', function (event) {
    // Empêchepar défaut l'envoi du formulaire
    event.preventDefault();

    // Envoie des données si les tests sont validés
   
})
// -------------------FIN CODE-------------------------








