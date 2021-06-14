<template>
  <div class="app-container" :style="{ height: height + 'px' }">
    <el-container>
      <el-aside width="200px" style="height: 99vh">
        <div style="padding: 10px">
          <el-button @click="handleClick1">显示答案</el-button>
          <el-button type="success" @click="handleClick2">隐藏答案</el-button>
        </div>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-button @click="handleClick(0)">二模</el-button>
          </el-col>
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
            <el-button @click="handleClick(16)">第五章综合</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(8)">第六章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(17)">第六章综合</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(9)">第七章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(18)">第七章综合</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(10)">第八章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(19)">第八章综合</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(11)">第九章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(12)">第十章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(20)">第十章综合</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(13)">第十一章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(21)">第十一章综合</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(14)">第十二章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(15)">第十三章</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(22)">重点200题</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(23)">A第六版考试最新111题</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(24)">一模考试</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(25)"
              >第六版重点考试2020年A版</el-button
            >
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(26)">最重点200题第二套</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(27)"
              >第六版重点2020年C套120题</el-button
            >
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(28)">重点123</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(29)">重点200</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(30)">最重点200</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(31)">1</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(32)">2</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(33)">3</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(34)">4</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(35)">5</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(36)">6</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(37)">7</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(38)">8</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(39)">9</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(40)">10</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(41)">11</el-button>
          </el-col>
          <el-col :span="24">
            <el-button @click="handleClick(42)">12</el-button>
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
import Five_z from "./Five_z";
import Sex from "./Sex";
import Sex_z from "./Sex_z";
import Seven from "./Seven";
import Seven_z from "./Seven_z";
import Eight from "./Eight";
import Eight_z from "./Eight_z";
import Nine from "./Nine";
import Ten from "./Ten";
import Ten_z from "./Ten_z";
import Eleven from "./Eleven";
import Eleven_z from "./Eleven_z";
import Twelve from "./Twelve";
import Thirteen from "./Thirteen";
import yimo from "./yimo";
// import zhongdian from "./zhongdian";
import new1 from "./new111";
import A2020A from "./A2020A";
import A2020C from "./A2020C";
import Azuizhongdian from "./Azuizhongdian";
import zhongdian123 from "./zhongdian123";
import zhongdian200 from "./zhongdian200";
import zuixinzhongdian from "./zuixinzhongdian";
import ermo from "./ermo";
import zhongdian1 from "./pmp2/zhongdian1.vue";
import zhongdian2 from "./pmp2/zhongdian2.vue";
import zhongdian3 from "./pmp2/zhongdian3.vue";
import zhongdian4 from "./pmp2/zhongdian4.vue";
import zhongdian5 from "./pmp2/zhongdian5.vue";
import zhongdian6 from "./pmp2/zhongdian6.vue";
import zhongdian7 from "./pmp2/zhongdian7.vue";
import zhongdian8 from "./pmp2/zhongdian8.vue";
import zhongdian9 from "./pmp2/zhongdian9.vue";
import zhongdian10 from "./pmp2/zhongdian10.vue";
import zhongdian11 from "./pmp2/zhongdian11.vue";
import zhongdian12 from "./pmp2/zhongdian12.vue";

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
        case 0:
          this.componentId = ermo;
          break;
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
          this.componentId = Five_z;
          break;
        case 17:
          this.componentId = Sex_z;
          break;
        case 18:
          this.componentId = Seven_z;
          break;
        case 19:
          this.componentId = Eight_z;
          break;
        case 20:
          this.componentId = Ten_z;
          break;
        case 21:
          this.componentId = Eleven_z;
          break;
        case 22:
          // this.componentId = zhongdian;
          break;
        case 23:
          this.componentId = new1;
          break;
        case 24:
          this.componentId = yimo;
          break;
        case 25:
          this.componentId = A2020A;
          break;
        case 26:
          this.componentId = A2020C;
          break;
        case 27:
          this.componentId = Azuizhongdian;
          break;
        case 28:
          this.componentId = zhongdian123;
          break;
        case 29:
          this.componentId = zhongdian200;
          break;
        case 30:
          this.componentId = zuixinzhongdian;
          break;
          case 31:
          this.componentId = zhongdian1;
          break;
           case 32:
          this.componentId = zhongdian2;
          break;
           case 33:
          this.componentId = zhongdian3;
          break;
           case 34:
          this.componentId = zhongdian4;
          break;
           case 35:
          this.componentId = zhongdian5;
          break;
           case 36:
          this.componentId = zhongdian6;
          break;
           case 37:
          this.componentId = zhongdian7;
          break;
           case 38:
          this.componentId = zhongdian8;
          break;
           case 39:
          this.componentId = zhongdian9;
          break;
           case 40:
          this.componentId = zhongdian10;
          break;
           case 41:
          this.componentId = zhongdian11;
          break;
           case 42:
          this.componentId = zhongdian12;
          break;
      }
      this.$nextTick(function () {
        this.handleClick2();
      });
    },
    handleClick1() {
      document.querySelectorAll(".analysis").forEach((res) => {
        res.style.display = "block";
      });
    },
    //隐藏
    handleClick2() {
      document.querySelectorAll(".analysis").forEach((res) => {
        res.style.display = "none";
      });
    },
  },
  data() {
    return {
      title: "",
      height: window.innerHeight - 35,
      componentId: "One",
    };
  },
  mounted() {
    this.handleClick2();
  },
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
/* .question-content, .question-content-type-1, .right-question-content{
  text-align: left
} */
</style>