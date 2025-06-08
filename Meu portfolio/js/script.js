const texto = "Estudante de Tecnologia • Kaylane Coutinho • 18 anos⚡️🎀"; 
let i = 0;
const velocidade = 80;

function digitar() {
  if (i < texto.length) {
    document.getElementById("texto-dinamico").textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, velocidade);
  }
}

document.addEventListener("DOMContentLoaded", digitar);

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

window.addEventListener("load", () => {
  if (window.lucide) lucide.replace(); // Ativa os ícones Lucide
});

// document.addEventListener("DOMContentLoaded", function () {
//     const paragrafos = document.querySelectorAll(".conteudo section p");
//     let textoCompleto = ""; // Armazena o texto de todos os parágrafos
//     paragrafos.forEach((paragrafo) => {
//         textoCompleto += paragrafo.innerHTML + "\n\n"; // Junta o texto de todos os parágrafos
//         paragrafo.innerHTML = ""; // Limpa antes de digitar
//     });

//     let i = 0;
    
//     function digitarTexto() {
//         if (i < textoCompleto.length) {
//             paragrafos[0].innerHTML += textoCompleto.charAt(i); // Digita no primeiro parágrafo
//             i++;
//             setTimeout(digitarTexto, 30); // Ajusta a velocidade da digitação
//         }
//     }

//     digitarTexto(); // Inicia a digitação do texto completo
// });