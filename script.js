// PARA ADICIONAR O BUG BASTA COMENTAR A LINHA ABAIXO
document.getElementById('bug').style.display = "none";

//  VARIAVEIS
let calcular = document.getElementById('button_calcular');
let limpar = document.getElementById('button_limpar');

let media_html = document.getElementById('media');
let mediana_html = document.getElementById('mediana');
let moda_html = document.getElementById('moda');
let ocorrencias_html = document.getElementById('ocorrencias');

let mediana;
let media;

let maxOcorrencias = 0;

//  FUNCOES
function calcularMediana(a, b, c, d, e, f, g, h, i, j, k, l) {

  const array = [a, b, c, d, e, f, g, h, i, j, k, l];
  array.sort((x, y) => x - y);
  const meio = Math.floor(array.length / 2);

  return array.length % 2 === 0 ? (array[meio - 1] + array[meio]) / 2 : array[meio];

}

function calcularMedia(a, b, c, d, e, f, g, h, i, j, k, l) {

  const soma = a + b + c + d + e + f + g + h + i + j + k + l;
  const media = soma / 12;
  return media;

}

function calcularModa(numeros) {
  let ocorrencias = {};
  
  let moda = [];

  for (let i = 0; i < numeros.length; i++) {
    if (ocorrencias[numeros[i]]) {
      ocorrencias[numeros[i]]++;
    } else {
      ocorrencias[numeros[i]] = 1;
    }

    if (ocorrencias[numeros[i]] > maxOcorrencias) {
      maxOcorrencias = ocorrencias[numeros[i]];
    }
  }

  for (let numero in ocorrencias) {
    if (ocorrencias[numero] === maxOcorrencias) {
      moda.push(Number(numero));
    }
  }

  return moda;
}

function calcular_pagina() {

  var n1 = parseFloat(document.getElementById('n1').value);
  var n2 = parseFloat(document.getElementById('n2').value);
  var n3 = parseFloat(document.getElementById('n3').value);
  var n4 = parseFloat(document.getElementById('n4').value);
  var n5 = parseFloat(document.getElementById('n5').value);
  var n6 = parseFloat(document.getElementById('n6').value);
  var n7 = parseFloat(document.getElementById('n7').value);
  var n8 = parseFloat(document.getElementById('n8').value);
  var n9 = parseFloat(document.getElementById('n9').value);
  var n10 = parseFloat(document.getElementById('n10').value);
  var n11 = parseFloat(document.getElementById('n11').value);
  var n12 = parseFloat(document.getElementById('n12').value);



  //  CALCULAR MEDIANA
  mediana = calcularMediana(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12);

  //  CALCULAR MEDIA
  media = calcularMedia(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12);

  //  CALCULAR MODA
  const numeros = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12];
  const moda = calcularModa(numeros);

  //  GRAFICO
  var ctx = document.getElementById('myChart');

  // VALIDAR DADOS

  if (
    isNaN(n1) ||
    isNaN(n2) ||
    isNaN(n3) ||
    isNaN(n4) ||
    isNaN(n5) ||
    isNaN(n6) ||
    isNaN(n7) ||
    isNaN(n8) ||
    isNaN(n9) ||
    isNaN(n10)||
    isNaN(n11)||
    isNaN(n12)
    ) 
  {
    alert("Preencha todos os campos corretamente!");
  } 
 
  else {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
        datasets:
          [
            {
              label: 'meses',
              data: [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12],
              borderWidth: 0,
              borderRadius: 5,
              backgroundColor: '#767575',
              order: 4,
            },

            {
              label: 'média',
              data: [media, media, media, media, media, media, media, media, media, media, media, media],
              type: 'line',
              order: 2,
              borderColor: '#87ad5c',
              backgroundColor: '#87ad5c',
              borderWidth: 5,
              pointStyle: false,
            },

            {
              label: 'mediana',
              data: [mediana, mediana, mediana, mediana, mediana, mediana, mediana, mediana, mediana, mediana, mediana, mediana],
              type: 'line',
              order: 2,
              borderColor: '#eca635',
              backgroundColor: '#eca635',
              borderWidth: 5,
              pointStyle: false,
            },

            // {
            //   label: 'moda',
            //   data:  moda,
            //   type: 'bubble',
            //   order: 1,
            //   borderColor: '#ce5346',
            //   backgroundColor: '#ce5346',
            //   borderWidth: 5,
            //   pointStyle: true,
            //   showLine: false,
              
            // },
          ]
      },
      options: {
        scales:
        {
          y:
          {
            beginAtZero: true
          }
        },

        layout:
        {
          padding: 0
        }
      }
    });

    //  EXIBIR RESULTADOS
    media_html.textContent = media.toFixed(2);
    mediana_html.textContent = mediana.toFixed(2);
    ocorrencias_html.innerHTML = "Ocorrências: &nbsp;&nbsp;&nbsp;" + maxOcorrencias;


    if (moda.length == 1) {
      document.getElementById('tipo_moda').textContent = "unimodal";
      moda_html.textContent = moda.join(' | ');
    }

    else if (moda.length == 2) {
      document.getElementById('tipo_moda').textContent = "bimodal";
      moda_html.textContent = moda.join(' | ');
    }

    else if (moda.length == 3) {
      document.getElementById('tipo_moda').textContent = "trimodal";
      moda_html.textContent = moda.join(' | ');
    }

    else if (moda.length >= 4 && moda.length < 12) {
      document.getElementById('tipo_moda').textContent = "multimodal";
      moda_html.textContent = moda.join(' | ');
    }

    else if (moda.length == 12) {
      moda_html.textContent = "amodal";
    }

    // DESABILITAR BOTAO CALCULAR
    calcular.style.backgroundColor = "#767575";

  }
}




//  EVENTOS (BOTOES)
calcular.addEventListener('click', function (event) {

  event.preventDefault();
  calcular_pagina();

})

limpar.addEventListener('click', function (event) {

  event.preventDefault();

  location.reload();

})



