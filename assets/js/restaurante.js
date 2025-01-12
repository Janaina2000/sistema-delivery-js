class Restaurante{

    constructor (nome){
        this._nome = nome;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }
}

export default Restaurante;