import { Cachorro } from "./Cachorro";

// Para podermos criar um objeto da nossa classe 'Cachorro', primeiro criamos uma variavel que deve ser do tipo Cachorro!
//Depois, atribuimos valor a esta variavel usando a palavra reservada 'new' seguida do nome da classe junto de parenteses!
const meuCachorro:Cachorro = new Cachorro('Chovisclaide', 'Pug', 30);
const meuChupiscoCachorro:Cachorro = new Cachorro('Cherlock', 'Maltes', 20);

// Para chamar os metodos desses objetos, chamamos o nome da variavel + . + nome do metodo

meuCachorro.corre();
meuCachorro.lati();
meuChupiscoCachorro.corre();
meuChupiscoCachorro.lati();

// Para acessar o valor do atributo objeto, usamos o nome da variavel + . + nome do atributo!

console.log(meuChupiscoCachorro.idade);

// Para trocar o valor do atributo de um objeto chamamos o nome da variavel + . +  nome do atributo, depois "=" e passamos outro valor
meuCachorro.nome = 'Arnold Schesneggin';
console.log(`Nome do cachorro é ${meuCachorro.nome}`);

