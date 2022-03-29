<template>
  <div id="text-analytic">
    <el-row :gutter="10">
      <el-col :xs="24" :lg="24" :span="24">
        <div id="datauploadbox" class="frontend">
          <div id="uploadbox">
            <el-upload
              class="upload-demo"
              ref="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :auto-upload="false"
            >
              <el-button slot="trigger" size="small" type="primary"
                >选取文件</el-button
              >
              <el-button
                style="margin-left: 10px"
                size="small"
                type="success"
                @click="submitUpload"
                >上传文件</el-button
              >
            </el-upload>
          </div>
          <!-- <div id="filename">当前文件:</div> -->
          <div id="analyticbtn">
            <el-button type="warning" round size="small">开始解析</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :lg="24" :span="24">
        <div id="textfeaturebox" class="frontend">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="TFIDF统计" name="first">TFIDF统计</el-tab-pane>
            <el-tab-pane label="词频统计" name="second">词频统计</el-tab-pane>
            <el-tab-pane label="词云图" name="third">词云图</el-tab-pane>
            <el-tab-pane label="关键词提取" name="fourth">关键词提取</el-tab-pane>
            <el-tab-pane label="TFIDF趋势分析" name="fifth">TFIDF趋势分析</el-tab-pane>
            <el-tab-pane label="词频趋势分析" name="sixth">词频趋势分析</el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
//import StatBarChart from "@/components/StatBarChart.vue";
// import StatPieChart from "@/components/StatPieChart.vue";

export default {
  data() {
    return {
      filename: "安全事件发生时录音片",
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>

<style scoped>
.frontend {
  height: 100px;
  margin: 10px 10px;
}
#textfeaturebox {
  height: 600px;
}

#datauploadbox {
  height: 80px;
}

#uploadbox {
  position: absolute;
  margin-top: 25px;
  margin-left: 20px;
}

#analyticbtn {
  position: absolute;
  /* padding-top: 25px; */
  margin-top: 25px;
  margin-left: 90%;
  float: left;
}

#tagpage {
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  position: absolute;
  float: left;
}
</style>