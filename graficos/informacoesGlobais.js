async function visualizarInformacoesGlobais () {
    const res = await fetch(url)
    const dados = awaitt res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container texto')
    paragrafo.innerHTML = 'Voce sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e aproximadamente ${dados.total_pessoas_conectadas} estao conectadas em alguma rede social e 
    passam em media ${dados.tempo_medio} horas conectadas.'
    console.log(paragrafo)
}


