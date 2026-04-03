//Gerar um número aleatório
let numeroSecreto = Math.floor(Math.random()
* 11) + 1;
/*
    Math.random() → gera número entre 0 e 0.999...
    * 101 → transforma em intervalo de 0 a 100
    Math.floor() → arredonda pra baixo (vira inteiro)
*/

let acerto = false;
let mensagem = "";
let tentativas = 0;


function btnChutar() {

    let numeroUsuario = Number(document.getElementById("inputNumero").value);
    let mensagem = "";

    if (numeroUsuario == " "){
        mensagem = "Insira um número!";
    }
    
    else if (numeroUsuario === numeroSecreto) {
        mensagem = "Parabéns, você acertou! " + "\nO número secreto era " + numeroSecreto;
        acerto = true;
        tentativas++;

    } 
    else if (numeroUsuario > numeroSecreto) {
        mensagem = "Seu chute foi MAIOR que o número secreto";
        tentativas++;
    } 
    else {
        mensagem = "Seu chute foi MENOR que o número secreto";
        tentativas++;
    }

    document.getElementById("mensagem").textContent = mensagem;
    document.getElementById("tentativas").textContent = tentativas;

    inputNumero.value = "";
}

function btnReiniciar(){
    numeroSecreto = Math.floor(Math.random() * 11);
    tentativas = 0;
    acerto = false;

    document.getElementById("mensagem").textContent = "";
    document.getElementById("tentativas").textContent = 0;
    document.getElementById("inputNumero").value = "";
}

/*
    Quando o usuário acertar, não deixar continuar sem apertar o botão de reiniciar
*/