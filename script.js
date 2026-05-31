// Inicializar EmailJS com chave pública
emailjs.init("McRRX-klNtC7w7-rV");

document
.getElementById("formulario")
.addEventListener("submit", function(e){

e.preventDefault();

const nome = document.getElementById("nome").value;
const empresa = document.getElementById("empresa").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const descricao = document.getElementById("descricao").value;

// Validar campos obrigatórios
if (!nome || !email || !descricao) {
    alert("Por favor, preencha todos os campos obrigatórios (Nome, Email e Descrição)!");
    return;
}

// Preparar dados para EmailJS
const templateParams = {
    to_email: "contatosoftsolucoes@gmail.com",
    from_name: nome,
    from_email: email,
    company: empresa || "Não informado",
    phone: telefone || "Não informado",
    message: descricao
};

// Mostrar loading
const button = document.querySelector("button[type='submit']");
const originalText = button.textContent;
button.textContent = "Enviando...";
button.disabled = true;

// Enviar email
emailjs.send("DT__vxPXKXL4b1GTZEhVU", "template_softsolucoes", templateParams)
    .then(function(response) {
        console.log("Email enviado com sucesso:", response);
        alert("✅ Solicitação enviada com sucesso!\n\nEm breve entraremos em contato via email ou WhatsApp.");
        
        // Limpar formulário
        document.getElementById("formulario").reset();
        
        // Restaurar botão
        button.textContent = originalText;
        button.disabled = false;
        
        // Opcional: Também abrir WhatsApp
        const numero = "5596991951440";
        const mensagem = `Olá, gostaria de solicitar um orçamento.

Nome: ${nome}

Empresa: ${empresa}

Email: ${email}

WhatsApp: ${telefone}

Necessidade:
${descricao}`;
        
        // Abrir WhatsApp em nova aba
        setTimeout(() => {
            window.open(
                `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
                "_blank"
            );
        }, 500);
    }, function(error) {
        console.error("Erro ao enviar email:", error);
        alert("❌ Erro ao enviar solicitação.\n\nTente novamente ou entre em contato via WhatsApp.");
        
        // Restaurar botão
        button.textContent = originalText;
        button.disabled = false;
        
        // Abrir WhatsApp como fallback
        const numero = "5596991951440";
        const mensagem = `Olá, gostaria de solicitar um orçamento.

Nome: ${nome}

Empresa: ${empresa}

Email: ${email}

WhatsApp: ${telefone}

Necessidade:
${descricao}`;
        
        setTimeout(() => {
            window.open(
                `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
                "_blank"
            );
        }, 500);
    });

});
