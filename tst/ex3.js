//1
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//2
let i = 2;

while (i <= 10) {
    console.log(i);
    i += 2;
}

//3
let nombres = [10, 20, 30, 40, 50];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//4
let recherche = Number(prompt("entrez le nombre"));
let trv = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === recherche) {
        trv = true;
        break;
    }
}

if (trv) {
    console.log("Nombre trouvé");
} else {
    console.log("Nombre non trouvé");
}