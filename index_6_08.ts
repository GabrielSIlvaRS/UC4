 
const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];

for (let i = 0; i < sociedade.length; i++) {
  if (
    sociedade[i] === 'Frodo' ||
    sociedade[i] === 'Sam' ||
    sociedade[i] === 'Merry' ||
    sociedade[i] === 'Pippin'
  ) {
    console.log(`Hobbit encontrado: ${sociedade[i]}\n`);
  }
}

type personagens ={
  nome:string;
  jedi:boolean;
}

const personagens = [
  { nome: 'Luke Skywalker', jedi: true },
  { nome: 'Leia Organa', jedi: false },
  { nome: 'Yoda', jedi: true },
  { nome: 'Darth Vader', jedi: false },
];

for(const personagem of personagens){
    if(personagem.jedi === true){
      console.log(`${personagem.nome}: é Jedi.\n`)
    }else{
      console.log(`${personagem.nome}: não é jedi.\n`)
    }
}

const personagensn = {
  Naruto: 'Uzumaki',
  Sasuke: 'Uchiha',
  Sakura: 'Haruno',
  Kakashi: 'Hatake'
};

for (const personagem in personagensn) {
  console.log(`${personagem} pertence ao clã ${personagensn[personagem as keyof typeof personagensn]}\n`);
}

const personagensg = [
  { nome: 'Goku', poder: 15000 },
  { nome: 'Vegeta', poder: 14999 },
  { nome: 'Krillin', poder: 7500 },
  { nome: 'Freeza', poder: 20000 },
];

personagensg.forEach((personagem, i) =>{
  if(personagem.poder >= 8000){
    console.log(`O poder de ${personagem.nome} é mais de 8000\n`);
  }
});


let pokemons:string[] = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let contador = 0;

while(contador < pokemons.length){
  if(pokemons[contador] === 'Mewtwo'){
    console.log(`Pokemo raro capturado ${pokemons[contador]}`)
  }else{
    console.log(`Pokemo capturado ${pokemons[contador]}`)
  }
  contador++
}


let passos = 0;
const passosParaMordor = 5;

do{
  if(passos === passosParaMordor){
    console.log(`Passos dados ${passos}. Parabéns, você chegou a Mordor`);
  }else{
    console.log(`Passos dados ${passos}`)
  }
  passos++
}while(passos < 6)