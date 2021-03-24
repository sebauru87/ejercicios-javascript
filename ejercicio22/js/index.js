const URL =
  "https://gist.githubusercontent.com/SuecoMarcus/23bcf8a786725f1b8335ec2dc2d90779/raw/f33d1058b878a7fc95ef202763d0067e8b436e54/uruguay_gdp.json";

let pbiUruguay = [];

const buscarData = () => {
  $.ajax({
    method: "GET",
    url: URL,
    dataType: "json",
    success: function (datosObtenidos) {
      //console.log(datosObtenidos);
      pbiUruguay = datosObtenidos;
      cargarTabla();
    },
    error: function () {
      console.log("Ocurrió un error durante la llamada");
    },
  });
};

window.onload = buscarData;

const buscarAnios = () => {
  let pbiAnios = [];
  pbiUruguay.forEach((item) => {
    pbiAnios.push(item.date);
  });

  return pbiAnios.reverse();
};

const buscarIndicador = () => {
  let pbiIndicador = [];
  pbiUruguay.forEach((item) => {
    pbiIndicador.push(item.value);
  });

  return pbiIndicador.reverse();
};

const cargarTabla = () => {
  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: buscarAnios(),
      datasets: [
        {
          label: "PBI Uruguay (USD)",
          data: buscarIndicador(),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};
