// A classe funciona como um molde para um tipo de dado
// Export permite que importemos depois esta classe em qual qualquer lugar do meu projeto
// A palavra 'class' indica que iso é uma classe
export class Cachorro{
    //Atributos, coisas que o objeto desta classe tem!
    nome:string;
    raca:string;
    idade:number;
    //Construtor da classe (função/metodo que é chamado automaticamente quando crio um objeto apartir dessa classe) é nele que eu defino os valores que esse objeto vai ter para esse atributo
    constructor(nomeCachorro:string, racaCachorro:string, IdadeCachorro:number){
        // O atributo nome dessa classe vai receber um valor que o usuario digitar
        this.nome = nomeCachorro;
        this.raca = racaCachorro;
        this.idade = IdadeCachorro;

    }
    //Metodos (coisas que objeto dessa classe fazem)
    // Não usamos a palavra funtion

    lati():void{
        console.log(`P cachorro de nome ${this.nome} esta latindo!`)
    }
    corre():void{
        console.log(`O cachorro de raça ${this.raca} esta correndo!`)
    }
}