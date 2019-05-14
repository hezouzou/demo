import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodList: localStorage["goodList"] ? JSON.parse(localStorage["goodList"]) : [] 
  },
  mutations: {
    addGoods: (state, index) => {
      state.goodList.push(index);
      localStorage.setItem('goodList', JSON.stringify(state.goodList))
      },
    changeGoods:(state,i)=>{
      state.goodList[i].number+=1
    },
    remNumber:(state,i)=>{
      if (state.goodList[i].number>0){
        state.goodList[i].number--
        localStorage.setItem('goodList', JSON.stringify(state.goodList))
      }else{
        state.goodList.splice(i,1)
        localStorage.setItem('goodList', JSON.stringify(state.goodList))
      }  
    },
    addNumber: (state, i) => {
      // console.log(state.goodList[i])
      state.goodList[i].number+=1
      localStorage.setItem('goodList', JSON.stringify(state.goodList))
    }
  },
  actions: {

  }
})