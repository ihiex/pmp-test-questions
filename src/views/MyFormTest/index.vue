<template>
  <div>
    <!-- <div>{{value}}</div> -->
    <!-- <z-input :value="value" @input="value=arguments[0]"></z-input> -->
    <!-- <z-input v-model="value"></z-input> -->
    <z-form :model="form" :rules="rules">
      <z-form-item label="用户名" prop="name">
        <z-input v-model="form.name"></z-input>
      </z-form-item>
      <z-form-item label="密码" prop="password">
        <z-input v-model="form.password" type="password"></z-input>
      </z-form-item>
    </z-form>
    <!-- 演示 befroeRouteUpdate -->
    <div>{{id}}</div>
    <router-link to="/myFormTest/1">参数1</router-link>
    <router-link to="/myFormTest/2">参数2</router-link>
  </div>
</template>
<script>
import ZInput from "@/components/ZInput";
import ZFormItem from "@/components/ZFormItem";
import ZForm from "@/components/ZForm";

export default {
  components: {
    ZInput,
    ZFormItem,
    ZForm
  },
  props: ['id'],
  methods: {
    handleInput(val) {
      this.value = val;
    },
    // test1(){
    //     this.$router.push({name: 'myFormTest',params:{name: 2}})
    // },
    // test2(){
    //     this.$router.push({name: 'myFormTest',params:{name: 3}})
    // }
  },
  beforeRouteEnter (to, from, next) {
      // ...
      console.log("beforeRouteEnter"+to+from)
      next();
  },
  befroeRouteUpdate(to, from, next){
      console.log("befroeRouteUpdate"+to+from)
      next();
  },
  beforeRouteLeave (to, from, next) {
      // ...
      console.log("beforeRouteLeave"+to+from)
      next();
  },
  data() {
    return {
      title: "我的mini表单",
      value: "",
      form: {
        name: "",
        password: ""
      },
      ruleForm: {
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password:[
            { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
</style>