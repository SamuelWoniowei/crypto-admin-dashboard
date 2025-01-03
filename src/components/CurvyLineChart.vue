<template>
  <div class="bg-white p-4 rounded-xl">
    <apexcharts :options="chartOptions" :series="series" type="line" height="285" />
  </div>
</template>

<script lang="ts">
import ApexCharts from "vue3-apexcharts";

export default {
  name: "CurvyLineChart",
  components: {
    apexcharts: ApexCharts
  },
  data() {
    return {
      series: [
        {
          name: "Line 1",
          data: [200, 400, 300, 750, 200, 600, 300]
        },
        {
          name: "Line 2",
          data: [450, 240, 350, 500, 700, 340, 600]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        stroke: {
          curve: "smooth",
          width: 4
        },
        title: {
          text: "Market OverView",
          align: "left"
        },
        xaxis: {
          categories: ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05", "Week 06", "Week 07"]
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        legend: {
          show: false
        },
        colors: ['#FF5733', '#33FF57'],
      }
    };
  }
};
</script>
