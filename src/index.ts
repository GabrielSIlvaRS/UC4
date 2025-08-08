function alunoI(nomeAlunos:string, IdadeAlunos:number, matriculado:boolean):void{
    console.log(`Aluno ${nomeAlunos}. Idade ${IdadeAlunos}, está matriculado? ${matriculado}`)
}
alunoI(`Gabriel`, 22, true);

let alunos:string[] = ['Ana', 'Gabriel', 'Giovanni', 'Rodolfo', 'Pato']
function listaAlunos(alunos:string[]):string{
    let lista:string = 'Alunos';
    for(let i = 0; i < lista.length; i++){
        lista += `\n ${alunos[i]}`
    }
    return lista
}
console.log(listaAlunos(alunos));

function saudacao(nome:string):void{
    console.log(`Olá, ${nome}. Seja Bem-vindo á turma.`);
}
saudacao("Gabriel");

function calcualar(nota1:number, nota2:number , nota3:number):number{
    return (nota1 + nota2 + nota3) / 3;
}
console.log(`Nota final ${calcualar(10, 10, 10)}`);