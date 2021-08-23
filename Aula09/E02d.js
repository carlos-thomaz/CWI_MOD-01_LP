item1 = 10;
item2 = 20;
item3 = 30;
item4 = 40;
item5 = 50;
mediaAritmetica = (item1 + item2 + item3 + item4 + item5) / 5;

function mediaAritmetica(itens) {
    soma = 0

    // somar todos os itens do array
    for (index = 0; index < itens.length; index++) {
        soma += itens[index]
    }

    // dividir o somatório pela quantidade de elementos
    return soma / itens.length
}