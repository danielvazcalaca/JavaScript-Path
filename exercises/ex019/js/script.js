function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  const pessoas = []

  //   form.onsubmit = function (evento) {
  //     evento.preventDefault()
  //     alert('abobora')
  //   }
  function recebeEventoForm(evento) {
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    })

    resultado.innerHTML += `<p> ${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value} </p>`

    console.log(
      `Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value}`
    )
    console.log(pessoas)
    evento.preventDefault()
  }

  form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()
