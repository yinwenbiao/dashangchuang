window.onload=function(){
	var oUt=document.getElementById("h-out");
	var hAdv=document.getElementById("h-advertisement");
	oUt.onclick=function(){
		console.log(1);
		hAdv.style.display="none";
	}

var liArr=document.getElementsByClassName("active");
					var oUl=document.getElementById("box")
					var oUlc=document.getElementsByClassName("h-list");
					// console.log(oUlc);
					var count=1;
					function auto(){
						auto.time=setInterval(function(){
							count=(count>2)?0:count;
							oUl.style.left=count*-758+"px";
							for (var j = 0; j < liArr.length; j++) {
								liArr[j].className="active";
							}
							liArr[count].className="active bai";
							count++;
						},3000)
					}
					auto();
					// 遍历li
					for (var i = 0; i < liArr.length; i++) {
						// 添加点击事件

						liArr[i].index=i;

						liArr[i].onclick=function(){

							for (var i = 0; i < liArr.length; i++) {
								liArr[i].className="active";
							}
							this.className="active bai";
							oUl.style.left=this.index*-758+"px";
						}
					}

				//切换
				var cbd=document.getElementById("h-vip-conter")
				var otop=cbd.getElementsByTagName("a");
				var oDiv=cbd.getElementsByTagName("div");
				otop[0].onmouseover=function(){
				oDiv[1].style.display="none";
				otop[1].style.color="#333";
				otop[0].style.color="red";
				oDiv[0].style.display="block";
				}
				otop[1].onmouseover=function(){
				otop[0].style.color="#333";
				oDiv[0].style.display="none";
				otop[1].style.color="red";
				oDiv[1].style.display="block";
				}
	                                                              
		$(function(){
			$.ajax({
				url:"json/data.json",
				type:"GET",
				data:{},
				success:function(data){
					
					var listData=data.listdata
					// console.log(listData)	
					var str="";
					for(var i=0;i<listData.length;i++){									
						var pinpai=listData[i].pinpai									
						for(var j=0;j<pinpai.length;j++){											
							str+=`											
									<td>${pinpai[j]}</td>												
							`	
						}
						$(".li1").append(str)
						var S1=listData[i].dajiadian
						var S2=listData[i].str2
						var S3=listData[i].str3
						var S4=listData[i].str4
						var S5=listData[i].str5
						// console.log(S3);
						// console.log(S4);
						// console.log(S5);
						var str1="";
						var str2="";
						var str3="";
						var str4="";
						var str5="";
						// 第一个
						for(var j=0;j<S1.length;j++){
							str1+=`
								<td>${S1[j]}</td>
							`
						}
						$(".h-div1>.span1").append(str1)
						
						// 第二个										
						for(var j=0;j<S2.length;j++){
							str2+=`
								<td>${S2[j]}</td>
							`
						}
						$(".h-div1>.span2").append(str2)
						
						// 第三个
						for(var j=0;j<S3.length;j++){
							str3+=`
								<td>${S3[j]}</td>
							`
						}
						$(".h-div1>.span3").append(str3)
												
						// 第四个
						for(var j=0;j<S4.length;j++){
							str4+=`
								<td>${S4[j]}</td>
							`
						}
						$(".h-div1>.span4").append(str4)
						
						// 第五个
						for(var j=0;j<S5.length;j++){
							str5+=`
								<td>${S5[j]}</td>
							`
						}
						$(".h-div1>.span5").append(str5)
						
						// 第二组
						var li1=listData[i].tow
						var li1str1="";
						for(var j=0;j<li1.length;j++){
							li1str1+=`
								<td>${li1[j]}</td>
							`
						}
						$(".li2").append(li1str1)
						
						// 第二组第一个
						
						var li2=listData[i].tow1
						var li1str2="";
						for(var j=0;j<li2.length;j++){
							li1str2+=`
								<td>${li2[j]}</td>
							`
						}
						// console.log(li1str2)
						$(".span6").append(li1str2)
						
						// 第三个
						var li3=listData[i].tow2
						var li1str3="";
						for(var j=0;j<li3.length;j++){
							li1str3+=`
								<td>${li3[j]}</td>
							`
						}
						$(".span7").append(li1str3)
						
						// 第四个
						var li4=listData[i].tow3
						var li1str4="";
						for(var j=0;j<li4.length;j++){
							li1str4+=`
								<td>${li4[j]}</td>
							`
						}
						$(".span8").append(li1str4)
						//第五个
						var li5=listData[i].tow4
						var li1str5="";
						for(var j=0;j<li5.length;j++){
							li1str5+=`
								<td>${li5[j]}</td>
							`
						}
						$(".span9").append(li1str5)
						
						var li6=listData[i].tow5
						var li1str6="";
						for(var j=0;j<li6.length;j++){
							li1str6+=`
								<td>${li6[j]}</td>
							`
						}
						$(".span10").append(li1str6)
						
						var li7=listData[i].tow6
						var li1str7="";
						for(var j=0;j<li7.length;j++){
							li1str7+=`
								<td>${li7[j]}</td>
							`
						}
						$(".span11").append(li1str7)
						
						var li4=listData[i].tow7
						var li1str4="";
						for(var j=0;j<li4.length;j++){
							li1str4+=`
								<td>${li4[j]}</td>
							`
						}
						$(".span12").append(li1str4)
						
						var li4=listData[i].tow8
						var li1str4="";
						for(var j=0;j<li4.length;j++){
							li1str4+=`
								<td>${li4[j]}</td>
							`
						}
						$(".span13").append(li1str4)
						
						var li4=listData[i].tow9
						var li1str4="";
						for(var j=0;j<li4.length;j++){
							li1str4+=`
								<td>${li4[j]}</td>
							`
						}
						$(".span14").append(li1str4)
						
						var li4=listData[i].tow10
						var li1str4="";
						for(var j=0;j<li4.length;j++){
							li1str4+=`
								<td>${li4[j]}</td>
							`
						}
						$(".span15").append(li1str4)
						
						var li4=listData[i].tow11
						var li1str4="";
						for(var j=0;j<li4.length;j++){
							li1str4+=`
								<td>${li4[j]}</td>
							`
						}
						$(".span16").append(li1str4)
						
					}
					
					
					var oHtop=$('.h-bgimg-left').clone(true)
					// console.log(oHtop)
					oHtop.addClass('h-top-fix')
					// console.log($('div[class="h-bgimg-left"]'))
					oHtop.css({
						'display':'none',
						})
					$('.H-Top-left').append(oHtop);
					$('.H-Top-left').mouseenter(function(){
						oHtop.css({'display':'block',})
					})
					$('.H-Top-left').mouseleave(function(){
						oHtop.css({'display':'none',})
					})
					
					$('div[class="h-bgimg-left"]').css('background','#333')
				},
				error: function(err) {
					//请求失败处理
					console.log(err);
				}
			})
		})



}