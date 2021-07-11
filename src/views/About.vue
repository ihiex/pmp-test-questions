<template>
  <div class="about">
    <div style="height: 40px; line-height:40px; width: 100%;">
      <span>模拟题：</span>
      <span style="display: inline-block; width: 120px"></span>
      <span>总分：</span>
      <span style="display: inline-block; width: 120px"></span>
      <span>答题者：</span>
    </div>
      <div class="query_box">
        <div v-for="index in 35" :key="index">
          <span style="margin-right: 10px">{{index}}</span>
          <span v-for="(item,index) in query" :key="index">
            <span>{{item.value}}:</span>
            <span class="rectangle"></span>
          </span>
        </div>
      </div>
      <div class="query_box">
        <div v-for="index in 35" :key="index">
          <span style="margin-right: 10px">{{index + 35}}</span>
          <span v-for="(item,index) in query" :key="index">
            <span>{{item.value}}:</span>
            <span class="rectangle"></span>
          </span>
        </div>
      </div>
      <div class="query_box">
        <div v-for="index in 35" :key="index">
          <span style="margin-right: 10px">{{index + 70}}</span>
          <span v-for="(item,index) in query" :key="index">
            <span>{{item.value}}:</span>
            <span class="rectangle"></span>
          </span>
        </div>
      </div>
      <!-- <div class="query_box">
        <div v-for="index in 35" :key="index">
          <span style="margin-right: 10px">{{index + 105}}</span>
          <span v-for="(item,index) in query" :key="index">
            <span>{{item.value}}:</span>
            <span class="rectangle"></span>
          </span>
        </div>
      </div>
      <div class="query_box">
        <div v-for="index in 35" :key="index">
          <span style="margin-right: 10px">{{index + 140}}</span>
          <span v-for="(item,index) in query" :key="index">
            <span>{{item.value}}:</span>
            <span class="rectangle"></span>
          </span>
        </div>
      </div>
      <div class="query_box">
        <div v-for="index in 35" :key="index">
          <span style="margin-right: 10px">{{index+175}}</span>
          <span v-for="(item,index) in query" :key="index">
            <span>{{item.value}}:</span>
            <span class="rectangle"></span>
          </span>
        </div>
      </div> -->
  </div>
</template>
<script>
export default {
  methods:{},
  data(){
    return{
      query:[
        {value: 'A', label: '□'},
        {value: 'B', label: '□'},
        {value: 'C', label: '□'},
        {value: 'D', label: '□'},
      ]
    }
  }
}
</script>
<style lang="scss">
  .about{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    font-size: 18px;
    .query_box{
      display: inline-block;
      // border: solid 1px red;
      height: 28px;
      line-height: 28px;
      width: 220px;
      .rectangle{
        display: inline-block;
        height: 10px;
        width: 20px;
        border: solid 2px #ccc;
      }
    }
  }
</style>
