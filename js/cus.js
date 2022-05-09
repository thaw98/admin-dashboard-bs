let asideBtn = document.querySelector(".aside-btn");
let aside = document.querySelector("aside");
let backdrop = document.querySelector(".__backdrop");
asideBtn.addEventListener("click", () => {
  aside.classList.add("show");
  backdrop.classList.add("offcanvas-backdrop");
  backdrop.classList.add("show");
});
backdrop.addEventListener("click", () => {
  backdrop.classList.remove("offcanvas-backdrop");
  aside.classList.remove("show");
  backdrop.classList.remove("show");
});

// Chart js
const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      borderRadius: "6",
      data: [
        0, 10, 5, 2, 20, 30, 45, 35, 22, 32, 3, 5, 7, 10, 30, 0, 10, 5, 2, 20,
        30, 45, 22, 32, 3, 5, 7, 10, 30, 12,
      ],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgb(255, 99, 132 ,0.3)",
      borderColor: "rgb(255, 99, 132, 0.3)",
      borderRadius: "6",
      data: [
        5, 20, 15, 10, 25, 50, 65, 35, 40, 15, 20, 45, 19, 1, 20, 5, 19, 1, 17,
        23, 32, 38, 40, 35, 10, 3, 20, 15, 25, 29,
      ],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [3],
          borderColor: "transparent",
        },
        ticks: {
          // forces step size to be 50 units
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);

// Order list
$(document).ready(function () {
  $("#tt").DataTable({
    pageLength: 5,
  });
});

// Visitor

const vlabels = ["January", "February", "March", "April", "May", "June"];
const vdata = {
  labels: vlabels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
      borderRadius: "6",
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgb(50, 149, 255)",
      borderColor: "rgb(50, 149, 255)",
      data: [3, 15, 25, 1, 30, 20, 15],
      borderRadius: "6",
    },
  ],
};
const vconfig = {
  type: "bar",
  data: vdata,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [3],
          borderColor: "transparent",
        },
        ticks: {
          // forces step size to be 50 units
          stepSize: 20,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
        },
      },
    },
  },
};
const myVisitor = new Chart(document.getElementById("myVisitor"), vconfig);
