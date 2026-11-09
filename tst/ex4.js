//1
function ajt(a, b) {
    return a + b;
}

//2
console.log("La somme est :", ajt(5, 3));

//3
function sa(nom, message = "Bonjour") {
    console.log(message + nom);
}

// 4. Appels de la fonction
sa("Alice");
sa("Bob", "Salut");

//5

const fn = (a, b) => a + b;

console.log("somme  :", fn(5, 3));

const sal = (nom, message = "Bonjour") => {
    console.log(message + nom);
};

sal("Alice");
sal("Bob", "Salut");   