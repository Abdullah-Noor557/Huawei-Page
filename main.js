
var leftItem = document.getElementById('item0'),
    rightItem = document.getElementById('item1');

    function clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
      }

;(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("scroll", function(){
  
  leftItem.style.transform = "translateY(-" + clamp(window.pageYOffset*4 , 0 , 600) + "px)";
  rightItem.style.transform = "translateY(" + clamp(window.pageYOffset*2 , 0 , 600) + "px)";
})