/*获取属性*/
var oBanner = document.getElementById('phone')
var oImg = document.getElementById('img');
var oLeftBtn = document.getElementById('left');
var oRightBtn = document.getElementById('right');
var oDots = document.getElementById('dots');
var oLis = oDots.getElementsByTagName('li');
/*定义图片*/
var arrBanner = ["WorkingSketch/images/banner01.jpg", "WorkingSketch/images/banner02.jpg", "WorkingSketch/images/banner03.jpg", "WorkingSketch/images/banner04.jpg", "WorkingSketch/images/banner05.jpg"]
for(var i = 0; i < arrBanner.length; i++) {
	oDots.innerHTML += "<li></li>";
}
var num = 0;
oLis[num].className = 'active';

function auto() { /*添加事件*/
	oImg.src = arrBanner[num];
	for(var i = 0; i < arrBanner.length; i++) {
		oLis[i].className = ""
	}
	oLis[num].className = "active"

}
oImg.onclick=function(){
	window.open('product.html');
}
// 添加右左点击事件
oRightBtn.onclick = function() {
	num++
	if(num > arrBanner.length - 1) {
		num = 0;
	}
	auto()
}
// 添加左左点击事件
oLeftBtn.onclick = function() {
	num--
	if(num < 0) {
		num = arrBanner.length - 1;
	}
	auto()
}
// 添加小圆点的点击事件
for(var i = 0; i < oLis.length; i++) {
	oLis[i].index = i;
	oLis[i].onclick = function() {
		oImg.src = arrBanner[this.index];
		for(var i = 0; i < arrBanner.length; i++) {
			oLis[i].className = ""
		}
		oLis[this.index].className = "active"
		num = this.index;
	}
}
// 设置定时器每两秒点击一次右边的按钮
setInterval(function() {
	oRightBtn.onclick()
}, 2000)



// var aside=document.getElementsByTagName('aside')[0]
// // console.log(aside);
// var oul=aside.getElementsByTagName('ul')
// // console.log(oul);
var arr1=['#42bff4','#3cce88','#fd933a','#d05a4f','#63c8f9']
var button=document.getElementsByClassName('button')[0]
var span=button.getElementsByTagName('span')
// // console.log(button);
// // console.log(span);

// var cai=document.getElementsByClassName('cai1')[0];
// for (var i = 0; i < span.length; i++) {
// 			span[i].cont=i
// 			// console.log(bimg[i]);
// 			span[i].onclick=function(){
// 				for (var i = 0; i < oul.length; i++) {

// 					span[0].className="button1"
// 					span[i].style.background=''
// 					span[i].style.color=''
// 					oul[i].style.display='none';
// 				}
				

// 				oul[this.cont].style.display='block';
// 				// console.log('test');
// 				// console.log(arr[this.cont]);
// 				this.style.backgroundColor=arr[this.cont]
// 				this.style.color="#fff"
// 				var that=this
// 				cai.onclick=function(){
// 					// console.log(oul[that.cont]);
// 					if (oul[that.cont].offsetLeft<=-1200) {
// 						oul[that.cont].style.left=0
// 					}else{
// 						oul[that.cont].style.left=oul[that.cont].offsetLeft-1200+"px"
// 					}
					
// 				}
// 			}
// 			span[0].onclick()
// 		}

			var arr = [
				['WorkingSketch/images/love1001.jpg', "WorkingSketch/images/love1002.jpg", "WorkingSketch/images/love1003.jpg", "WorkingSketch/images/love1004.jpg", "WorkingSketch/images/love1005.jpg", "WorkingSketch/images/love1006.jpg", "WorkingSketch/images/love1007.jpg", "WorkingSketch/images/love1008.jpg"],
				['WorkingSketch/images/love2001.jpg', "WorkingSketch/images/love2002.jpg", "WorkingSketch/images/love2003.jpg", "WorkingSketch/images/love2004.jpg", "WorkingSketch/images/love2005.jpg", "WorkingSketch/images/love2006.jpg"],
				['WorkingSketch/images/love3001.jpg', "WorkingSketch/images/love3002.jpg", "WorkingSketch/images/love3003.jpg", "WorkingSketch/images/love3004.jpg", "WorkingSketch/images/love3005.jpg", "WorkingSketch/images/love3006.jpg", "WorkingSketch/images/love3007.jpg", "WorkingSketch/images/love3008.jpg"],
				['WorkingSketch/images/love4001.jpg', "WorkingSketch/images/love4002.jpg", "WorkingSketch/images/love4003.jpg", "WorkingSketch/images/love4004.jpg", "WorkingSketch/images/love4005.jpg", "WorkingSketch/images/love4006.jpg", "WorkingSketch/images/love4007.jpg", "WorkingSketch/images/love4008.jpg"],
				['WorkingSketch/images/love5001.jpg', "WorkingSketch/images/love5002.jpg", "WorkingSketch/images/love5003.jpg", "WorkingSketch/images/love5004.jpg", "WorkingSketch/images/love5005.jpg", "WorkingSketch/images/love5006.jpg", "WorkingSketch/images/love5007.jpg", "WorkingSketch/images/love5008.jpg"]
			
			]

			var page = 0
			var num1 = 0
			var arrList = arr[num1].slice(page, page + 4)
			var oList = document.getElementById("list");
			var oBtn = document.getElementById("btn");

			function fn() {
				var listHtml = ""
				var arrList = arr[num1].slice(page, page + 4)
				for(var i = 0; i < arrList.length; i++) {
					listHtml += '<li><img src="'+arrList[i]+'"><P>利仁（Liven）KL-J441A</P><a href="productContent.html">查看详情</a></li>'
				}
				oList.innerHTML = listHtml
			}
			fn()

			var oTabs = document.getElementsByClassName("tab")
			for(var j = 0; j < oTabs.length; j++) {
				oTabs[j].index = j
				oTabs[j].onclick = function() {
					console.log(this.index)
					for (var i = 0; i < oTabs.length; i++) {
						// oTabs[0].className="button1"
						oTabs[i].style.background=''
						oTabs[i].style.color=''
					}
					oTabs[this.index].style.background=arr1[this.index]
					oTabs[this.index].style.color="#fff"



					page = 0
					var arrList = arr[this.index].slice(page, page + 4)
					num1 = this.index
					fn()
					//换一批
					var that = this
					oBtn.onclick = function() {
						page += 4
						// console.log(arr[that.index]);
						// console.log(page);
						if(page >= arr[that.index].length) {
							page = 0
						}
						var arrList = arr[that.index].slice(page, page + 4)
						fn()
					}
				}
				oTabs[0].onclick()
			}

			//初始化点击换一批

			oBtn.onclick = function() {
				page += 4
				if(page >= arr[0].length) {
					page = 0
				}
				var arrList = arr[0].slice(page, page + 4)
				fn()
			}