 import * as readline from 'readline-sync';
 
 // 1. if...else – Tema: Clima
const estaChovendo: boolean = false;

if (estaChovendo) {
    console.log('Está chovendo, leve guarda-chuva!');
} else {
    console.log('Está um ótimo dia para caminhar!');
}


//  2. Operador Ternário – Tema: Escola

const nota:number = 5;

const resultado = nota >= 6 ? 'Aprovado!' : 'Reprovado!'

console.log(`O aluno está ${resultado}!\n`);


//  3. switch – Tema: Animais

const animal:string = 'Cachorro';

switch (animal){
    case 'Cachorro':
        console.log('Au au');
        break;
    case 'Gato':
        console.log('Miau');
        break;
    default:
        console.log('Animal desconhecido!')
}

console.log(animal);


// 4. Menu com readline-sync – Tema: Jogo
while(true){

    console.log('--- Bem vindo! ---\n');
console.log('---> MENU PRINCIPAL <---');
console.log('1 - Jogar!');
console.log('2 - Carregar jogo!');
console.log('3 - Sair!\n');

const opcao = readline.question('Escolha uma das opções: (1) (2) (3)? ');

switch (opcao){
    case '1':
        console.log('\nOlá! Sejá bem-vindo ao jogo!\n');
        continue;
    case '2':
        console.log('\nCarregado o jogo, um momento!\n')
        continue;
    case '3':
        console.log('\nSaindo do jogo!\n')
        break;
}
break;
}
