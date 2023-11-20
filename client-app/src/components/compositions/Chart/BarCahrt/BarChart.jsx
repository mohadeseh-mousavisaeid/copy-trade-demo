import ReactApexChart from "react-apexcharts";

const series = [
  {
    name: "series1",
    data: [51, 57, 42, 109, 100],
  },
];

const options = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["#39bd79", "#d4bf37"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
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
};

const BarChart = () => {
  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
      />
    </>
  );
};

export default BarChart;
