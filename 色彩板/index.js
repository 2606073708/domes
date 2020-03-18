(function (window){
  let that;
  class Palette {
    constructor (count, colors){
      that = this;
      this.count = count;
      this.colors = colors;
      this.init();
    }
    init(){
      let container = document.querySelector('.container');
      for(let i = 0; i < this.count; i++){
        let div = document.createElement('div');
        div.classList.add('items');
        div.onmouseover = this.mouseover;
        div.onmouseout = this.mouseout;
        container.appendChild(div);
      }
    }
    // 鼠标移入
    mouseover(){
      let index = Math.floor(Math.random() * that.colors.length);
      this.style.backgroundColor = that.colors[index];
    }
    // 鼠标移出
    mouseout(){
      this.style.backgroundColor = '#1d1d1d';
    }
  }
  window.Palette = window.Palette || Palette;
})(window)