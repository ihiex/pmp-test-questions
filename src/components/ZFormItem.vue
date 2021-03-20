<template>
  <div>
    <label>{{label}}</label>
    <div class="form_item">
      <slot></slot>
    </div>
    <p v-if="errorStatus" style="color: red">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from "async-validator";

export default {
  name: "ZFormItem",
  inject: ["zFormObj"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: "0"
    }
  },
  methods: {
    handleValidator() {
      console.log("触发了");
      //有两个input!  一个用户名 一个密码
      const rules = this.zFormObj.rules[this.prop];
      const value = this.zFormObj.model[this.prop];

      // 描述对象
      const descriptor = { [this.prop]: rules };
      const schema = new Schema(descriptor);
      schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
          this.errorStatus = true;
        } else {
          this.errorMessage = "";
          this.errorStatus = false;
        }
      });
    },
  },
  mounted() {
    this.$on("validator", this.handleValidator);
  },
  data() {
    return {
      title: "",
      errorStatus: false,
      errorMessage: ""
    };
  }
};
</script>

<style scoped>
.form_item {
  display: inline-block;
}
</style>