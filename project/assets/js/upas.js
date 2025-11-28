const upas = [
        { nome: "UPA do Cohatrac", endereco: "Rua X, Cohatrac", id: 1 },
        { nome: "UPA Cidade Operária", endereco: "Av. Y, Cidade Operária", id: 2 },
        { nome: "UPA Anjo da Guarda", endereco: "Rua Z, Anjo da Guarda", id: 3 },
        { nome: "UPA Vinhais", endereco: "Av. W, Vinhais", id: 4 },
    ];

    const listaUpas = document.getElementById("listaUpas");

    upas.forEach(upa => {
        const div = document.createElement("div");
        div.classList.add("upa");

        div.innerHTML = `
            <h2>${upa.nome}</h2>
            <p>Endereço: ${upa.endereco}</p>
            <button onclick="agendar(${upa.id})">Agendar</button>
        `;

        listaUpas.appendChild(div);
    });

    function agendar(upaId) {
        window.location.href = `agendamento.html?upa=${upaId}`;
    }