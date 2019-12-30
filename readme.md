# confirm-dialog

基于vue的确认提示弹窗

## 使用

安装
``` bash
npm install confirm-dialog -S
```

使用组件
```
 import ConfirmDialog from 'confirm-dialog';

   this.$openDialog({
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
```
组件依赖base-dialog基础弹窗组件$openDialog()方法
具体使用请参考base-dialog

组件属性
```
message:<String>主要提示信息,
tip:<String>小字说明，进一步解释提示信息,
submit:<function> 选填，确认按钮点击后触发事件,不填时默认显示确认按钮
cancel:<function> 选填，取消按钮点击后触发事件，不填时不显示取消按钮
btnClassName:<String>选填，按钮样式类名
```

## 效果
![image](https://raw.githubusercontent.com/HappyKnow/confirm-dialog/master/screen.png)