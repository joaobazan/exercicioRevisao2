//Criar um programa para exibir: Se a nota for maior que 9 "Excelente". Se a nota for entre 8 e 7 "Ótimo". Se a nota for entre 6 e 5 "Bom". Se a nota for entre 4 e 2 "Regular". Se a nota for menor que 1 "Ruim".
let nota = 7;
if (nota > 9) {
    console.log("Excelente");
} else if (nota >= 8 && nota <= 9) {
    console.log("Ótimo");
} else if (nota >= 6 && nota <= 7) {
    console.log("Bom");
} else if (nota >= 4 && nota <= 5) {
    console.log("Regular");
} else {
    console.log("Ruim");
}