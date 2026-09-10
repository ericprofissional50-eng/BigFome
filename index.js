let numero = 0;

let carrinho = [];

let itens = [
    ['Hambúrguer:', 26.99],
    ['Cheeseburger:', 35.99],
    ['Cachorro-quente:', 18.50],
    ['Sanduíche natural:', 38.99],
    ['Refrigerante:', 9.50],
    ['Suco Natural:', 15.50],
    ['Sobremesa:', 25.00],
];

function cardapio() {

    console.log('CARDAPIO');

    for (let i = 0; i < itens.length; i++) {
        console.log(i + 1, itens[i][0], 'R$', itens[i][1]);
    }
}

const readlineSync = require('readline-sync');

function pergunta(texto) {
    const resposta = readlineSync.question(texto);
    return Number(resposta);
}

cardapio();

let continuar = 'S';

while (continuar === 'S') {

    if (carrinho.length >= 3) {
        console.log('\nVocê já escolheu 3 produtos diferentes.');
        break;
    }

    const selecionado = pergunta(
        'Digite o numero do item para adicionar ao carrinho: '
    );

    // Verifica se o número existe
    if (selecionado < 1 || selecionado > itens.length || !Number.isInteger(selecionado)) {
        console.log('Opção inválida! Digite um número de 1 a 7.');
        continue;
    }

    let produtoExistente = carrinho.find(
        item => item[0] === itens[selecionado - 1][0]
    );

    if (produtoExistente) {
        console.log('Esse produto já foi adicionado.');
        continue;
    }

    switch (selecionado) {

        case 1:
            let quantidade1 = pergunta('Digite a quantidade de Hambúrguer: ');
            let valor1 = quantidade1 * itens[0][1];

            carrinho.push([itens[0][0], quantidade1, valor1]);
            break;

        case 2:
            let quantidade2 = pergunta('Digite a quantidade de Cheeseburger: ');
            let valor2 = quantidade2 * itens[1][1];

            carrinho.push([itens[1][0], quantidade2, valor2]);
            break;

        case 3:
            let quantidade3 = pergunta('Digite a quantidade de Cachorro-quente: ');
            let valor3 = quantidade3 * itens[2][1];

            carrinho.push([itens[2][0], quantidade3, valor3]);
            break;

        case 4:
            let quantidade4 = pergunta('Digite a quantidade de Sanduíche natural: ');
            let valor4 = quantidade4 * itens[3][1];

            carrinho.push([itens[3][0], quantidade4, valor4]);
            break;

        case 5:
            let quantidade5 = pergunta('Digite a quantidade de Refrigerante: ');
            let valor5 = quantidade5 * itens[4][1];

            carrinho.push([itens[4][0], quantidade5, valor5]);
            break;

        case 6:
            let quantidade6 = pergunta('Digite a quantidade de Suco Natural: ');
            let valor6 = quantidade6 * itens[5][1];

            carrinho.push([itens[5][0], quantidade6, valor6]);
            break;

        case 7:
            let quantidade7 = pergunta('Digite a quantidade de Sobremesa: ');
            let valor7 = quantidade7 * itens[6][1];

            carrinho.push([itens[6][0], quantidade7, valor7]);
            break;
    }

    continuar = readlineSync.question(
        'Deseja mais alguma coisa? (S/N): '
    ).toUpperCase();
}

console.log('\nRESUMO DA COMPRA');

let total = 0;

for (let i = 0; i < carrinho.length; i++) {

    console.log(
        carrinho[i][0],
        'Quantidade:',
        carrinho[i][1],
        'Total: R$',
        carrinho[i][2].toFixed(2)
    );

    total = total + carrinho[i][2];
}

console.log('VALOR FINAL: R$', total.toFixed(2));