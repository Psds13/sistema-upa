// upas.js
carregarDados().then(data => {
    const lista = document.getElementById("lista-upas");
    if (!lista) return;

    data.upas.forEach(upa => {
        const card = document.createElement("div");
        card.classList.add("card-upa");

        card.innerHTML = `
            <img src="${upa.imagem}" alt="${upa.nome}">
            <h3>${upa.nome}</h3>
            <p><strong>Bairro:</strong> ${upa.bairro}</p>
            <p><strong>Tempo de espera:</strong> ${upa.tempo_espera} min</p>
            <p><strong>Status:</strong> 
                ${upa.status === "normal" ? "🟢" : upa.status === "lotado" ? "🟡" : "🔴"} 
                ${upa.status.toUpperCase()}
            </p>
        `;

        lista.appendChild(card);
    });
});
