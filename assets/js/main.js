function private () {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    function prevent (evento) {
        evento.preventDefault();
    }

    function calculo (evento) {
        prevent(evento);
        const peso = parseFloat(form.querySelector('#peso').value);
        const altura = parseFloat(form.querySelector('#altura').value);
        const calc = peso / altura**2;

        let imc;
        if (calc < 18.5) {
            imc = 'Abaixo do peso';
        } else if (calc >= 18.5 && calc < 24.9) {
            imc = 'Peso normal';
        } else if (calc >= 25 && calc < 29.9) {
            imc = 'Sobrepeso';
        } else if (calc >= 30 && calc < 34.9) {
            imc = 'Obesidade Grau I';
        } else if (calc >= 35 && calc < 39.9) {
            imc = 'Obesidade Grau II';
        } else {
            imc = 'Obesidade Grau III';
        }
        
        if (!isNaN(peso) && !isNaN(altura)) {
            result.innerHTML = `<p style="
            color: var(--second-green);
            font-size: 17px;
            background-color: var(--primary-green);
            border: 1px solid var(--second-green);
            border-radius: 10px;">
            O resultado é ${calc.toFixed(1)}(${imc})
            </p>`;
        } else {
            result.innerHTML = `<p style="
            color: var(--second-red);
            font-size: 17px;
            background-color: var(--primary-red);
            border: 1px solid var(--second-red);
            border-radius: 10px;">
            Peso e/ou altura inválidos!
            </p>`;
        }
    }

    form.addEventListener('submit', calculo);
}
private();