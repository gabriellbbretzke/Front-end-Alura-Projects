// const enviaNotas = document.querySelector("#calcular")

// enviaNotas.addEventListener("click", () => {
//     alert("Fui clicado");
//     console.log("Fui clicado");
// });

// const elemento = document.querySelector("#calcular");
// const resultado = document.querySelector(".resultado");

// elemento.addEventListener("click", (evento) => {
//   resultado.innerHTML = "Fui clicado"
// })

let paint = document.querySelectorAll('[tipo]');
let datum = document.querySelectorAll('[data-appearance]');

datum.forEach((element) => {
    element.addEventListener('click', (event) => {
        setDatum(element.getAttribute('data-appearance'));
    });
});

function setDatum(param) {
    if (param === 'hide') {
        paint.forEach((element) => {
            element.parentElement.setAttribute('style', 'display:none;');
        });
    } else {
        paint.forEach((element) => {
            element.parentElement.setAttribute('style', 'display:initial;');
        });
    }
}