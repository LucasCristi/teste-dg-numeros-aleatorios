let botaoParaGerarNumeros = document.getElementById("gerar-numeros");
let botaoParaFiltrarNumerosImpares = document.getElementById(
  "filtrar-numeros-impares"
);
let botaoParaZerarNumeros = document.getElementById("zerar-numeros");
let resultado = document.getElementById("resultado");
let arrayDeNumeros = [];

botaoParaGerarNumeros.addEventListener("click", (evento) => {
  resultado.innerHTML = "";
  for (i = 0; i < 100; i++) {
    let numerosSorteados = Math.floor(Math.random() * 1000);
     
      arrayDeNumeros.push(numerosSorteados);
  
    resultado.innerHTML += `<table><thead><tr><th>${[
      i,
    ]}</th></tr></thead><thead><tr><th>${
      arrayDeNumeros[i]
    }</th></tr></thead></table>`;
  }

  botaoParaFiltrarNumerosImpares.addEventListener("click", (evento) => {
    resultado.innerHTML = "";
    for (i = 0; i < 100; i++) {
      let numeroImpar = arrayDeNumeros[i];
      if (numeroImpar % 2 !== 0) {
        console.log(numeroImpar);
        resultado.innerHTML += `<table><thead><tr><th>${[
          i,
        ]}</th></tr></thead><thead><tr><th>${numeroImpar}</th></tr></thead></table>`;
      }
    }
  });
//   numeroImpar.splice(0, 100);
botaoParaZerarNumeros.addEventListener("click", evento => {
    resultado.innerHTML = "";
    arrayDeNumeros.splice(0, 100);
    console.log(arrayDeNumeros)
})
});


console.log(arrayDeNumeros);
console.log(arrayDeNumeros);

