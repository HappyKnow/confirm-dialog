<template>

    <div >
        <p>默认</p>
        <div class="container">
            <a @click="confirm1">删除</a>
        </div>
        <p>只有一个按钮的确认弹窗</p>
        <div class="container">
            <a @click="confirm2">删除</a>
        </div>
        <p>带有主副标题的提示信息</p>
        <div class="container">
            <a @click="confirm3">删除</a>
        </div>

    </div>

</template>

<script>
  import ConfirmDialog from '../lib/ConfirmDialog'
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {

            }
        },
      methods:{
        confirm1:function () {
          this.$openDialog({
            title:'提示',
            content:ConfirmDialog,
            param:{
              message:'确定要删除数据吗？',
              submit:function () {
                alert('删除成功！')
              },
              cancel:function () {

              }
            }
          })
        },
        confirm2:function () {
          this.$openDialog({
            title:'提示',
            content:ConfirmDialog,
            param:{
              message:'你的数据不存在，请确认后再试！',
              submit:function () {

              },

            }
          })
        },
        confirm3:function () {
          this.$openDialog({
            title:'提示',
            content:ConfirmDialog,
            param:{
              message:'是否删除该科目？',
              tip:'删除后与之关联的数据将一并删除',
              submit:function () {

              },
              cancel:function () {

              }

            }
          })
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    text-decoration:underline;
    cursor:pointer;
}

</style>
