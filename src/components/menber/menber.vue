<template>
  <div>
    <div class="menber">
      <div class="menber-item" v-for="(item,index) in list" >
        <div class="menber-item-img">
          <img :src="item.image" alt="">
        </div>
        <div class="menber-item-content">
          <div class="text">商品名称</div>
          <div class="menber-price">
            <span class="price">商品价格</span>
            <button class="addCar" @click='addCars(item)'>加入购物车</button>
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
      list:[
        { 
          "id":1,
          "image":"http://www.pptok.com/wp-content/uploads/2012/08/xunguang-9.jpg"
        }, {
          "id":2,
          "image": "http://www.pptok.com/wp-content/uploads/2012/08/xunguang-9.jpg"
        }
      ]
    }
  },
  methods: {
    addCars(index){
      var idExist = this.$store.state.goodList.find((item)=>{
        return index.id == item.id
      })
      var goodlist = this.$store.state.goodList;
      if(!idExist){
        index.number=1
        this.$store.commit("addGoods", index);
      }else{
        var number=this.getIndex(index)
        this.$store.commit("changeGoods", number);
      }  
    },
    getIndex(index){
      var list = this.$store.state.goodList;
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === index.id) {
          return i
        }
      }
    }
  },
  mounted() {
    
  },
}
</script>

<style>
.menber{
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
}
.menber-item{
  display: flex;
  margin:0.5rem;
  border:1px solid #000;
}
.menber-item-img{
  flex:0 0 25%;
  padding:0.3rem;
}
.menber-item-img>img{
  width:100%;
  height:100%;
}
.menber-item-content{
  flex:1;
  padding:0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menber-price{
  position: relative;
}
.addCar{
  position: absolute;
  bottom:0;
  right:0;
}
</style>