// função que dispara ao clicar no botão verificar
function verificar() {
  // var data recebe a data atual
  var data = new Date();
  // var ano recebe a var data que recebe a data com ano atual
  var ano = data.getUTCFullYear();
  //var fano recebe o elemento do input com id txtano
  var fano = document.getElementById("txtano");
  //var res recebe o elemento da div com id res
  var res = document.getElementById("res");
  // se o valor da var fano for igual a 0 ou maior que ano atual
  if (fano.value.length == 0 || fano.value > ano) {
    // alerta com o texto abaixo
    alert("Verifique os dados e tente novamente");
    //senão 'tudo ok'
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    //se o select radio estiver no select masculino = HOMEM
    if (fsex[0].checked) {
      genero = "Homem";
      // se a idade for maior ou igual a 0 e menor que 10 = criança
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "bebemenino.jpg");
        //senão se idade menor que 21 = jovem
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "homemjovem.jpg");
        // senão se idade menor que 50 = adulto
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "homemadulto.jpg");
        //senão = idoso
      } else {
        //idoso
        img.setAttribute("src", "homemidoso.jpg");
      }
      //senao se select radio estiver em feminino = MULHER
    } else if (fsex[1]) {
      genero = "Mulher";
      // se a idade for maior ou igual a 0 e menor que 10 = criança
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "bebemenina.jpg");
        //senão se idade menor que 21 = jovem
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "mulherjovem.jpg");
        // senão se idade menor que 50 = adulto
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "mulheradulta.jpg");
        //senão = idoso
      } else {
        //idoso
        img.setAttribute("src", "mulheridosa.jpg");
      }
    }
    //alinha texto da div res no centro
    res.style.textAlign = "center";
    //imprime na tela a frase com os valores das var genero e idade
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    //adiciona a var img a div res
    res.appendChild(img);
    //aplica estilos a var img
    img.style.height = "250px";
    img.style.width = "250px";
    img.style.objectfit = "cover";
    img.style.borderRadius = "200px";
    img.style.paddingTop = "10px";
  }
}
