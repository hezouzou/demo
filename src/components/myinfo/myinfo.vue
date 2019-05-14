<template>
  <div>
    <div>
      欢迎回来：{{name}}
    </div>
    <button @click="login">退出</button>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:''
    }
  },
  methods: {
    getName(){
      if(sessionStorage['name']){
        this.name = sessionStorage.getItem('name')
      }else{
        this.$router.push('/')
      }
    },
    login(){
      sessionStorage.clear()
      this.$router.push('/')
    }
  },
  mounted() {
    this.getName()
  },
}
</script>
<style>
</style>