function drawer(quantidade, min, max) {
    let result = "Os numeros soteados foram: ";
    for (let i = 1; i <= quantidade; i++) {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        i == quantidade ? result += `${number}.` : result += `${number},`;
    }
    const myElement = document.getElementById("texto__paragrafo");
    myElement.innerHTML = result;
}
document.getElementById("btn-sortear").addEventListener("click", function () {
    const inputElemenQuantidade = document.getElementById('quantidade');
    const quantidade = Number(inputElemenQuantidade.value);
    const inputElemenDe = document.getElementById('de');
    const min = Number(inputElemenDe.value);
    const inputElementAte = document.getElementById('ate');
    const max = Number(inputElementAte.value);
    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
        return;
    }
    drawer(quantidade, min, max);
});
