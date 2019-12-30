<template>
  <div class="content-box" >
    <p class="message-title">{{param.message}}</p>
    <p class="txt-tip message-tip" v-if="param.tip">{{param.tip}}</p>
    <div class="btn-box">
      <button @click="submit(param.submit)" :class="param.btnClassName+' btn-ok button '" :style="param.cancel?'':'width:268px;'">确认</button><button @click="cancel(param.cancel)" :class="'button '+param.btnClassName" v-if="param.cancel">取消</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'confirm-dialog',
    props:{
        param:Object
    },
    data() {
        return {

        }
    },
    methods: {

        submit:function (call) {
            this.$closeDialog();
            if(typeof(call) === 'function'){
              call();
            }
        },
        cancel:function (call) {
            this.$closeDialog();
            if(typeof(call)  === 'function'){
              call();
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  *{padding:0;margin:0;}
  .content-box{
    padding:0 10px;
    color:#333;
    .btn-box{
      text-align: center;
      padding:20px 0 30px 0;
    }
    .message-title{
      font-size: 1.4rem;
      margin-top:10px;
    }
    .message-tip{
      color:#999;
      font-size: 1.2rem;
    }
    .txt-tip{
      margin-top:10px;
    }
    .btn-ok{
      margin-right:20px;
    }
    p{
      text-align: center;
      min-width:430px;
    }

  }
  .button{
    display:inline-block;
    text-align: center;
    cursor:pointer;
    outline:none;
    box-sizing: content-box;
    line-height: 2.6rem;
    height:2.6rem;
    padding:0 .5rem;
    min-width:5.2rem;
    border:1px solid #999;
    background:#FFF;
    font-size: 1rem;
    border-radius:2px;
  }
  .button:hover{
    color:#47B8FF;
    border-color:#47B8FF;
  }
</style>
