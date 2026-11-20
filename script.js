
let quantidade = 0;

function adicionar(produto) {
    quantidade++;

    document.getElementById("carrinho").innerText =
        "Carrinho: " + quantidade + " produtos";

    alert(produto + " foi adicionado ao carrinho!");
}
