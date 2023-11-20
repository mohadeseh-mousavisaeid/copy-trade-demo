import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "series1",
    data: [31, 40, 42, 45, 48, 53, 51, 57, 42, 109, 100],
  },
];

const options = {
  chart: {
    toolbar: {
      show: true,
    },
  },
  colors: ["#3853fc", "#d4bf37"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    // x: new Date(),
    // type: "datetime",
    // categories: ["A", "B", "C", "D", "E", "F", "G"],
    labels: {
      show: true,
    },
  },

  yaxis: {
    labels: {
      show: true,
    },
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },
};

const RoiChart = () => {
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        width={"100%"}
        height={"100%"}
      />
    </>
  );
};

export default RoiChart;
