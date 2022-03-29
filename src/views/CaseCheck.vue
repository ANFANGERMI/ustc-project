<template>
  <div>
    <el-row gutter="5">
      <el-col :xs="24" :lg="18">
        <div id="CaseInput" class="frontend">
          <el-descriptions title="Case信息">
            <el-descriptions-item label="安全等级">L2D</el-descriptions-item>
            <el-descriptions-item label="发生时间"
              >2021-01-09</el-descriptions-item
            >
            <el-descriptions-item label="发生城市">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
              <el-tag size="small">高风险</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="详细地址"
              >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
            >
          </el-descriptions>
        </div>
      </el-col>
      <el-col :xs="24" :lg="6">
        <div id="CaseInput" class="frontend">
          <el-button
            type="primary"
            id="addCase"
            @click="dialogFormVisible = true"
            >添加case</el-button
          >
          <el-dialog title="详细信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="Case名字" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-button
            type="primary"
            id="model_selected"
            @click="dialogTableVisible = true"
            >选择模型</el-button
          >

          <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
              <el-table-column
                property="date"
                label="日期"
                width="150"
              ></el-table-column>
              <el-table-column
                property="name"
                label="姓名"
                width="200"
              ></el-table-column>
              <el-table-column
                property="address"
                label="地址"
              ></el-table-column>
            </el-table>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <el-row gutter="5">
      <el-col :xs="24" :lg="18">
        <div id="AnalyticArea" class="frontend">
          <el-input
            id='casetitleinputarea'
            type="textarea"
            autosize
            placeholder="请输入Case类型"
            v-model="textarea1"
          >
          </el-input>
          <div style="margin: 20px 0"></div>
          <el-input
            id='caseinputarea'
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 20 }"
            placeholder="请输入Case内容"
            v-model="textarea2"
            rows=10
          >
          </el-input>
        </div>
      </el-col>
      <el-col :xs="24" :lg="6">
        <div id="CaseList" class="frontend"></div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      count: 0,
      activeNames: ["1"],
      radio: 1,
      textarea1: "",
      textarea2: "",
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    load() {
      this.count += 2;
    },
    handleChange(val) {
      console.log(val);
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
/* 大部件 */
.progresscircle {
  justify-content: center;
}
.frontend {
  margin: 10px 10px 5px 10px;
}
#infobox {
  font-size: 20px;
  color: white;
  float: left;
  padding-top: 60px;
  padding-left: 15px;
}
#CaseInput {
  margin-right: 10px;
  height: 100px;
  text-align: center;
  justify-content: center;
}
#AnalyticArea {
  height: 600px;
}
#CaseList {
  height: 600px;
  background-color: #00000060;
}

/* element元素 */
/* .el-collapse-item__header {
  background-color: #00000060;
  color: #303133;
} */
.el-descriptions {
  background-color: #00000060;
  color: #303133;
  float: left;
  height: 100px;
}
.el-descriptions-item {
  background-color: #00000060;
  color: white;
}
.el-progress {
  float: left;
  /* padding-left: 20px; */
  margin-left: 20px;
  margin-top: 10px;
}
.el-form {
  padding-top: 20px;
}
.el-button {
  margin-top: 20px;
  float: left;
}

.el-textarea {
  margin-top: 50px;
  width: 95%;
}
</style>