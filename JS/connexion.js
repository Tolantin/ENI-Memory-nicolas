// -------------------DECLARATION VARIABLES-------------------------

let inputPseudo = document.getElementById("pseudo")
let errorPseudo = document.getElementById("errorPseudo");

let inputMdp = document.getElementById('mdp')
let errorMdp = document.getElementById('errorMdp')

let showMdp = document.getElementById('showMdp')
let boutonConnexion = document.getElementById('boutonConnexion')
let formConnexion = document.getElementById('formConnexion')

// -------------------TEST PSEUDO-------------------------



function verifPseudo() {
    const pseudoStored = localStorage.getItem("pseudo");
    return inputPseudo.value === pseudoStored;
}


// -------------------TEST MDP-------------------------



function verifMdp() {
    const mdpStored = localStorage.getItem("mdp"); 
    return inputMdp.value === mdpStored; 
}



// Show/Hide MDP

showMdp.addEventListener('click', function () {
    if (inputMdp.type == "password") {
        inputMdp.type = "text"
        showMdp.src = "ressources/eye-opened.png"
    } else {
        inputMdp.type = "password"
        showMdp.src = "ressources/eye-closed.png"
    }
});


// -------------------TEST FORMULAIRE COMPLET-------------------------

function testInfos() {
    let pseudoOK = verifPseudo();
    let mdpOK = verifMdp();

    // Test Pseudo
    if (!pseudoOK) {
        errorPseudo.classList.add("messageError-visible");
        inputPseudo.value = "";
    } else {
        errorPseudo.classList.remove("messageError-visible");
    }


    // Test MDP
    if (!mdpOK) {
        errorMdp.classList.add("messageError-visible");
        inputMdp.value = "";
    } else {
        errorMdp.classList.remove("messageError-visible");
    }

    return pseudoOK && mdpOK;
}




// Couleur du Bouton

function backgroundBouton() {
    let formulaireValide = verifPseudo() && verifMdp()

    if (formulaireValide) {
        // Bouton vert
        boutonConnexion.classList.remove('btnRed');
        boutonConnexion.classList.add('btnGreen');
    } 
    else {
        // BoutonRouge
        boutonConnexion.classList.remove('btnGreen');
        boutonConnexion.classList.add('btnRed');
    }
}

inputPseudo.addEventListener("input", backgroundBouton);
inputMdp.addEventListener("input", backgroundBouton);


// Submit




boutonConnexion.addEventListener('click', function (event) {
    // Empêchepar défaut l'envoi du formulaire
    event.preventDefault();

    let formulaireValide = testInfos();  // on utilise ta fonction de test

    if (formulaireValide) {
        // Tous les champs sont corrects → redirection
        window.location.href = "profil.html";

        // Envoie des données si les tests sont validés
    }
})
// -------------------FIN DU CODE-------------------------








