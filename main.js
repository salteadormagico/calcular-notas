document.addEventListener('DOMContentLoaded', function () {
    const nota1 = document.getElementById('nota1input');
    const nota2 = document.getElementById('nota2input');
    const nota3 = document.getElementById('nota3input');
    const notaFinal = document.getElementById('nota-final');
    const calc = document.getElementById('calc');
    const inputs = [nota1, nota2, nota3];

    inputs.forEach(i => i.addEventListener('input', function (e) {
        let input = e.target;
        console.log(e.target);
        if (e.target.value <= 10) {
            if (e.target.value < 5) {
                e.target.parentNode.innerHTML = `
                <h2>nota</h2>
                <input type="text" value=${e.target.value}></input>
                <h2>suspenso</h2>
                `;
            } else if (e.target.value >= 5) {
                e.target.parentNode.innerHTML = `
                <h2>nota</h2>
                <input type="text" value=${e.target.value}></input>
                <h2>aprobado</h2>
                `;
            }
        } else {
            console.error('introduce una nota válida');
        }
    calc.addEventListener('click', comprobar);
        function comprobar() {
            let j = 0;
            for (i = 0; i < inputs.length; i++) {
                if (inputs[i].value !== '') {
                    j++;
                    console.log(inputs[i].value);
                    console.log(inputs[i]);
                    console.log(j);
                } else {
                    continue;
                }
            }
            if (j === inputs.length) {
                setNotaFinal();
            } else {
                console.error('debes introducir todas las notas');
            }
        }
        function setNotaFinal() {
            var n = 0;
            for (i = 0; i < inputs.length; i++) {
              n = Number(n) + Number(inputs[i].value);
            }
            let notafinal = n / inputs.length;
            console.log(n);
            console.log(notafinal);
            notaFinal.innerHTML = notafinal;
        }
    }));
});