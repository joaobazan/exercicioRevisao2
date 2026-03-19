//Criar um programa para verificar se a temperatura quando menor que 15 é frio, quando entre 16 e 25 é agradável e quando maior que 26 é quente.
let temperatura = 20;
if (temperatura < 15) {
    console.log("A temperatura é fria.");
} else if (temperatura >= 16 && temperatura <= 25) {
    console.log("A temperatura é agradável.");
} else {
    console.log("A temperatura é quente.");
}