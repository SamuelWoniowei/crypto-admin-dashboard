<template>
    <div class="bg-white p-4 rounded-xl">
        <apexcharts :options="chartOptions" :series="series" type="bar" height="285" />
    </div>
</template>

<script lang="ts">
import ApexCharts from "vue3-apexcharts";

export default {
    name: "CurvyBarChart",
    components: {
        apexcharts: ApexCharts
    },
    data() {
        return {
            series: [
                {
                    name: "Line 1",
                    data: [200, 400, 300, 750, 200, 600, 300, 750, 200]
                },
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "bar",
                    zoom: {
                        enabled: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                        borderRadius: 8,
                    }
                },
                dataLabels: {
                    enabled: false,  // Disable data labels inside the bars
                },
                stroke: {
                    show: false,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ["06", "07", "10", "12", "17", "18", "18", "10", "08"]
                },
             
                legend: {
                    show: false
                },
                colors: ['#3B82F6'],  // Set the bar color
            }
        };
    }
};
</script>