const apiKey = `6da7002e5ec9559336503bb8`;
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

async function dolarCotacao() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const taxaBRL = data.conversion_rates.BRL;
        const taxaEuro = data.conversion_rates.EUR;
        const taxaCHF = data.conversion_rates.CHF;
        const taxaARS = data.conversion_rates.ARS;
        const taxaCNY = data.conversion_rates.CNY;

        document.getElementById('dolar').textContent = `1 Dólar = ${taxaBRL.toFixed(2).replace('.', ',')} BRL`;
        document.getElementById('euro').textContent = `1 Euro = ${taxaEuro.toFixed(2).replace('.', ',')} BRL`;
        document.getElementById('franco-suico').textContent = `1 Franco Suíço = ${taxaCHF.toFixed(2).replace('.', ',')} BRL`;
        document.getElementById('peso-argentino').textContent = `1 Peso Argentino = ${taxaARS.toFixed(2).replace('.', ',')} BRL`;
        document.getElementById('yuan-chines').textContent = `1 Yuan Chinês = ${taxaCNY.toFixed(2).replace('.', ',')} BRL`;
    } catch (error) {
        document.getElementById('dolar').textContent = `Falha ao buscar a cotação do dólar`;
        document.getElementById('euro').textContent = `Falha ao buscar a cotação do euro`;
        document.getElementById('franco-suico').textContent = `Falha ao buscar a cotação do franco suíço`;
        document.getElementById('peso-argentino').textContent = `Falha ao buscar a cotação do peso argentino`;
        document.getElementById('yuan-chines').textContent = `Falha ao buscar a cotação do yuan chinês`;
    }
}

dolarCotacao();
