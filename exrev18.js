//Criar um programa para verificar se uma pessoa tem menos de 12 anos é "Criança", se tem entre 13 e 17 anos é "Adolescente" e se tem 18 anos ou mais é "Adulto".
let idade = 16;
if (idade < 12) {
    console.log("A pessoa é uma criança.");
} else if (idade >= 13 && idade <= 17) {
    console.log("A pessoa é um adolescente.");
} else {
    console.log("A pessoa é um adulto.");
}