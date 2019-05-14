<template>
  <div>
    <div class="shopcar">
      <div class="shopcar-item" v-for="(item,index) in carslist">
        <div class="shopcar-item-img">
          <img :src="item.image" alt="">
        </div>
        <div class="menber-item-content">
          <span class="content-text">商品数量</span>
          <div class="content-detail">
            <div class="remove" @click="removeNumber(item)">-</div>
            <input class="shop-text" :value="item.number"></input>
            <div class="add" @click="addNumber(item)">+</div>
          </div>
        </div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carslist:[]
    }
  },
  methods: {
    add(){
        this.carslist= this.$store.state.goodList
      },
    removeNumber(index){
      var number=this.getI(index)
      var newNumber=this.$store.commit("remNumber", number);
    },
    addNumber(index){
      var number = this.getI(index)
      var newNumber=this.$store.commit("addNumber", number);
    },
    getI(index) {
      var carlist = this.$store.state.goodList;
      for (let i = 0; i < carlist.length; i++) {
        if (carlist[i].id === index.id) {
          return i
        }
      }
    }
  },
  mounted() {
    this.add()
  },
  watch: {
    data:{
       handler(val, oldVal) {
        console.log('深度监听', val.number, oldVal.number)
      },
      deep: true
    }
  },
}
</script>
<style>
.shopcar{
  padding-bottom: 2rem;
}
.shopcar-item{
   display: flex;
  margin:0.5rem;
  border:1px solid #000;
}
.shopcar-item-img{
  flex:0 0 25%;
  padding:0.3rem;
}
.shopcar-item-img>img{
  width:100%;
  height:100%;
}
.menber-item-content{
  padding:0.3rem;
}
.content-text,.remove,.add,.content-detail,.shop-text{
  display: inline-block
}
.shop-text{
  width:1.5rem;
  text-align: center
}
</style>