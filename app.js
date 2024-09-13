let listaNumeroSorteado = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumero();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML  = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10';


function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número de 1 a 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Parabéns, você acertou o número secreto!');
        let paralavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você acertou com ${tentativas} ${paralavraTentativa}`;
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTexto('h1' , 'O número secreto é menor');
        } else{
            exibirTexto('h1', 'o numero secreto é maior');
        } 
        tentativas++;
        limparCampo();

}
}
function gerarNumero() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
   let quantidadeDeNumeros = listaNumeroSorteado.length;

   if (quantidadeDeNumeros == numeroLimite) {
    listaNumeroSorteado = []
   }
   if(listaNumeroSorteado.includes(numeroEscolhido)) {
    return gerarNumero;
   } else {
    listaNumeroSorteado.push(numeroEscolhido);
    console.log(listaNumeroSorteado);
    return numeroEscolhido;
    }  
}



function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}