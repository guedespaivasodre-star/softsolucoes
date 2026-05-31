document
.getElementById("formulario")
.addEventListener("submit", function(e){

e.preventDefault();

const nome =
document.getElementById("nome").value;

const empresa =
document.getElementById("empresa").value;

const telefone =
document.getElementById("telefone").value;

const descricao =
document.getElementById("descricao").value;

const mensagem =
`Olá, gostaria de solicitar um orçamento.

Nome: ${nome}

Empresa: ${empresa}

WhatsApp: ${telefone}

Necessidade:
${descricao}`;

const numero = "5596991951440";

window.open(
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
"_blank"
);

});