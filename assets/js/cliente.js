class Cliente {
    constructor(nome, endereco){
        this._nome = nome;
        this._endereco = endereco;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    get endereco(){
        return this._endereco;
    }

    set endereco(novoEndereco){
        this._endereco = novoEndereco;
    }
}

export default Cliente;