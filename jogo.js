var altura = 0
var largura = 0
var vidas = 3
var tempo = 15
var criaMosquitoTempo = 1500
var nivel = window.location.search.replace('?', '')

switch (nivel) {
    case 'normal':
        criaMosquitoTempo = 1500
        break

    case 'dificil':
        criaMosquitoTempo = 1000
        break
    
    case 'chucknorris':
        criaMosquitoTempo = 750
        break
}

// função consta no body
function ajustaTamanhoPalcoJogo() {

    altura = window.innerHeight
    largura = window.innerWidth
}

var cronometro = setInterval(function () {
    
    tempo--
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'   
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

cronometro

function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        document.getElementById('v' + vidas).src = '/imagens/coracao_vazio.png'
        vidas--
        if(vidas < 1) {
            window.location.href = 'game-over.html'
        } 
    }

    // forçando o mosquito a não ficar com o corpo para fora da tela
    posicaoX = Math.floor(Math.random() * window.innerWidth) -90
    posicaoY = Math.floor(Math.random() * window.innerHeight) -90
    posicaoX < 0 ? posicaoX = 0 : posicaoX
    posicaoY < 0 ? posicaoY = 0 : posicaoY
        
    
    //criar elemento HTML
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`
    
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
            
        case 1:
            return 'mosquito2'
            
        case 2:
            return 'mosquito3'
            
    }
}

function ladoAleatorio(mosquito) {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
            break;
        case 1:
            return 'ladoB'
            break;
    }
}



