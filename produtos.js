function salvarProduto() {
    const nome = document.getElementById('produto').value;
    const preco = document.getElementById('preco').value;
    const peso = document.getElementById('peso').value;
    const quantidade = document.getElementById('quantidade').value;
    const descricao = document.getElementById('descrição').value;

    const tabela = document.getElementById('tbody');
    const novaLinha = tabela.insertRow(-1);

    novaLinha.insertCell(0).innerHTML = tabela.rows.length - 1;
    novaLinha.insertCell(1).innerHTML = nome;
    novaLinha.insertCell(2).innerHTML = preco;
    novaLinha.insertCell(3).innerHTML = peso;
    novaLinha.insertCell(4).innerHTML = quantidade;
    novaLinha.insertCell(5).innerHTML = descricao;

    limparCampos();
}

function limparCampos() {
    const campos = ['produto', 'preco', 'peso', 'quantidade', 'descrição'];
    campos.forEach(campo => document.getElementById(campo).value = '');
}