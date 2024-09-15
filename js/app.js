let qtdInferior = document.getElementById('qtd-inferior').innerHTML
let qtdSuperior = document.getElementById('qtd-superior').innerHTML
let qtdPista = document.getElementById('qtd-pista').innerHTML

function validarQuantidade(quantidade, qtdDisponivel) {
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Insira uma quantidade válida de ingressos')
        return false
    } else if (quantidade > qtdDisponivel) {
        alert('Quantidade de ingressos maior do que disponível. Tente novamente.')
        return false
    }
    return true
}

function comprar() {
    //recuperar o tipo do ingresso
    let ingresso = document.getElementById('tipo-ingresso').value
    
    //recuperar a quantidade de ingressos
    let quantidade = document.getElementById('qtd').value
    
    //validação na quantidade de ingressos
    switch(ingresso) {
        case 'inferior':
            if (validarQuantidade(quantidade, qtdInferior)) {
                qtdInferior -= quantidade
                document.getElementById('qtd-inferior').innerHTML = qtdInferior
            }
            break
        case 'superior':
            if (validarQuantidade(quantidade,qtdSuperior)) {
                qtdSuperior -= quantidade
                document.getElementById('qtd-superior').innerHTML = qtdSuperior
            }
            break
        case 'pista':
            if(validarQuantidade(quantidade,qtdPista)) {
                qtdPista -= quantidade
                document.getElementById('qtd-pista').innerHTML = qtdPista
            }
            break
        default:
            alert('Categoria de ingresso inválida!')
    }
}