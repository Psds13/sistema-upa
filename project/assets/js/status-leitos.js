document.addEventListener("DOMContentLoaded", function() {
    // Dados simulados dos leitos (Mock Data)
    const mockLeitos = [
        { tipo: "Observação", total: 20, ocupados: 12 },
        { tipo: "Emergência", total: 10, ocupados: 9 },
        { tipo: "Isolamento", total: 5, ocupados: 3 },
        { tipo: "Pediátrico", total: 8, ocupados: 4 }
    ];

    const leitosArea = document.getElementById("leitos");
    const resumoArea = document.getElementById("resumoGeral");
    const btnVoltar = document.getElementById("btnVoltar");

    // --- 1. CALCULAR E EXIBIR RESUMO GERAL ---
    let totalGeral = 0;
    let ocupadosGeral = 0;

    mockLeitos.forEach(l => {
        totalGeral += l.total;
        ocupadosGeral += l.ocupados;
    });

    const livresGeral = totalGeral - ocupadosGeral;
    const taxaOcupacao = ((ocupadosGeral / totalGeral) * 100).toFixed(1);

    resumoArea.innerHTML = `
        <p>Total de Leitos na UPA: <b>${totalGeral}</b></p>
        <p>Leitos Ocupados: <span style="color: #e53e3e;"><b>${ocupadosGeral}</b></span></p>
        <p>Leitos Livres: <span style="color: #38a169;"><b>${livresGeral}</b></span></p>
        <p>Taxa de Ocupação: <b>${taxaOcupacao}%</b></p>
    `;

    // --- 2. EXIBIR DETALHE POR TIPO DE LEITO ---
    mockLeitos.forEach(l => {
        const livre = l.total - l.ocupados;
        const ocupacaoPercentual = (l.ocupados / l.total) * 100;

        // Determina a cor com base na taxa de ocupação
        let corBarra = '#38a169'; // Verde: Livre
        if (ocupacaoPercentual >= 80) {
            corBarra = '#e53e3e'; // Vermelho: Quase cheio
        } else if (ocupacaoPercentual >= 50) {
            corBarra = '#dd6b20'; // Laranja: Metade
        }
        
        const div = document.createElement("div");
        div.className = "cartao-leito"; // Para estilização no CSS

        div.innerHTML = `
            <h3>${l.tipo}</h3>
            
            <div class="indicador-total">
                <span class="livres">Livres: ${livre}</span> | 
                <span class="ocupados">Ocupados: ${l.ocupados}</span>
            </div>

            <div class="barra-progresso">
                <div class="barra-preenchida" 
                     style="width: ${ocupacaoPercentual}%; background-color: ${corBarra};">
                </div>
            </div>

            <p>Total de Leitos: ${l.total}</p>
        `;

        leitosArea.appendChild(div);
    });
    
    // --- 3. FUNCIONALIDADE DO BOTÃO VOLTAR ---
    btnVoltar.addEventListener("click", function() {
        // Sair de /js (..) e entrar em /html/login.html
        window.location.href = "../html/index.html"; 
    });

    // NOTA: Para que as cores e barras funcionem, você precisará adicionar CSS
    // no seu arquivo 'css/style.css'.
});