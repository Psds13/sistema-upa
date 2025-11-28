smartUPA 🏥

Sistema de Agendamento de Consultas e Monitoramento de Leitos – UPAs São Luís

O smartUPA é uma interface web desenvolvida para otimizar o agendamento de consultas e monitoramento de leitos nas Unidades de Pronto Atendimento (UPAs) de São Luís. O sistema visa melhorar a experiência do cidadão, agilizar o fluxo de atendimentos e fornecer informações em tempo real (mockadas atualmente, podendo futuramente integrar com APIs reais).

📌 Funcionalidades
👨‍⚕️ Agendamentos

Agendamento de consultas por:

Especialidade médica

UPA desejada

Data e horário disponíveis

Confirmação do agendamento com geração de protocolo

Visualização de consultas agendadas

🛏️ Status dos Leitos

Exibição de:

Leitos disponíveis e ocupados

Taxa de ocupação (%)

Tipos de leitos (observação, emergência, isolamento, etc.)

🏥 Status das UPAs

Informações em tempo real ou simuladas:

Tempo médio de espera

Capacidade atual

Número de pacientes em atendimento

Situação geral das UPAs:

🟢 Normal

🟡 Lotado

🔴 Superlotado

🔍 Busca e Filtros

Buscar UPAs por bairro

Filtrar por:

Disponibilidade de leitos ou vagas

Especialidade médica

📱 Interface Responsiva

Layout adaptado para:

Desktop

Tablets

Smartphones

🎨 Protótipo no Figma

O design da interface foi planejado no Figma, contemplando:

Fluxo do usuário

Telas de login (opcional)

Tela inicial com mapa/lista das UPAs

Tela de agendamento

Dashboard de status

Componentes reutilizáveis

🔗 Acesse o protótipo

🛠 Tecnologias Utilizadas

HTML

CSS

JavaScript

Figma (protótipo de design)

⚡ Objetivo

O smartUPA busca tornar o atendimento em UPAs mais eficiente, organizado e transparente, proporcionando:

Menor tempo de espera

Melhor gestão de leitos

Facilidade no agendamento de consultas

smartUPA/
├── index.html # Página inicial / dashboard
├── agendamento.html # Tela de agendamento de consultas
├── status-leitos.html # Tela de status dos leitos
├── css/
│ ├── style.css # Estilos gerais
│ ├── agendamento.css # Estilos específicos da tela de agendamento
│ └── status-leitos.css # Estilos específicos da tela de status de leitos
├── js/
│ ├── main.js # Scripts gerais
│ ├── agendamento.js # Scripts para agendamento
│ └── status-leitos.js # Scripts para status de leitos
├── assets/
│ ├── images/ # Logos, ícones e imagens do protótipo
│ └── fonts/ # Fontes personalizadas
├── README.md # Documentação do projeto
└── prototipo/
└── figma-link.txt # Link ou referência para o protótipo Figma
