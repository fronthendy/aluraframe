class NegociacoesView {

    constructor (elemento) {
        this._elementto = elemento;
    }

    _template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                ${model.negociacoes.map(item => {
                    return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(item.data)}</td>
                            <td>${item.quantidade}</td>
                            <td>${item.valor}</td>
                            <td>${item.volume}</td>
                        </tr>
                    `;
                }).join('')}
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        `;
    }

    update(model) {
        this._elementto.innerHTML = this._template(model);
    }
}