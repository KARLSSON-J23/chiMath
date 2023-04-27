
/*
let rect= document.getElementById("hour-time").getClientRects();
let center={
    x:rect.left+(rect.right-rect.left)/2,
    y:rect.top+(rect.bottom-rect.top)/2
}

let deg=Math.atan2(center.y-ev.pageY,center.x-ev.pageX)*(180/Math.PI);

divOne.css({
    "transform":'rotate(${deg}deg)'
})*/

/*
// 取得指針元素
var pointer = document.getElementById("pointer");

// 設定指針元素的初始位置
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
pointer.onmousedown = dragMouseDown;

function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // 設定初始位置
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // 計算新位置
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  // 設定新位置
  pointer.style.top = (pointer.offsetTop - pos2) + "px";
  pointer.style.left = (pointer.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  // 停止拖動
  document.onmouseup = null;
  document.onmousemove = null;
}

*/
   




(function(){
    window.onload=initNumXY(200, 160, 40,40);
    
// 取得時針、分針、秒針元素
var hourHand = document.getElementById("hour-line");
var minuteHand = document.getElementById("minute-line");
var secondHand = document.getElementById("second-line");

// 設定時針、分針、秒針是否正在拖曳的旗標
var isHourDragging = false;
var isMinuteDragging = false;
var isSecondDragging = false;

// 監聽時針、分針、秒針的滑鼠按下事件
hourHand.onmousedown = function(event) {
  // 設定時針正在拖曳
  isHourDragging = true;
};

minuteHand.onmousedown = function(event) {
  // 設定分針正在拖曳
  isMinuteDragging = true;
};

secondHand.onmousedown = function(event) {
  // 設定秒針正在拖曳
  isSecondDragging = true;
};

// 監聽滑鼠放開事件
document.onmouseup = function(event) {
  // 設定時針、分針、秒針都不再拖曳
  isHourDragging = false;
  isMinuteDragging = false;
  isSecondDragging = false;
};

// 監聽滑鼠移動事件
document.onmousemove = function(event) {
  // 如果時針正在拖曳
  if (isHourDragging) {
    // 計算滑鼠與時針之間的角度
    var hourAngle = Math.atan2(event.clientY - hourHand.offsetTop, event.clientX - hourHand.offsetLeft) * 180 / Math.PI;
    // 設定時針的旋轉角度
    hourHand.style.transform = "rotate(" + hourAngle + "deg)";
  }
  else if(isMinuteDragging){
    // 計算滑鼠與分針之間的角度
    var minAngle = Math.atan2(event.clientY - minuteHand.offsetTop, event.clientX - minuteHand.offsetLeft) * 180 / Math.PI;
    // 設定分針的旋轉角度
    minuteHand.style.transform = "rotate(" + minAngle + "deg)";
  }
  else if(isSecondDragging){
    // 計算滑鼠與秒針之間的角度
    var secAngle = Math.atan2(event.clientY - secondHand.offsetTop, event.clientX - secondHand.offsetLeft) * 180 / Math.PI;
    // 設定秒針的旋轉角度
    secondHand.style.transform = "rotate(" + secAngle + "deg)";
  }
}

    
    setInterval(setTime, 1000);
    
    function initNumXY(R, r, w, h){
        var numXY = [
            {
                "left" : R + 0.5 * r - 0.5 * w,
                "top" : R - 0.5 * r * 1.73205 - 0.5 * h
            },
            {
                "left" : R + 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R - 0.5 * r - 0.5 * h
            },
            {
                "left" : R + r - 0.5 * w,
                "top" : R - 0.5 * h
            },
            {
                "left" : R + 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R + 0.5 * r - 0.5 * h
            },
            {
                "left" : R + 0.5 * r - 0.5 * w,
                "top" : R + 0.5 * r * 1.732 - 0.5 * h
            },
            {
                "left" : R - 0.5 * w,
                "top" : R + r - 0.5 * h
            },
            {
                "left" : R - 0.5 * r - 0.5 * w,
                "top" : R + 0.5 * r * 1.732 - 0.5 * h
            },
            {
                "left" : R - 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R + 0.5 * r - 0.5 * h
            },
            {
                "left" : R - r - 0.5 * w,
                "top" : R - 0.5 * h
            },
            {
                "left" : R - 0.5 * r * 1.73205 - 0.5 * w,
                "top" : R - 0.5 * r - 0.5 * h
            },
            {
                "left" : R - 0.5 * r - 0.5 * w,
                "top": R - 0.5 * r * 1.73205 - 0.5 * h
            },
            {
                "left" : R - 0.5 * w,
                "top" : R - r - 0.5 * h
            }
        ];
        var clock = document.getElementById("clock");
        for(var i = 1; i <= 12; i++){
            if(i%3 == 0) {
                clock.innerHTML += "<div class='clock-num em_num'>"+i+"</div>";
            } else {
                clock.innerHTML += "<div class='clock-num'>" + i + "</div>";
            }
        }
        var clock_num = document.getElementsByClassName("clock-num");
        for(var i = 0; i < clock_num.length; i++) {
            clock_num[i].style.left = numXY[i].left + 'px';
            clock_num[i].style.top = numXY[i].top + 'px';
        }
        for(var i = 0; i < 60; i++) {
            clock.innerHTML += "<div class='clock-scale'> " +
                "<div class='scale-hidden'></div>" +
                "<div class='scale-show'></div>" +
                "</div>";
        }
        var scale = document.getElementsByClassName("clock-scale");
        for(var i = 0; i < scale.length; i++) {
            scale[i].style.transform="rotate(" + (i * 6 - 90) + "deg)";
        }
    }
})();
