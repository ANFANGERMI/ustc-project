<template>
  <div id="datamanagement">
    <el-row :gutter="10">
      <el-col :xs="24" :lg="24" :span="24">
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
      </el-col>
      <el-col :xs="24" :lg="24" :span="24">
        <div class="frontend">
          <el-table
            :data="tableData"
            style="width: "
            height="800px"
            stripe="true"
          >
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="1200">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
            <el-table-column prop="didi_id" label="网约车" width="120">
            </el-table-column>
            <el-table-column prop="order_id" label="订单号" width="120">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="120">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>





<script>
export default {
  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      tableData: [
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address:
            "北京 上海 成都 是大势大势大势大势大势的上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address:
            "北京 上海 成都 是大势大势大势大势大势的上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address:
            "北京 上海 成都 是大势大势大势大势大势的上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address:
            "北京 上海 成都 是大势大势大势大势大势的上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address:
            "北京 上海 成都 是大势大势大势大势大势的上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address:
            "北京 上海 成都 是大势大势大势大势大势的上海市普陀区金沙江路 1518 弄",
          zip: "200333",
          didi_id: "231212",
          order_id: "123123",
          sex: "male",
        },
      ],
    };
  },
  methods: {
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#uploadbox{
  float: left;
  margin-left: 5px;
  margin-bottom: 10px;
}
</style>