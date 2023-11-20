import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["#4fe2bb", "#d4bf37"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    labels: {
      show: false,
    },
  },

  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

const DemoChart = () => {
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        width="290"
        height="150"
      />
    </>
  );
};

export default DemoChart;
