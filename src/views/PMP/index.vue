<template>
  <div class="app-container" :style="{height: height + 'px'}">
    <el-container>
      <el-aside width="200px" style="height: 99vh;">
        <div style="padding: 10px">
          <el-button @click="handleClick1">显示答案</el-button>
          <el-button type="success" @click="handleClick2">隐藏答案</el-button>
        </div>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-button @click="handleClick(1)">第一章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(2)">第二章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(3)">第三章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(4)">第三章综合</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(5)">第四章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(6)">第四章综合</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(7)">第五章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(8)">第六章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(9)">第七章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(10)">第八章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(11)">第九章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(12)">第十章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(13)">第十一章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(14)">第十二章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(15)">第十三章</el-button>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div class="main_content">
          <component :is="componentId"></component>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Three_z from "./Three_z";
import Four from "./Four";
import Four_z from "./Four_z";
import Five from "./Five";
import Sex from "./Sex";
import Seven from "./Seven";
import Eight from "./Eight";
import Nine from "./Nine";
import Ten from "./Ten";
import Eleven from "./Eleven";
import Twelve from "./Twelve";
import Thirteen from "./Thirteen";

export default {
  components: {
    One,
    // Two,
    // Three,
    // Three_z
  },
  name: "",
  methods: {
    handleClick(val) {
      switch (val) {
        case 1:
          this.componentId = One;
          break;
        case 2:
          this.componentId = Two;
          break;
        case 3:
          this.componentId = Three;
          break;
        case 4:
          this.componentId = Three_z;
          break;
        case 5:
          this.componentId = Four;
          break;
        case 6:
          this.componentId = Four_z;
          break;
        case 7:
          this.componentId = Five;
          break;
        case 8:
          this.componentId = Sex;
          break;
        case 9:
          this.componentId = Seven;
          break;
        case 10:
          this.componentId = Eight;
          break;
        case 11:
          this.componentId = Nine;
          break;
        case 12:
          this.componentId = Ten;
          break;
        case 13:
          this.componentId = Eleven;
          break;
        case 14:
          this.componentId = Twelve;
          break;
        case 15:
          this.componentId = Thirteen;
          break;
        case 16:
          break;
        case 17:
          break;
      }
    },
    handleClick1() {
      document.querySelectorAll(".analysis").forEach(res => {
        res.style.display = "block";
      });
    },
    handleClick2() {
      document.querySelectorAll(".analysis").forEach(res => {
        res.style.display = "none";
      });
    }
  },
  data() {
    return {
      title: "",
      height: window.innerHeight - 35,
      componentId: "One"
    };
  }
};
</script>

<style scoped >
.app-container {
  /* border: 1px red solid; */
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
/* .el-main{
    height: 100%;
    overflow-y: auto;
} */
.main_content {
  height: 95vh;
  /* border: 1px red solid; */
  overflow: auto;
  padding-left: 20px;
}
.el-aside {
  overflow-x: hidden;
  border-right: 1px solid #ccc;
}
.el-button {
  margin: 5px;
}
</style>