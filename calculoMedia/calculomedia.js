function calcular() {
  var nameUser = document.getElementById('user')
  var name = nameUser.value

  var nota1 = document.getElementById('ab1')
  var ab1 = nota1.value
  var ab1Num = parseFloat(ab1)

  var nota2 = document.getElementById('ab2')
  var ab2 = nota2.value
  var ab2Num = parseFloat(ab2)

  var mediaFinal = (ab1Num + ab2Num) / 2
  var mediaFixada = mediaFinal.toFixed(1)

  var elementoResultado = document.getElementById('resultadomedia')

  if (mediaFixada >= 7) {
    elementoResultado.innerHTML =
      'Olá, ' +
      name +
      '. Sua média final é ' +
      mediaFixada +
      '. Você está APROVADO!'
    document.getElementById('resultadomedia').style.color = 'green'
  } else {
    elementoResultado.innerHTML =
      'Olá, ' +
      name +
      '. Sua média final é ' +
      mediaFixada +
      '. Você está REPROVADO!'
    document.getElementById('resultadomedia').style.color = 'orangered'
  }
}
