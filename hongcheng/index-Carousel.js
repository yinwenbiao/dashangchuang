/*获取属性*/
var oBanner=document.getElementsByTagName('nav')
var oImg=document.getElementById('img');
var oLeftBtn=document.getElementById('left');
var oRightBtn=document.getElementById('right');
var oDots=document.getElementById('dots');
var oLis=oDots.getElementsByTagName('li');
/*定义图片*/
var arrBanner=["images/banner01.jpg","images/banner02.jpg"]
for(var i=0;i<arrBanner.length;i++){
	oDots.innerHTML+="<li></li>";
}
var num=0;
oLis[num].className='active';
function auto(){/*添加事件*/
	oImg.src=arrBanner[num];
	for (var i = 0; i < arrBanner.length; i++) {
		oLis[i].className=""
	}
	oLis[num].className="active"
}
// 添加右左点击事件
oRightBtn.onclick=function(){
	num++
	if (num>arrBanner.length-1) {
		num=0;
	}
	auto()
}
// 添加左左点击事件
oLeftBtn.onclick=function(){
	num--
	if (num<0) {
		num=arrBanner.length-1;
	}
	auto()
}
// 添加小圆点的点击事件
for(var i=0;i<oLis.length;i++){
	oLis[i].index=i;
	oLis[i].onclick=function(){
		oImg.src=arrBanner[this.index];
		for (var i = 0; i <arrBanner.length; i++) {
			oLis[i].className=""
		}
		oLis[this.index].className="active"
		num=this.index;
	}
}
// 设置定时器每两秒点击一次右边的按钮
setInterval(function(){
oRightBtn.onclick()
},2000)
// 页脚点击事件
var oul=document.getElementById('oul')
var oList=oul.getElementsByTagName("li");
var oImgS=document.getElementsByTagName('section')[0];
var footleft=document.getElementById('footleft');
var footright=document.getElementById('footright');
oul.innerHTML+=oul.innerHTML
oul.style.width=oList[0].offsetWidth*(oList.length+1)+"px";
var timers=null;
var speed=2;		
function moveFn(){
	if(oul.offsetLeft<-oul.offsetWidth/2){
		oul.style.left=0
	}
	oul.style.left=oul.offsetLeft-speed+"px"
}
timers=setInterval(moveFn,30)
oImgS.onmouseover=function(){
	clearInterval(timers)
}
oImgS.onmouseout=function(){
	timers=setInterval(moveFn,30)
}
// 左点击事件
footleft.onclick=function(){
	if (oul.offsetLeft<-1800) {
		oul.style.left=0
	}
	oul.style.left=oul.offsetLeft-300+"px"
}
footright.onclick=function(){
	if (oul.offsetLeft>=0) {
		oul.style.left=-2100+'px'
	}
	oul.style.left=oul.offsetLeft+300+"px"
}
