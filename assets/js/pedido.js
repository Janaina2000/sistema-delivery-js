import Cliente from "./cliente.js";
import Entrega from "./entrega.js";
import Restaurante from "./restaurante.js";

class Pedido {

    constructor(cliente, restaurante, codigo, valor, entregador, status) {
        this._cliente = cliente;
        this._restaurante = restaurante;
        this._codigo = codigo; 
        this._valor = valor;
        this._entrega = new Entrega(entregador, codigo, status); 
    }

    get cliente() {
        return this._cliente;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        } else {
            console.error("Cliente não é uma instância da classe Cliente");
        }
    }


    get restaurante() {
        return this._restaurante;
    }

    set restaurante(restaurante) {
        if (restaurante instanceof Restaurante) {
            this._restaurante = restaurante;
        } else {
            console.error("O restaurante deve ser uma instância da classe Restaurante.");
        }
    }

    get valor() {
        return this._valor;
    }

    set valor(valor) {
        if (typeof valor === 'number' && valor > 0) {
            this._valor = valor;
        } else {
            console.error("O valor deve ser um número positivo.");
        }
    }

    get entrega() {
        return this._entrega;  
    }

    set entrega(entrega) {
        this._entrega = entrega;
    }

  

    exibirDetalhes() {
        return `Pedido nº ${this._codigo} de ${this._cliente.nome}, Restaurante: ${this._restaurante.nome}, Valor: R$ ${this._valor}, Entregador: ${this._entrega.entregador}, Status da Entrega: ${this._entrega.status}`;
    }
}

export default Pedido;
