<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :xs="24" :lg="24">
        <div id="timeinfo" class="frontend">
          当前Case状态
        </div>
         </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :lg="12">
        <div id="CasePieChart" class="frontend">
          <StatPieChart> </StatPieChart>
        </div>
      </el-col>
      <el-col :xs="24" :lg="12">
        <div id="CaseLineChart" class="frontend">
          <StatLineChart> </StatLineChart>
        </div>
      </el-col>
    </el-row>
    <!-- <HelloWorld> </HelloWorld> -->
  </div>
</template>

<script>
// @ is an alias to /src
import StatPieChart from "@/components/StatPieChart.vue";
import StatLineChart from "@/components/StatLineChart.vue";

// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    StatPieChart,
    StatLineChart,
  },
};
</script>


<style scoped>
.home {
  height: 600px;
}
.frontend {
  height: 600px;
}
#CasePieChart {
  justify-content: center;
}
#CaseLineChart {
  justify-content: center;
}

#timeinfo{
  float: left;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  text-align: center;
  color: white;
}
</style>