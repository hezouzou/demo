<template>
    <div class="tabbar">
      <div class="tabbar-items" v-for="item in list" @click="handle(item.path)">
        <div>{{item.name}}</div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {
          "name":"首页",
          "path":"index"
        }, {
          "name": "商品",
          "path": "menber"
        }, {
          "name": "购物车",
          "path": "shopcar"
        }, {
          "name": "我的",
          "path": "myinfo"
        }
      ]
    }
  },
  methods: {
    handle(item){
      this.$router.push(item)
    }
  },
}
</script>

<style>
  .tabbar{
    position: fixed;
    bottom:0;
    width:100%;
    height:2rem;
    display: flex;
    background: #dedede;
    line-height: 2rem;
  }
  .tabbar-items{
    flex:1;
    text-align: center;
  }
</style>