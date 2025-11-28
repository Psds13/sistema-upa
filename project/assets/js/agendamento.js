// Lista inicial com exemplos
let agendamentos = [
    {
        nome: "Marcos Silva",
        data: "2025-11-25",
        tipo: "Consulta"
    },
    {
        nome: "Ana Beatriz",
        data: "2025-11-26",
        tipo: "Urgência"
    },
    {
        nome: "Carlos Eduardo",
        data: "2025-11-27",
        tipo: "Consulta"
    }
];

// Mostrar os agendamentos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAgendamentos");
    lista.innerHTML = "";

    agendamentos.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - ${item.data} - ${item.tipo}`;
        lista.appendChild(li);
    });
}

// Salvar novo agendamento
document.getElementById("formAgendamento").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const tipo = document.getElementById("tipo").value;

    agendamentos.push({ nome, data, tipo });

    atualizarLista();

    alert("Agendamento registrado!");

    // Limpa os campos
    document.getElementById("formAgendamento").reset();
});

// Inicializa mostrando os exemplos
atualizarLista();
