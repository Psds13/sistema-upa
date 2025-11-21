// agendamento.js
carregarDados().then(data => {

    const selectEspecialidade = document.getElementById("especialidade");
    const selectUpa = document.getElementById("upa");
    const selectHorario = document.getElementById("horario");
    const form = document.getElementById("form-agendamento");
    const protocoloTexto = document.getElementById("protocolo");

    // Preenche especialidades
    data.especialidades.forEach(esp => {
        const option = document.createElement("option");
        option.value = esp;
        option.textContent = esp;
        selectEspecialidade.appendChild(option);
    });

    // Preenche UPAs
    data.upas.forEach(upa => {
        const option = document.createElement("option");
        option.value = upa.id;
        option.textContent = upa.nome;
        selectUpa.appendChild(option);
    });

    // Preenche horários
    data.horarios.forEach(hr => {
        const option = document.createElement("option");
        option.value = hr;
        option.textContent = hr;
        selectHorario.appendChild(option);
    });

    // Simular envio
    form.addEventListener("submit", e => {
        e.preventDefault();

        const protocolo = "AGD-" + Math.floor(Math.random() * 9999);
        protocoloTexto.textContent = `Consulta agendada! Protocolo: ${protocolo}`;
        protocoloTexto.style.color = "green";
    });
});
