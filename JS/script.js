let total = 0;

let produtos = [];


function adicionarPedido(nome, valor) {

    // Verifica se o produto já foi escolhido
    let produtoExiste = produtos.includes(nome);


    // Se for um produto diferente
    if (!produtoExiste) {

        // Limite de 3 tipos diferentes
        if (produtos.length >= 3) {

            alert(
                "Limite atingido!\n\n" +
                "Você só pode escolher 3 produtos diferentes."
            );

            return;
        }

        produtos.push(nome);
    }


    // Pode adicionar várias unidades do mesmo produto
    total += valor;


    // Mostra no pedido
    document.getElementById("pedido").innerHTML +=
        "<p>" +
        nome +
        " - R$ " +
        valor.toFixed(2).replace(".", ",") +
        "</p>";


    // Atualiza o total
    document.getElementById("total").textContent =
        total.toFixed(2).replace(".", ",");
}


function finalizarPedido() {

    if (produtos.length === 0) {

        alert("Seu pedido está vazio!");

        return;
    }


    alert(
        "Pedido finalizado com sucesso!\n\n" +
        "Total: R$ " +
        total.toFixed(2).replace(".", ",")
    );


    // Limpa o pedido

    total = 0;

    produtos = [];

    document.getElementById("pedido").innerHTML = "";

    document.getElementById("total").textContent = "0,00";
}