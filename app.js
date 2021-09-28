var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {

    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);


    if (isNaN(chute)) {
        elementoResultado.innerHTML = "Informe um número";
        return;
    }

    if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
        return;
    }

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Acertou";
        return;
    }

    if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "Errou, o número secreto é maior do que você está achando";
    } else {
        elementoResultado.innerHTML = "Errou, o número secreto é menor do que você está achando";
    }

}