<template>
<div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body,
div,
span,
h1,h2,h3,h4,h5,h6,
p,
a,
em,
img,
dd,dl,dt,
li,ol,ul,
form,label,table,tbody,tr,th,td,
input, button {
    margin: 0;
    padding: 0;
    border: 0;
}
body {
    font-size: 32px;
    background: #f6f6f6;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /* 点击链接或者按钮时，取消高亮效果 */
    /* -webkit-tap-highlight-color: transparent; */
}
/* 取消显示下划线 */
a, a:active, a:hover, a:focus, a:visited {
    text-decoration: none;
}
/* 点击时，禁止显示菜单 */
a, img{
    -webkit-touch-callout: none;
}
/* 取消显示列表样式 */
ol, ul, li{
    list-style:none;
}
textarea, input[type="password"], input[type="text"], button {
    resize: none;
    outline: 0;
    -webkit-appearance: none;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}

#app {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-image: url('./assets/background.png');
  background-size: 100% 100%;
}
@media (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  #app {
  position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url('./assets/background_x.png');
    background-size: 100% 100%;
  }
}
</style>
