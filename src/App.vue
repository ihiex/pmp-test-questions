<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    // HelloWorld
  },
};
</script>

<style>
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
.questions-content {
  text-align: left;
}
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.analysis > :nth-child(1),
.analysis > :nth-child(2),
.analysis > :nth-child(3),
.analysis > :nth-child(4) {
  display: none;
}
</style>
