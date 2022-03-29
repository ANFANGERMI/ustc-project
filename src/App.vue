<template>
  <div id="app">
    <!-- 顶部导航 -->
    <div id="top-menu" class="frontend">
      <div id="userinfo">
        <div class="usernamebox">欢迎您,{{ username }}</div>
        <div class="demo-basic--circle">
          <div class="block" style="height: 60px">
            <el-avatar :size="50" shape="circle" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </div>
    </div>
    <!-- 左侧导航 -->
    <div id="left-menu" :class="'frontend ' + mobile_left">
        <i @click="toHome" id="home-btn" class="el-icon-s-home">首页</i>
      <!-- <div style="float:left;margin:20px 80px;color:white" @click="toHome" >首页</div> -->
      <i @click="showhideLeftmenu" id="left-btn" class="el-icon-menu"></i>
      <!-- 侧面菜单 -->
      <el-row class="tac">
        <el-col :span="24" style="margin-top: 60px">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#00000000"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-help"></i>
                <span>文本分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="toTextStaitics">
                  文本统计</el-menu-item
                >
                <el-menu-item index="1-2" @click="toCaseCheck"
                  >Case分析</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-share"></i>
              <span slot="title" @click="toModelManagement">模型管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title" @click="toDataManagement">数据管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-data"></i>
              <span slot="title" @click="toNoteBook">在线编程</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!-- 页面内容/Vue进行渲染的部分-->
    <div id="content" :class="mobile_content">
      <router-view></router-view>
      <div id="footer" class="frontend">滴滴安全策略</div>
    </div>
  </div>
</template> 


<script>
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      mobile_left: "",
      mobile_content: "",
      username: "YYB",
      userid: "D12345",
      circleUrl: "./assets/img/logo.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
    };
  },
  mounted() {
    console.log(this.screenWidth);
    this.changeDevice();
  },
  methods: {
    toNoteBook() {
      this.$router.push({ name: "NoteBook" });
    },
    toDataManagement() {
      this.$router.push({ name: "DataManagement" });
    },
    toCaseCheck() {
      this.$router.push({ name: "CaseCheck" });
    },
    toTextStaitics() {
      this.$router.push({ name: "TextStatistic" });
    },
    toModelManagement() {
      this.$router.push({ name: "ModelManagement" });
    },
    toHome() {
      this.$router.push({ name: "Home" });
    },
    changeDevice() {
      if (this.screenWidth <= 500) {
        this.mobile_left = "xs";
        this.mobile_content = "xs";
      }
    },
    showhideLeftmenu() {
      if (this.mobile_left == "") {
        this.mobile_left = "xs";
      } else {
        this.mobile_left = "";
      }
      //
      if (this.screenWidth > 500) {
        if (this.mobile_content == "") {
          this.mobile_content = "xs";
        } else {
          this.mobile_content = "";
        }
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo-basic--circle {
  float: right;
  height: 50px;
  width: 50px;
  margin-top: 4px;
}
/*   */
#userinfo {
  height: 60px;
  width: 150px;
  float: right;
  margin-right: 20px;
}
#home-btn{
  font-size: 16px;
  color: orange;
  float: left;
  margin-left: 70px;
  margin-top: 20px;
  display: flex;
}
#home-btn:hover{
  font-size: 17px;
  color: white;
  float: left;
  z-index: 1001;
}
.usernamebox {
  position: absolute;
  float: right;
  width: 100px;
  margin-right: 100px;
  padding-top: 20px;
  color: white;
}
</style>
