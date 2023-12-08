window.onload = () => {
    let button = document.querySelector("#btn");
    // Fonction de calcul de l'IMC
    button.addEventListener("click", calculerIMC);
};

function calculerIMC() {
    /* Récupérer la taille et le poids entrés par l'utilisateur.
    La donnée est en chaîne de caractères, 
    il faut donc ajuster le type. */
    let taille = parseFloat(document.querySelector("#taille").value);
    let poids = parseFloat(document.querySelector("#poids").value);
    let résultat = document.querySelector("#résultat");

    // Vérifier si la valeur entrée par l'utilisateur est compatible.
    if (taille === "" || isNaN(taille)) {
        résultat.innerHTML = "Veuillez s'il vous plaît entrer une taille valide en m";
    } else if (poids === "" || isNaN(poids)) {
        résultat.innerHTML = "Veuillez s'il vous plaît entrer un poids valide en Kg";
    }
    /* Si la taille ainsi que le poids sont des valeurs correctes,
         on calcule l'IMC. */
    else {
        // On veut un résultat comprenant 2 décimales.
        let imc = (poids / taille ** 2).toFixed(2);
        if (imc > 30) {
            résultat.innerHTML = `Obésité légère : ${imc}`;
            document.getElementById("résultat").style.color = "red";
        } else if (imc > 25) {
            résultat.innerHTML = `Surpoids : ${imc}`;
            document.getElementById("résultat").style.color = "orange";
        } else if (imc > 18.6) {
            résultat.innerHTML = `Normal : ${imc}`;
            document.getElementById("résultat").style.color = "green";
        } else {
            résultat.innerHTML = `Insuffisant : ${imc}`;
            document.getElementById("résultat").style.color = "red";
        }
    }
}