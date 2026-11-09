//1
let nombre = Number(prompt("Entrez un nombre :"));

if (nombre % 2 === 0) {
    console.log("le nombre est pair");
} else {
    console.log("le nombre est impair");
}

//2
let jour = Number(prompt("entrez un nombre entre 1 et 7 :"));

switch (jour) {
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    case 7:
        console.log("Dimanche");
        break;
    default:
        console.log("Numéro invalide");
}

//3
let nm = Number(prompt("Entrez un nombre :"));

if (nm > 0) {
    console.log("Positif");
} else if (nm < 0) {
    console.log("Négatif");
} else {
    console.log("Zéro");
}