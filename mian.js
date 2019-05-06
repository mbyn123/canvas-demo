var yyy=document.getElementById('xxx');
var yyy=document.getElementById('xxx');
//设置画板大小在显示的屏幕中自适应
  var pagewidth=document.documentElement.clientWidth//获取当前屏幕的显示宽度
  var pageheight=document.documentElement.clientHeight//获取当前屏幕的显示高度
	yyy.width=pagewidth//将画板的宽度与获取的屏幕宽度绑定
	yyy.height=pageheight//将画板的高度与获取的屏幕宽度绑定
window.onresize=function(){//将此作用作用到全局
  var pagewidth=document.documentElement.clientWidth
  var pageheight=document.documentElement.clientHeight
	yyy.width=pagewidth
	yyy.height=pageheight
}
var context=yyy.getContext('2d');

var using=false
var lastPoint={x:undefined,y:undefined}//设置线的起点位置
//鼠标点击
yyy.onmousedown=function(a){
	var x=a.clientX
	var y=a.clientY
    if(eraserEnabled){
      using=true
      context.clearRect(x,y,30,30)//清除
    }else{
       using=true
       lastPoint={x:x,y:y}//获取线的起点位置
	   drawCircle(x,y,0)
    }
}
//鼠标移动
yyy.onmousemove=function(a){
    var x=a.clientX
	var y=a.clientY
  if(eraserEnabled){
    if(using){
      context.clearRect(x,y,30,30)
    }
    
  }else{
     if(using){
       var newPoint={x:x,y:y}//获取线的结束位置
	    drawCircle(x,y,0)
       drawline(lastPoint.x,lastPoint.y,newPoint.x,newPoint.y)//表示绘画路径 线的中起点和终点的值
       lastPoint=newPoint//将新的的起点和终点联系起来，画线
     }
  }
}
//鼠标松开
yyy.onmouseup=function(a){
    using=false
}       
//绘制圆形
function drawCircle(x,y,radius){//封装绘画圆形的函数
   context.beginPath();
   context.arc(x,y,radius,0,Math.PI*2)
   context.fill()                
   }
//绘画路径 线
function drawline(x1,y1,x2,y2){//封装画线的函数
//  context.beginPath();
  context.moveTo(x1,y1)//起点
  context.lineWidth=5
  context.lineTo(x2,y2)//终点
  context.stroke()
  context.closePath()
}

//点击橡皮檫
var eraserEnabled=false 
  eraser.onclick=function(){
  eraserEnabled=true
  actions.className="actions x"//改变标签名
 // eraserEnabled = !eraserEnabled//表示点击后变为false的反面，变为true
}
 //点击画笔
  brush.onclick=function(){
  eraserEnabled=false
  actions.className="actions"//改变标签名
  }

canvas.ontouchstart=function(){
  console.log('12')
}
  
canvas.ontouchmove=function(){
  console.log('12')
}  
