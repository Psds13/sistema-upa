document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); // impede reload

    alert("Cadastro realizado com sucesso! (simulação)");

    // Redireciona para a página inicial
    window.location.href = "index.html";
});
