const API_MOCK = "mock/dados.json";

async function carregarDados() {
    try {
        const response = await fetch(API_MOCK);
        if (!response.ok) throw new Error("Não foi possível carregar o mock");
        return await response.json();
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}