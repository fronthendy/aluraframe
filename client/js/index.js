class Codigo{
    constructor(texto){
        if(!this._valida(texto)) throw new Error(`O texto ${texto} não é válido`);
        this._codigo = texto;
    }

    _valida(texto) {
        return /\D{3}-\D{2}-\d{2}/.test(texto);
    }

    get codigo(){
        return this._codigo;
    }
}