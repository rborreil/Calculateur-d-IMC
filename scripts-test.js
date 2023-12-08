window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculerIMC);
};

function calculerIMC(){
    let poids = parseFloat(document.querySelector("#poids").value);
    let taille = parseFloat(document.querySelector("#taille").value);
    let résultat = document.querySelector("#résultat");

    if(poids === "" || isNaN(poids)){
        résultat.innerHTML = "Veuillez s'il vous plaît saisir un poids valide";
    }else if(taille === "" || isNaN(taille)){
        résultat.innerHTML = "Veuillez s'il vous plaît saisir une taille valide";
    }else{
        let imc = (poids / taille ** 2).toFixed(2);
        if(imc > 30){
            résultat.innerHTML = `${imc} indique que vous êtes en obésité légère`;
            document.getElementById("résultat").style.color = "red";
        }else if(imc > 25){
            résultat.innerHTML = `${imc} indique que vous êtes en surpoids`;
            document.getElementById("résultat").style.color = "orange";
        }else if(imc > 18.5){
            résultat.innerHTML = `${imc} indique que vous êtes dans la norme`;
            document.getElementById("résultat").style.color = "green";
        }else{
            résultat.innerHTML = `${imc} indique que vous êtes en insuffisance`;
            document.getElementById("résultat").style.color = "red";
        }
    }
};