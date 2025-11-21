// statusLeitos.js
carregarDados().then(data => {
    const area = document.getElementById("dashboard-leitos");
    if (!area) return;

    data.leitos.forEach(item => {
        const upaInfo = data.upas.find(u => u.id === item.upa_id);

        const card = document.createElement("div");
        card.classList.add("card-leito");

        card.innerHTML = `
            <h3>${upaInfo.nome}</h3>
            <p><strong>Disponíveis:</strong> ${item.disponiveis}</p>
            <p><strong>Ocupados:</strong> ${item.ocupados}</p>
            <p><strong>Total:</strong> ${item.disponiveis + item.ocupados}</p>
        `;

        area.appendChild(card);
    });
});
