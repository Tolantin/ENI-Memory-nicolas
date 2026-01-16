// -------------------TEST PSEUDO-------------------------

let inputPseudo = document.getElementById("pseudo")
let pseudoChecked = document.getElementById("pseudoChecked")
let errorPseudo = document.getElementById("errorPseudo");


// Quand l'utilisateur écrit (input)
inputPseudo.addEventListener('input', function () {
    let nbCaracteres = inputPseudo.value.length
    if (nbCaracteres >= 3) {
        pseudoChecked.classList.add('valided-visible');
        errorPseudo.classList.remove('messageError-visible');
    } else {
        pseudoChecked.classList.remove('valided-visible');
    }
    backgroundBouton()
})


// Quand l'utilisateur quitte l'input (blur)
inputPseudo.addEventListener('blur', function () {
    let nbCaracteres = inputPseudo.value.length;

    if (nbCaracteres < 3 && nbCaracteres > 0) {
        // afficher l'erreur
        errorPseudo.classList.add('messageError-visible');
    } else {
        // enlever l'erreur si c'est bon
        errorPseudo.classList.remove('messageError-visible');
    }
});


// -------------------TEST MDP-------------------------

let inputMdp = document.getElementById('mdp')
let mdpChecked = document.getElementById('mdpChecked')
let errorMdp = document.getElementById('errorMdp')


// Quand l'utilisateur écrit (input)
inputMdp.addEventListener('input', function verifMdp() {
    let validation = 0
    validation += verifConditions(/[a-z]/.test(inputMdp.value))
    validation += verifConditions(/[A-Z]/.test(inputMdp.value))
    validation += verifConditions(/[0-9]/.test(inputMdp.value))
    validation += verifConditions(inputMdp.value.length >= 8);

    if (validation == 4) {
        mdpChecked.classList.add("valided-visible")
        errorMdp.classList.remove("messageError-visible")
    }
    else {
        mdpChecked.classList.remove("valided-visible")
    }
    backgroundBouton()
})

function verifConditions(condition) {
    if (condition) {
        return 1
    } else {
        return 0
    };
}


// Quand l'utilisateur écrit (blur)
inputMdp.addEventListener('blur', function () {

    let validation = 0
    validation += verifConditions(/[a-z]/.test(inputMdp.value))
    validation += verifConditions(/[A-Z]/.test(inputMdp.value))
    validation += verifConditions(/[0-9]/.test(inputMdp.value))
    validation += verifConditions(inputMdp.value.length >= 8)

    if (validation !== 4 && inputMdp.value.length > 0) {
        errorMdp.classList.add('messageError-visible')
    } else {
        errorMdp.classList.remove('messageError-visible')
    }
});


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

// -------------------TEST CONFIRMATION MDP-------------------------

let inputCheckMdp = document.getElementById('checkMdp')
let verifMdpChecked = document.getElementById('verifMdpChecked')
let errorVerifMdp = document.getElementById('errorVerifMdp')

// Quand l'utilisateur écrit (input)
inputCheckMdp.addEventListener('input', function () {
    if (inputCheckMdp.value === inputMdp.value && inputCheckMdp.value.length > 0) {
        verifMdpChecked.classList.add('valided-visible')
        errorVerifMdp.classList.remove('messageError-visible')
    } else {
        verifMdpChecked.classList.remove('valided-visible')
    }
    backgroundBouton()
})

// Quand l'utilisateur quitte l'input (blur)
inputCheckMdp.addEventListener('blur', function () {
    if (inputCheckMdp.value !== inputMdp.value && inputCheckMdp.value.length > 0) {
        errorVerifMdp.classList.add('messageError-visible')
    } else {
        errorVerifMdp.classList.remove('messageError-visible')
    }
});


