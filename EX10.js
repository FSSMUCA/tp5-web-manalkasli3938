
function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}


function sommeRecursive(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sommeRecursive(n - 1);
    }
}

console.log(sommeIterative(5)); // 15
console.log(sommeRecursive(5)); // 15
