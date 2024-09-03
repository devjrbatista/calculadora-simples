function soma() {
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var resultado = numero1 + numero2;
        document.getElementById("mostraResultado").textContent = `O resultado da soma é: ${resultado}`;
      }
      function subtrair() {
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var resultado = numero1 - numero2;
        document.getElementById("mostraResultado").textContent = `O resultado da subtração é: ${resultado}`;
      }
      function multiplicar() {
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var resultado = numero1 * numero2;
        document.getElementById("mostraResultado").textContent = `O resultado da multiplicação é: ${resultado}`;
      }
      function dividir() {
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var resultado = numero1 / numero2;
        document.getElementById("mostraResultado").textContent = `O resultado da divisao é: ${resultado}`;
      }