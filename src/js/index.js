// pegar todos os botoes e guardar em uma variavel
const botoes = document.querySelectorAll(".botao")

const personagens = document.querySelectorAll(".personagem")

// Adicionar a classe "selecionado" no botão que o usuário clicou e remover do anterior
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao()
        desselecionarPersonagem()

        botao.classList.add("selecionado")
        personagens[indice].classList.add("selecionado")
    })
})


function desselecionarPersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado")
    personagemselecionado.classList.remove("selecionado")
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
}

