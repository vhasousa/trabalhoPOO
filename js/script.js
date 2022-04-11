class Moeda {
    dolar;
    real;

    constructor() {
        this.dolar = 4.70;
    }

    converterRealDolar() {
        this.real = parseFloat(document.getElementById("realDolar").value);

        const valorEmDolar = this.real/this.dolar;

        document.getElementById("resultadoRealDolar").innerText = valorEmDolar.toFixed(2);
    }
}

const moeda = new Moeda()
