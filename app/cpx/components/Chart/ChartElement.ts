import { CpxElement } from "../../element";
import { Cpx } from "../../index";
import Chart, { ChartTypeRegistry } from "chart.js/auto";
export class CpxChartElement extends CpxElement implements Element {
  title: string;
  type: ChartTypeRegistry;
  data: any[] = [];
  labels: string[] = [];
  colors: string[] = [];
  options: any;

  constructor() {
    super();
    this.type = this.getAttribute("chart-element:type");
    this.colors = eval(this.getAttribute("chart-element:colors")?.split(",")) || ["#006633", "#FFB399", "#0033FF", "#FFFF99", "#00B3E6"];
    this.title = this.getAttribute("chart-element:title") || "Chart Title";
    this.fetchData();
    this.options = {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      },
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: this.title,
        },
      },
    };
  }
  connectedCallback() {
    super.connectedCallback(); // Call super method if necessary
    this.fetchData();
  }
  fetchData() {
    console.log("Fetching data...");
    const fetchUrl = this.getAttribute("chart-element:data-url");
    if (fetchUrl) {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          console.log("Fetched data:", JSON.parse(this.data));
          console.log("Fetched data (JSONParse):", JSON.parse(this.data));
          this.setAttribute("response", JSON.stringify(this.data).replace(/"/g, "'"));
          this.renderChart();
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      if (this.type === "doughnut") {
        this.data = [
          {
            label: "Sales",
            data: 1500,
          },
          {
            label: "Purchases",
            data: 500,
          },
        ];
      }
      if (this.type === "bar") {
        [
          {
            data: [
              { x: "Sales", y: 20 },
              { x: "Revenue", y: 10 },
            ],
          },
        ];
      }
      if (this.type === "line") {
        this.data = [
          {
            data: {
              January: 10,
              February: 20,
              March: 30,
              April: 5,
              May: 15,
              June: 25,
              July: 35,
              August: 10,
              September: 20,
              October: 30,
              November: 5,
              December: 15,
            },
          },
        ];
      }
      if (this.type === "pie") {
        // MOckup Datastructure for Pie Chart
        this.data = [
          {
            label: "Red",
            data: 300,
          },
          {
            label: "Blue",
            data: 50,
          },
          {
            label: "Yellow",
            data: 100,
          },
        ];
      }

      console.log("Default data:", this.data);
      this.setAttribute("chart-element:response", JSON.stringify(this.data).replace(/"/g, "'"));
      this.renderChart();
    }
  }

  renderChart() {
    console.log("Rendering chart...");
    console.log("Data for chart:", this.data);

    const canvas = document.createElement("canvas");
    console.log("Canvas created:", canvas);

    this.appendChild(canvas);
    console.log("Canvas appended to element:", this);

    const ctx = canvas.getContext("2d");
    console.log("Canvas context:", ctx);

    if (ctx) {
      new Chart(ctx, {
        type: this.type,
        data: {
          datasets: this.data.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: this.colors,
          })),
        },
        options: this.options,
      });
    } else {
      console.error("Canvas context is null.");
    }
  }
}

customElements.define("chart-element", CpxChartElement);
