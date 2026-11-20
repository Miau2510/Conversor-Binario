// ----------------------------------------------------------------------------

// ATENÇÃO: GARANTA QUE VOCÊ TEM O NODE.JS INSTALADO EM SUA MÁQUINA E INSTALE O TYPESCRIPT
// APÓS ISSO, EXECUTE NPM INSTALL PARA INSTALAR AS DEPENDÊNCIAS
//EXECUTE COM "npm start"

// ----------------------------------------------------------------------------
// IMPORTAÇÃO DA TABELA ASCII DE LETRAS E NÚMEROS
import asciiLN from "./ascii_letter_number.json";

// CRIAÇÃO DE UM OBJETO PARA MAPEAR LETRAS E NÚMEROS PARA SEUS VALORES ASCII
const letraNumero: Record<string, number> = asciiLN;

// ----------------------------------------------------------------------------
// TEXTO A SER CONVERTIDO PARA BINÁRIO DENTRO DO CAMPO TEXTO
const texto = "";
// ----------------------------------------------------------------------------

// CONVERSÃO DE CADA LETRA DO TEXTO PARA BINÁRIO USANDO A TABELA ASCII
let sequenciaBinaria = "";

// ITERAÇÃO SOBRE CADA LETRA DO TEXTO
for (const letra of texto) {
    // OBTENÇÃO DO VALOR ASCII DA LETRA
    const valor = letraNumero[letra];

    // CONVERSÃO DO VALOR ASCII PARA BINÁRIO
    if (valor !== undefined) {
        let resto = valor;
        let binario = "";

        // CONVERSÃO DO VALOR PARA BINÁRIO
        while (resto > 0) {
            binario = (resto % 2) + binario;
            resto = Math.floor(resto / 2);
        }

        // ADIÇÃO DO BINÁRIO À SEQUÊNCIA BINÁRIA, COM ESPAÇO ENTRE CADA VALOR
        if (sequenciaBinaria !== "") {
            sequenciaBinaria += " ";
        }

        // ADIÇÃO DO BINÁRIO À SEQUÊNCIA BINÁRIA, GARANTINDO QUE CADA VALOR TENHA 8 BITS
        sequenciaBinaria += binario.padStart(8, "0");
    }
}

// EXIBIÇÃO DA SEQUÊNCIA BINÁRIA NO CONSOLE
console.log(sequenciaBinaria);