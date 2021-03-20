<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
   export default {
       name: "",
       props:['model', 'rules'],
       provide(){
           return{
               zFormObj: this //将整个自己抛出去 
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