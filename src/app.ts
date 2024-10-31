function drawer(quantidade: number, min: number, max: number): void {
    let result: string = "Os numeros soteados foram: "
    for (let i: number = 1; i <= quantidade; i++){
        const number: number = Math.floor(Math.random() * (max - min + 1) + min);        
        i == quantidade ? result += `${number}.` : result += `${number},`;      
    }
    const myElement: HTMLElement = document.getElementById("texto__paragrafo") as HTMLElement;
    myElement.innerHTML = result
}

document.getElementById("btn-sortear").addEventListener("click", function(){

    const inputElemenQuantidade = document.getElementById('quantidade') as HTMLInputElement;
    const quantidade = Number(inputElemenQuantidade.value);

    const inputElemenDe = document.getElementById('de') as HTMLInputElement;
    const min = Number(inputElemenDe.value);

    const inputElementAte = document.getElementById('ate') as HTMLInputElement;
    const max = Number(inputElementAte.value);

    if (min >= max) {
        alert("O valor mínimo deve ser menor que o valor máximo.");
        return;
    } 

    drawer(quantidade, min, max);
    
})
