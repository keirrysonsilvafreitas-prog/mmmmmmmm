// Gráfico 1: Frequência de utilização da IA
const usageChart = new Chart(
  document.getElementById("usageChart"),
  {
    type: "pie",
    data: {
      labels: [
        "Sim, constantemente",
        "Não, nunca usei",
        "Às vezes eu uso"
      ],
      datasets: [{
        data: [22.5, 2.5, 75],
        backgroundColor: [
          "#08734d",
          "#dce9df",
          "#80cfa0"
        ],
        borderColor: "#ffffff",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 15,
            usePointStyle: true
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.parsed}%`;
            }
          }
        }
      }
    }
  }
);


// Gráfico 2: Comportamento após pesquisar
const learningChart = new Chart(
  document.getElementById("learningChart"),
  {
    type: "bar",
    data: {
      labels: [
        "Apenas copio as respostas",
        "Analiso, mas não adquiro conhecimento",
        "Leio e obtenho conhecimentos"
      ],
      datasets: [{
        label: "Participantes",
        data: [7.5, 22.5, 70],
        backgroundColor: [
          "#b8d9c3",
          "#58ad7e",
          "#08734d"
        ],
        borderRadius: 6,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "x",
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function(value) {
              return value + "%";
            }
          },
          title: {
            display: true,
            text: "Percentual de participantes"
          }
        },
        x: {
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoSkip: false,
            font: {
              size: 10
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.parsed.y}% dos participantes`;
            }
          }
        }
      }
    }
  }
);


// Filtro interativo dos gráficos
const chartFilter = document.getElementById("chartFilter");
const usageCard = document.getElementById("usageCard");
const learningCard = document.getElementById("learningCard");

chartFilter.addEventListener("change", function() {
  const selected = this.value;

  usageCard.classList.toggle(
    "hidden",
    selected === "learning"
  );

  learningCard.classList.toggle(
    "hidden",
    selected === "usage"
  );

  requestAnimationFrame(() => {
    usageChart.resize();
    learningChart.resize();
  });
});