// Show/Hide CONFIRMATION MDP
let showMdpVerif = document.getElementById('showMdpVerif')
showMdpVerif.addEventListener('click', function () {
    if (inputCheckMdp.type === "password") {
        inputCheckMdp.type = "text"
        showMdpVerif.src = "ressources/eye-opened.png"
    } else {
        inputCheckMdp.type = "password"
        showMdpVerif.src = "ressources/eye-closed.png"
    }
});


// -------------------TEST EMAIL-------------------------

let inputEmail = document.getElementById('email')
let emailChecked = document.getElementById('emailChecked')
let errorEmail = document.getElementById('errorEmail')

// Quand l'utilisateur écrit (input)
inputEmail.addEventListener('input', function () {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailRegex.test(inputEmail.value)) {
        emailChecked.classList.add('valided-visible')
        errorEmail.classList.remove('messageError-visible')
    } else {
        emailChecked.classList.remove('valided-visible')
    }
    backgroundBouton()
})

// Quand l'utilisateur quitte l'input (blur)
inputEmail.addEventListener('blur', function () {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(inputEmail.value) && inputEmail.value.length > 0) {
        errorEmail.classList.add('messageError-visible')
    } else {
        errorEmail.classList.remove('messageError-visible')
    }
});


// -------------------TEST CONFIRMATION EMAIL-------------------------

let inputCheckEmail = document.getElementById('checkEmail')
let verifEmailChecked = document.getElementById('verifEmailChecked')
let errorVerifEmail = document.getElementById('errorVerifEmail')

// Quand l'utilisateur écrit (input)
inputCheckEmail.addEventListener('input', function () {
    if (inputCheckEmail.value === inputEmail.value && inputCheckEmail.value.length > 0) {
        verifEmailChecked.classList.add('valided-visible')
        errorVerifEmail.classList.remove('messageError-visible')
    } else {
        verifEmailChecked.classList.remove('valided-visible')
    }
    backgroundBouton()
})

// Quand l'utilisateur quitte l'input (blur)
inputCheckEmail.addEventListener('blur', function () {
    if (inputCheckEmail.value !== inputEmail.value && inputCheckEmail.value.length > 0) {
        errorVerifEmail.classList.add('messageError-visible')
    } else {
        errorVerifEmail.classList.remove('messageError-visible')
    }
});

// -------------------TEST FORMULAIRE COMPLET-------------------------

let boutonInscription = document.getElementById('boutonInscription')
let formInscription = document.getElementById('formInscription')


boutonInscription.addEventListener('click', function (event) {
    // Empêchepar défaut l'envoi du formulaire
    event.preventDefault();

    // Envoie des données si les tests sont validés
    if (pseudoChecked.classList.contains('valided-visible') &&
        mdpChecked.classList.contains('valided-visible') &&
        verifMdpChecked.classList.contains('valided-visible') &&
        emailChecked.classList.contains('valided-visible') &&
        verifEmailChecked.classList.contains('valided-visible')) {

        
        localStorage.setItem("pseudo", inputPseudo.value)
        localStorage.setItem("mdp", inputMdp.value)
        localStorage.setItem("email", inputEmail.value)

        formInscription.submit();
        window.location.href = "profil.html" // OU BIEN window.open('profil.html', '_blank')
    } else {
        alert("Veuillez remplir correctement tous les champs du formulaire.");
    }
});

function backgroundBouton() {
    let formulaireValide =
        pseudoChecked.classList.contains('valided-visible') &&
        mdpChecked.classList.contains('valided-visible') &&
        verifMdpChecked.classList.contains('valided-visible') &&
        emailChecked.classList.contains('valided-visible') &&
        verifEmailChecked.classList.contains('valided-visible');

    if (formulaireValide) {
        // formulaire OK → bouton "vert"
        boutonInscription.classList.remove('btnRed');
        boutonInscription.classList.add('btnGreen');
    } else {
        // formulaire pas OK → bouton "rouge"
        boutonInscription.classList.remove('btnGreen');
        boutonInscription.classList.add('btnRed');
    }
}

// -------------------FIN CODE-------------------------