// Inicializar EmailJS com chave pública
emailjs.init("McRRX-klNtC7w7-rV");

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const servico = document.getElementById("servico").value;
    const investimento = document.getElementById("investimento").value;
    const descricao = document.getElementById("descricao").value.trim();

    // Validar campos obrigatórios
    if (!nome || !email || !telefone || !descricao) {
        alert("⚠️ Por favor, preencha todos os campos obrigatórios (Nome, Email, WhatsApp e Descrição)!");
        return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("⚠️ Por favor, insira um email válido!");
        return;
    }

    // Preparar dados para EmailJS
    const templateParams = {
        to_email: "contatosoftsolucoes@gmail.com",
        from_name: nome,
        from_email: email,
        company: empresa || "Não informado",
        phone: telefone,
        service: servico || "Não informado",
        investment: investimento || "Não informado",
        message: descricao
    };

    // Mostrar loading
    const button = document.querySelector("button[type='submit']");
    const originalText = button.textContent;
    button.textContent = "⏳ Enviando...";
    button.disabled = true;

    // Enviar email
    emailjs.send("DT__vxPXKXL4b1GTZEhVU", "template_softsolucoes", templateParams)
        .then(function(response) {
            console.log("✅ Email enviado com sucesso:", response);
            alert("✅ Solicitação enviada com sucesso!\n\nEm breve entraremos em contato via email ou WhatsApp.");
            
            // Limpar formulário
            document.getElementById("formulario").reset();
            
            // Restaurar botão
            button.textContent = originalText;
            button.disabled = false;
            
            // Scroll para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        }, function(error) {
            console.error("❌ Erro ao enviar email:", error);
            alert("⚠️ Erro ao enviar solicitação.\n\nTente novamente ou entre em contato via WhatsApp: (96) 99195-1440");
            
            // Restaurar botão
            button.textContent = originalText;
            button.disabled = false;
        });
});
