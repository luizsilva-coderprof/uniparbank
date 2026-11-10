let saldo = 1000;
var nomeCliente = prompt("Qual é o seu nome?");
const nomeBanco = "Banco UniparBank";
let telefoneCliente = null;
let observacaoCliente;


// function usoVarLet() {
//     let valor = 20;

//     if (true) {
//         let outroValor = 30;
//         console.log(valor); 
//         console.log(outroValor);
//     }
//     console.log(valor);
//     console.log(outroValor);
// }

// usoVarLet();

const conta = {
    banco: nomeBanco,
    titular: nomeCliente
};


if (nomeCliente === null || nomeCliente.trim() === "") {
    nomeCliente = "Cliente";
}

document.getElementById("boasVindas").textContent =
    `Olá, ${nomeCliente.toUpperCase()}! Bem-vindo ao ${nomeBanco}.`;


function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
    });
}


function atualizarSaldo() {
    document.getElementById("saldo").textContent =
    formatarMoeda(saldo);
}


function depositar() {
    let valorDigitado = prompt("Quanto deseja depositar?");
    let valor = Number(valorDigitado);
    let confirmar = confirm(
        `Confirma o depósito de ${formatarMoeda(valor)}?`
    );

    if (valorDigitado === null) {
        alert("Operação cancelada.");
    } else if (Number.isNaN(valor) || valor <= 0) {
        alert("Digite um valor numérico maior que zero.");
    } else if (confirmar === true) {
        saldo = saldo + valor;

        atualizarSaldo();

        document.getElementById("mensagem").textContent =
            `Depósito de ${formatarMoeda(valor)} realizado com sucesso!`;
    } else {
        alert("Depósito não confirmado.");
    }
}



function sacar() {
    let valorDigitado = prompt("Quanto deseja sacar?");
    let valor = Number.parseFloat(valorDigitado);

    if (valorDigitado === null) {
        alert("Saque cancelado.");
    } else if (Number.isNaN(valor) || valor <= 0) {
        alert("Digite um valor válido.");
    } else if (valor > saldo) {
        alert("Saldo insuficiente.");
    } else {
        let confirmar = confirm(
            `Deseja confirmar o saque de ${formatarMoeda(valor)}?`
        );

        if (confirmar) {
            saldo = saldo - valor;

            atualizarSaldo();

            document.getElementById("mensagem").textContent =
            `Saque de ${formatarMoeda(valor)} realizado com sucesso!`;

        } else {
            alert("Saque não confirmado.");
        }
    }
}



function consultarSaldo() {
    alert(`Olá, ${nomeCliente}! Seu saldo é ${formatarMoeda(saldo)}.`);
}


function mostrarDadosCliente() {
    let nomeMinusculo = nomeCliente.toLowerCase();
    let nomeMaiusculo = nomeCliente.toUpperCase();
    let quantidadeLetras = nomeCliente.length;

    alert(
        `DADOS DO CLIENTE\n\n` +
        `Nome: ${nomeMaiusculo}\n` +
        `Nome em minúsculas: ${nomeMinusculo}\n` +
        `Quantidade de caracteres: ${quantidadeLetras}\n` +
        `Banco: ${conta.banco}`
    );
}

function demonstrarConversoesJavascript() {
    let numeroInteiro = Number.parseInt("150.90");
    let numeroDecimal = Number.parseFloat("150.90");
    let numeroCompleto = Number("250.75");
    let saldoComoTexto = String(saldo);
    let saldoComoTexto2 = saldo.toString();
    let valorFormatado = saldo.toFixed(2);
    let valorComVirgula = saldo.toFixed(2).replace(".", ",");

    alert(
    `EXEMPLOS DE CONVERSÃO\n\n` +
    `parseInt("150.90"): ${numeroInteiro}\n` +
    `parseFloat("150.90"): ${numeroDecimal}\n` +
    `Number("250.75"): ${numeroCompleto}\n` +
    `String(saldo): ${saldoComoTexto}\n` +
    `saldo.toString(): ${saldoComoTexto2}\n` +
    `saldo.toFixed(2): ${valorFormatado}\n` +
    `replace(".", ","): ${valorComVirgula}`
    );
}


function exemploDeFuncao() {
    return "Exemplo";
}

console.log("Tipo do saldo:", typeof saldo);
console.log("Tipo do nome:", typeof nomeCliente);
console.log("Tipo de uma confirmação:", typeof true); 
console.log("Tipo do objeto conta:", typeof conta); 
console.log("Tipo da função:", typeof exemploDeFuncao); 
console.log("Tipo de null:", typeof telefoneCliente); 
console.log("Tipo de undefined:", typeof observacaoCliente);

let valorInvalido = Number("texto");
let infinito = 1 / 0;

console.log("Exemplo de NaN:", valorInvalido);
console.log("O valor é NaN?", Number.isNaN(valorInvalido));
console.log("Exemplo de Infinity:", infinito);



function demonstrarDocumentWrite() {
    let janela = window.open("", "_blank");

    if (janela) {
        janela.document.write("<h1>Bora abrir uma conta na Unipar Bank?</h1>");
        janela.document.write("<p>Um banco feito com total dedicação a você!</p>");
        janela.document.close();
    } else {
        alert("O navegador bloqueou a abertura da nova janela.");
    }
}

atualizarSaldo();