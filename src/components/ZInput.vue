<template>
    <div>
        <input :type="type" :value="value" @input="handleInput">
    </div>
</template>

<script>
   export default {
       name: "ZInput",
       props:{
           type:{
               type: String,
               default: 'text'
           },
           value: {
               type: String,
            //    required: true,
               default: ''
           }
       },
        methods:{
            handleInput(e){
                e = e || window.event;
                this.$emit('input', e.target.value)
                this.$parent.$emit('validator')
            }
        },
       data(){
           return{
               title: "",
           }
       }
    }
</script>

<style scoped lang="scss">


</style>