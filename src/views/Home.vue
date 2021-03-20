<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-button @click="getData">test</el-button>
    <el-button @click="getSearch">search</el-button>
    <el-button @click="getVedioUrl1">getVedioUrl</el-button>
    <div v-html="html" style="width:800px;height:800px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import http from '@/utils/http.js'
import { getBaidu, search ,getVedioUrl} from "@/api/home";

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  created(){
    this.getVedioUrl1()
  },
  methods: {
    getVedioUrl1(){
      getVedioUrl().then(res=>{
        let reg = new RegExp(/<iframe.*<\/iframe>/)
        // let h = document.createElement(res)
        // let s = h.querySelector('iframe')
        this.html = res.match(reg)[0]

        console.log(this.html)
        
      }).catch(error=>{
        console.log(error)
      })
    },
    getData() {
      // http.get('api').then(res=>{
      //   console.log(res)
      // }).catch(error=>{
      //   console.log(error)
      // })
      getBaidu()
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getSearch() {
      search(this.data).then(res=>{
        console.log(res)
      }).catch(error=>{
        console.log(error)
      })
    }
  },
  data() {
    return {
      data: {
        show: "title",
        tempid: 1,
        tbname: "article",
        mid: 1,
        dopost: "search",
        submit: "",
        keyboard: "庆余年"
      },
      html: null
    };
  }
};
</script>
