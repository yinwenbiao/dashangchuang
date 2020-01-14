var arr1 = [
	["WorkingSketch/images/navpic1001.jpg", "WorkingSketch/images/navpic1002.jpg", "WorkingSketch/images/navpic1003.jpg", "WorkingSketch/images/navpic1004.jpg", "WorkingSketch/images/navpic1005.jpg"],
	["WorkingSketch/images/navpic2001.jpg", "WorkingSketch/images/navpic2002.jpg", "WorkingSketch/images/navpic2003.jpg", "WorkingSketch/images/navpic2004.jpg"],
	["WorkingSketch/images/navpic3001.jpg", "WorkingSketch/images/navpic3002.jpg", "WorkingSketch/images/navpic3003.jpg", "WorkingSketch/images/navpic3004.jpg", "WorkingSketch/images/navpic3005.jpg", "WorkingSketch/images/navpic3006.jpg"],
	["WorkingSketch/images/navpic4001.jpg", "WorkingSketch/images/navpic4002.jpg", "WorkingSketch/images/navpic4003.jpg", "WorkingSketch/images/navpic4004.jpg", "WorkingSketch/images/navpic4005.jpg", "WorkingSketch/images/navpic4006.jpg"],
	["WorkingSketch/images/navpic5001.jpg", "WorkingSketch/images/navpic5002.jpg", "WorkingSketch/images/navpic5003.jpg", "WorkingSketch/images/navpic5004.jpg", "WorkingSketch/images/navpic5005.jpg", "WorkingSketch/images/navpic5006.jpg"],
	["WorkingSketch/images/navpic6001.jpg", "WorkingSketch/images/navpic6002.jpg", "WorkingSketch/images/navpic6003.jpg", "WorkingSketch/images/navpic6004.jpg", "WorkingSketch/images/navpic6005.jpg", "WorkingSketch/images/navpic6006.jpg"],
	["WorkingSketch/images/navpic7001.jpg", "WorkingSketch/images/navpic7002.jpg", "WorkingSketch/images/navpic7003.jpg", "WorkingSketch/images/navpic7004.jpg", "WorkingSketch/images/navpic7005.jpg"],
	["WorkingSketch/images/navpic8001.jpg", "WorkingSketch/images/navpic8002.jpg", "WorkingSketch/images/navpic8003.jpg", "WorkingSketch/images/navpic8004.jpg", "WorkingSketch/images/navpic8005.jpg", "WorkingSketch/images/navpic8006.jpg"],
	["WorkingSketch/images/navpic9001.jpg", "WorkingSketch/images/navpic9002.jpg", "WorkingSketch/images/navpic9003.jpg", "WorkingSketch/images/navpic9004.jpg", "WorkingSketch/images/navpic9005.jpg", "WorkingSketch/images/navpic9006.jpg"],
]
var num=0
var oli=document.getElementsByClassName('red');
// console.log(oli)v 
var odiv=document.getElementsByClassName('red110')
for (var i=0;i<odiv.length;i++) {
	odiv[num].innerHTML='<ul class="oul"></ul>'
	num+=1
	// console.log(odiv[i].innerHTML);
}
var num1=0
var oul=document.getElementsByClassName('oul')
// console.log(oul);

for (var i = 0; i < oul.length; i++) {
	// console.log(num1);
	// console.log(arr1[num1].length);   // li的长度
var lisr=""

	for (var i = 0; i < arr1[num1].length; i++) {
		// console.log(arr1[0][num1]);
		// 	// console.log(arr1[0]);
		lisr+='<li>'
				+'<img src="'+arr1[num1][i]+'">'
					+'<P>利仁（Liven）KL-J441A</P>'
					+'<a href="productContent.html">查看详情</a>'
					+'</li>'


		
	}
		
oul[num1].innerHTML=lisr

	num1+=1
}



































//var page1 = 0
//var num2 = 0
//var arrList1 = arr1[num2].slice(page1, page1 + 4)
//var oList1 = document.getElementById("list11");
//console.log(oList1);
//// var oBtn = document.getElementById("btn");
//function fn() {
//	var listHtml1 = ""
//	var arrList1 = arr1[num2].slice(page1, page1 + 4)
//	for(var i = 0; i < arrList1.length; i++) {
//		listHtml1 += '<li>
//		<img src="' + arrList1[i] + '">
//		<P>利仁（Liven）KL-J441A</P>
//		<a href="productContent.html">查看详情</a>
//		</li>'
//	}
//
//	oList1.innerHTML = listHtml1
//}
//fn()
//
//var oTabs1 = document.getElementsByClassName("red")
//for(var j = 0; j < oTabs1.length; j++) {
//	oTabs1[j].index = j
//	oTabs1[j].onmouseover = function() {
//		// console.log(this.index)
//		// console.log(oTabs1);
//		page1 = 0
//		var arrList1 = arr1[this.index].slice(page1, page1 + 4)
//		num1 = this.index
//		fn()
//	}
//}