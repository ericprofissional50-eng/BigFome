let total = 0;

let produtos = [];


function adicionarPedido(nome, valor) {

    let produtoExiste = produtos.find(
        produto => produto.nome === nome
    );


    if (!produtoExiste) {

        if (produtos.length >= 3) {

            alert(
                "Limite atingido!\n\n" +
                "Você só pode escolher 3 produtos diferentes."
            );

            return;
        }


        produtos.push({

            nome: nome,

            valor: valor,

            quantidade: 1

        });

    }


    else {

        produtoExiste.quantidade++;

    }


    atualizarPedido();

}


function atualizarPedido() {

    let pedido = document.getElementById("pedido");

    pedido.innerHTML = "";

    total = 0;


    produtos.forEach((produto, index) => {
        let subtotal =
            produto.valor * produto.quantidade;


      
        total += subtotal;


      
        pedido.innerHTML +=

            "<div class='item-pedido'>" +

                "<span>" +

                    produto.nome +

                    " - R$ " +

                    subtotal
                        .toFixed(2)
                        .replace(".", ",") +

                    " (" +

                    produto.quantidade +

                    "x)" +

                "</span>" +


                // BOTÃO X
                "<button " +

                    "class='botao-cancelar' " +

                    "onclick='cancelarProduto(" +
                        index +
                    ")'>" +

                    "✕" +

                "</button>" +

            "</div>";

    });


   
    document.getElementById("total").textContent =

        total
            .toFixed(2)
            .replace(".", ",");
}




function cancelarProduto(index) {


    produtos.splice(index, 1);

    
    atualizarPedido();

}




function cancelarTudo() {

   
    if (produtos.length === 0) {

        alert("Seu pedido já está vazio!");

        return;
    }



    let confirmar = confirm(

        "Tem certeza que deseja cancelar todo o pedido?"

    );


  
    if (!confirmar) {

        return;

    }


  
    produtos = [];

    total = 0;


    atualizarPedido();

}




function finalizarPedido() {

    if (produtos.length === 0) {

        alert("Seu pedido está vazio!");

        return;

    }

    alert(

        "Pedido finalizado com sucesso!\n\n" +

        "Total: R$ " +

        total
            .toFixed(2)
            .replace(".", ",")

    );

    produtos = [];

    total = 0;

    atualizarPedido();

}