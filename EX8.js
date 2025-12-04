function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let total = parseFloat(prompt("Entrez le total HT :"));
let remise = parseFloat(prompt("Entrez la remise en % :"));

let totalFinal = totalAvecRemise(total, remise);

alert("Le total final après remise est : " + totalFinal.toFixed(2) + " €");
