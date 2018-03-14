<style lang="scss">
.Download__icon-wrapper {
  padding: 146px 0 74px 0;
  text-align: center;
  img {
    width: 254px;
  }
}

.Download__btn-wrap {
  padding: 0 128px;
  button {
    width: 100%;
    height: 80px;
    line-height: 80px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    border-radius: 8px;
    background-color: #2A6BE2;
  }
}
</style>
<template>
<div class="Download">
  <div class="Download__icon-wrapper">
    <img src="./app_icon.png" alt="应用">
  </div>
  <div class="Download__btn-wrap">
    <button>安卓下载</button>
  </div>
  <div>
    {{ width }}
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      width: document.documentElement.clientWidth,
    };
  },
};
</script>
