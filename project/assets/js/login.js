document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault(); // evita recarregar a página

    // Aqui você poderia validar usuário/senha
    alert("Login realizado com sucesso! (simulação)");

    // Redireciona para a página inicial
    window.location.href = "index.html";
});