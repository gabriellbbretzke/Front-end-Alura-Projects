const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")
const imgRobotron = document.querySelector("#robotron")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": { 
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach ( (e) => {
    e.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

/*-------------------------------- MINHA SOLUÇÃO-------------------------*/
// imgRobotron.addEventListener("click", trocaRobo);
// const coresRobotron = [
//     {cor:'normal', 
//         src:'img/robotron.png'},
//     {cor:'vermelho', 
//         src:'img/robotronvermelho.png'},
//     {cor:'amarelo',
//         src:'img/robotronamarelo.png'},
//     {cor:'azul',
//         src: 'img/robotronazul.png'},
//     {cor:'branco',
//         src:'img/robotronbranco.png'},
//     {cor:'preto',
//         src:'img/robotronpreto.png'},
//     {cor:'rosa',
//         src: 'img/robotronrosa.png'},
// ]

// function trocaRobo() {
//     var i = Math.floor(Math.random() * 8);
//     imgRobotron.src = coresRobotron[i].src;
//     return;
// }
/*-------------------------------- FIM MINHA SOLUÇÃO-------------------------*/

/*--------SOLUÇÃO DO PROFESSOR---------------------*/
function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }
 /*-------- FIM SOLUÇÃO DO PROFESSOR---------------------*/