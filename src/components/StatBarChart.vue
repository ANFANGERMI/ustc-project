<template>
  <div id="barchartbox">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import "echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import { TitleComponent, AxisPointerComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([CanvasRenderer, BarChart, TitleComponent, AxisPointerComponent]);

export default {
  name: "StatBarChart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "dark",
  },
  data() {
    return {
      option: {
        title: {
          text: "各类安全事件发生频数",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      },
    };
  },
};
</script>




<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
#barchartbox {
  width: 100%;
  height: 100%;
}
</style>