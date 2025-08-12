// Criar um novo arquivo chamado calculadora!
// Dentro deste arquivo crie a classe calculador!
// Crie os atributos numeroUm e numeroDois!
// Faça o construtor!
// Depois, faça os métodos somar, subtrair, multiplicar e dividir!
// Após isso, NO ARQUIVO  'index.ts', instancie a calculadora e chama seus metodos! 

export class calculator{
    numeroUm:number;
    numeroDois:number;

  /*  somar:string:
    subtrair:string;
    multiplicar:string;
    dividir:string;*/

    constructor(numeroUminfo:number, numeroDoisInfo:number){

        this.numeroUm = numeroUminfo;
        this.numeroDois = numeroDoisInfo;
    }
        somar():void{
            console.log('Valor soma')
            console.log(this.numeroUm + this.numeroDois);
        }
        subtrair():void{
            console.log('Valor subtraido')
            console.log(this.numeroUm - this.numeroDois)
        }
        multiplicar():void{
            console.log("Valor multiplicado")
            console.log(this.numeroUm * this.numeroDois)
        }
        dividir():void{
            console.log('Valor dividido')
            console.log(this.numeroUm / this.numeroDois)
        }
}

