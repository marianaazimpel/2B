function criacartao(categoria, pergunta, resposta){
    console.log(categoria, pergunta,resposta);
}

function criacartao(categoria, pergunta,resposta){
    let container= document.getElementById('container');
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `<div class="cartao_conteudo"> 
    <h3> ${categoria} </h3>
    <div class ="cartao_contudo_pergunta">
    <p> ${categoria} </p>
    </div>
    <div class="cartao_conteudo_resposta">
    <p>  ${categoria}
    </p>
    </div>
    </div>`
    container.appendchild(cartao)
    }

    let respostaEstaVisivel= false
    container.aooendChild(cartao)

    function viraCartao(){
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classlist.toogle('active,' respostaEstaVisivel)
    }

    cartao. addEventListener('click', viraCartao)
