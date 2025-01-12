class Entrega {
    constructor(entregador,codigo, status) {
        this._entregador = entregador;
        this._codigo = codigo
        this._status = status;
    }

    get entregador() {
        return this._entregador;
    }

    set entregador(novoEntregador){
        this._entregador = novoEntregador;
    }
    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo){
        this._codigo = novoCodigo;
    }

    get status(){
        return this._status ;
    }

    set status(novoStatus){
        this._status = novoStatus;
    }


    atualizar(entregador, status){
        this._entregador = entregador;
        this._status = status;
    }
}

export default Entrega;