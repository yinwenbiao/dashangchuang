	// 	轮播图.js

	
	   	var liArr = document.getElementsByClassName("abc");
		var ul = document.getElementsByClassName("ab")[0];
		var cont = 1 ;
		// 添加鼠标移入事件
			for(var j=0;j<liArr.length;j++){
			//给每个li元素添加一个索引
			liArr[j].index_ = j;
			//移入事件
			liArr[j].onmouseover = function(){
				//停止轮播图
				clearInterval(intervalId);
				//使用排他思想，将所有的li的样式还原 
				for(var j=0;j<liArr.length;j++){
					liArr[j].className = "abc";
				}
				//将当前的li的样式设为红色
				this.className = "abc active";

				//移动图片
				//计算结束的位置
				move(ul,this.index_*-318);
				cont = this.index_ + 1;	
			}
			//移出事件
			liArr[j].onmouseout = function(){
				//开始自动播放轮播图
				auto();
			}
		}
		function auto (){
			intervalId = setInterval(function(){
			cont  = (cont>3)? 0 :cont;
			move(ul,cont*-318);
			for(var j = 0;j<liArr.length;j++){
				liArr[j].className = "abc";
				}
				liArr[cont].className = "abc active";
				cont++;
		},3000);
	}
	auto();
 	function move(obj,num,){	
    clearInterval(obj.intervalId);
	obj.intervalId = setInterval(function(){
		if(obj.offsetLeft < num){
			// 注意需更改ul这个名字
			var step = Math.ceil((num-ul.offsetLeft)/10)
			var move_num = (obj.offsetLeft+step > num) ? num : (obj.offsetLeft+step);
			obj.style.left = move_num +'px';
		}else if(obj.offsetLeft > num){
			var step = Math.floor((num-ul.offsetLeft)/10)
			var move_num = (obj.offsetLeft+step < num) ? num : (obj.offsetLeft+step);
			obj.style.left = move_num+'px';
		}else{
			clearInterval(obj.intervalId);
		}
	},20);
}