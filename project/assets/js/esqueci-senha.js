// esqueci-senha.js
document.addEventListener('DOMContentLoaded', function() {
    const btnEnviar = document.getElementById("btnEnviar");
    const codigoArea = document.getElementById("codigoArea");
    const codeBoxes = document.querySelectorAll(".codeBox");
    const btnConcluir = document.getElementById("btnConcluir");
    const mensagemCodigo = document.getElementById("mensagemCodigo");

    let codigo = "";

    btnEnviar.addEventListener("click", function() {
        const email = document.getElementById("email").value.trim();
        if(!email) {
            alert("Digite seu email antes de enviar o código!");
            return;
        }

        // Gerar código aleatório
        codigo = Math.floor(1000 + Math.random() * 9000).toString();
        console.log("Código enviado:", codigo); // só para testes

        // Mostrar mensagem e área do código
        mensagemCodigo.textContent = `Código enviado para o email: ${email}`;
        codigoArea.style.display = "block";
    });

    function verificarCampos() {
        const todosPreenchidos = Array.from(codeBoxes).every(input => input.value.trim() !== "");
        btnConcluir.disabled = !todosPreenchidos;
    }

    codeBoxes.forEach((input, index) => {
        input.addEventListener("input", verificarCampos);

        input.addEventListener("input", () => {
            if(input.value.length === 1 && index < codeBoxes.length - 1) {
                codeBoxes[index + 1].focus();
            }
        });
    });

    btnConcluir.addEventListener("click", function() {
        const codigoDigitado = Array.from(codeBoxes).map(input => input.value).join("");
        if(codigoDigitado === codigo) {
            alert("Código correto! Redefina sua senha.");
        } else {
            alert("Código incorreto! Tente novamente.");
        }
    });
});
