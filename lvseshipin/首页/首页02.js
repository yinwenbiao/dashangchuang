	// 	轮播图02.js

		var liapp = document.getElementsByClassName("asd");
		var ularr = document.getElementsByClassName("qw")[0];
		var count = 1 ;
		// 添加鼠标移入事件
			for(var k=0;k<liapp.length;k++){
			//给每个li元素添加一个索引
			liapp[k].index_ = k;
			//移入事件
			liapp[k].onmouseover = function(){
				//停止轮播图
				clearInterval(inter);
				//使用排他思想，将所有的li的样式还原 
				for(var k=0;k<liapp.length;k++){
					liapp[k].className = "asd";
				}
				//将当前的li的样式设为红色
				this.className = "asd activer";

				//移动图片
				//计算结束的位置
				mover(ularr,this.index_*-980);
				count = this.index_ + 1;	
			}
			//移出事件
			liapp[k].onmouseout = function(){
				//开始自动播放轮播图
				autoer();
			}
		}
		function autoer (){
			inter = setInterval(function(){
			count  = (count>2)? 0 :count;
			mover(ularr,count*-980);
			for(var k = 0;k<liapp.length;k++){
				liapp[k].className = "asd";
				}
				liapp[count].className = "asd activer";
				count++;
		},3000);
	}
	autoer();
 	function mover(obj,num,){	
    clearInterval(obj.inter);
	obj.inter = setInterval(function(){
		if(obj.offsetLeft < num){
			// 注意需更改ularr这个名字
			var step = Math.ceil((num-ularr.offsetLeft)/10)
			var mover_num = (obj.offsetLeft+step > num) ? num : (obj.offsetLeft+step);
			obj.style.left = mover_num +'px';
		}else if(obj.offsetLeft > num){
			var step = Math.floor((num-ularr.offsetLeft)/10)
			var mover_num = (obj.offsetLeft+step < num) ? num : (obj.offsetLeft+step);
			obj.style.left = mover_num+'px';
		}else{
			clearInterval(obj.inter);
		}
	},20);
}