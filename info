# sistema-ByteBank
codigo feito durante o curso do #ALURA


Conta::::
///Clase abstrata ==== serve apenas para ser herdade **nunca crie uma instancia com esse objeto
export class Conta {
    constructor(saldoInicail, cliente, agencia){

        if (this.constructor == Conta){
            throw new Error("Voce não deveria instanciar um objeto do tipo conta diretamemte, pois essa é uma classe abstrata")
        }

        this._saldo = saldoInicail;
        this._cliente = cliente;
        this._agencia = agencia;

        
    }
    
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this.cliente
    }


    get saldo() {
        return this._saldo;
    }

    sacar(valor){
       throw new Error("O metodo Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }



}

import { Conta } from "./conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia) { 
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;

    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

import { Conta } from "./conta.js"

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}

import { Conta } from "./conta.js"

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100)
    }

    sacar(valor){
        const taxa = 1.01
        return this._sacar(valor, taxa);
    }
}


Funcionarios::
import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this._bonificacao = 1.1;
    }
}
export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha; 
    }

    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }

}
import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario { 
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this._bonificacao = 2.0;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}
    
export class Cliente{
    
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;

    }

    autenticar(){
        return true;
    }
}
import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Vitor", 10000, 100000215544);
diretor.cadastrarSenha("122703");

const gerente = new Gerente("Matheus", 5000, 132165415455);
gerente.cadastrarSenha("122702")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "122702");
const cliente = new Cliente ("Lais", 1541654654, "45454");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "122703")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "45454");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);

{
  "type": "module",
  "name": "bytebank",
  "version": "1.0.0",
  "description": "Projeto do Bytebank para seus clientes",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Vitor Squina",
  "license": "ISC",
  "type": "module"
}
/* 
    Ser autenticavel significa ter o metodo autenticar 

    ducky type 
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)){
             return autenticavel.autenticar(senha); 
        }
        return false;
    }    

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && 
        autenticavel.autenticar instanceof Function;
    }
}
