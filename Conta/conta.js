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