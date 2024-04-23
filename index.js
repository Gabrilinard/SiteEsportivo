//Armazenar o nome e o produto do valor, após isso envia o usuário para uma página de compra

function comprar(nome, valor) {
    var produto = {
        nome: nome,
        valor: valor
    };
    localStorage.setItem('produtoSelecionado', JSON.stringify(produto));
    window.location.href = "compra2.html";
}