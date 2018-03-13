// 以iPhone为基准设计尺寸，为了方便转换，分子设为75
function setRemUnit() {
  const deviceWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = `${deviceWidth / 10}px`;
}
setRemUnit();
// 缩放布局视图时，重新计算font size
window.addEventListener('resize', setRemUnit);
// 从缓存中加载时，重新计算 font size
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    setRemUnit();
  }
});
