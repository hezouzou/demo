<template>
    <div class="login">
        <div class="login-content">
            <div class="login-item">
              <span class="login-text">账号：</span>
              <input type="text" class="login-input" v-model="name" @blur='getName'>
              <span class="hint">{{Nametext}}</span>
            </div>
            <div class="login-item">
              <span class="login-text">密码：</span>
              <input type="password" class="login-input" v-model="pwd" @blur='getPwd'>
              <span class="hint">{{Pwdtext}}</span>
            </div>
            <button class="button" @click='handle'>登陆</button>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        name:'',
        pwd:'',
        Nametext:'',
        Pwdtext:'',
        namehint:false,
        pwdhint: false,
      }
    },
    methods: {
      getName(){
        var reg= /^[a-zA-Z0-9_-]{4,16}$/;
        if(this.name==''){
          this.Nametext='账号不能为空'
        }else if(!reg.test(this.name)){
          this.Nametext='账号不符合规范'
        }else{
          this.Nametext='';
          this.namehint=true
        }
      },
      getPwd(){
        var reg = /^[a-zA-Z0-9_-]{6,16}$/;
        if (this.pwd == '') {
          this.Pwdtext = '密码不能为空'
        } else if (!reg.test(this.pwd)) {
          this.Pwdtext = '密码不符合规范'
        } else {
          this.Pwdtext=''
          this.pwdhint = true
        }
      },
      handle(){
        if(this.namehint==true&&this.pwdhint==true){
          sessionStorage.setItem('name',this.name)
          this.$router.push('/index')
        }
      }
    },
  }
</script>

<style>
.login{
  height:100%;
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-content{
  height:15rem;
  width: 20rem;
  border: 1px solid #000;
  border-radius: 5%;
  position: relative;
}
.login-item{
  display: flex;
  padding: 1.5rem;
  padding-bottom: 0.2rem;
}
.login-item:nth-child(3){
  padding-top:0;
}
.login-text{
  flex:0 0 20%;
}
.login-input{
  width:100%;
  border: 1px solid #000;
  padding-left:.5rem;
  height: 1.5rem;
}
.button{
  position: absolute;
  width:50%;
  height:2rem;
  bottom:4rem;
  margin-left: 25%;

}
.hint{
  text-align: center;
  color: red;
  flex:0 0 15%;
  font-size: 0.3rem
}
</style>