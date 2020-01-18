$(window).resize(function(){
		var a=$('.book .col-xs-12 >li').offset().left+$('.book .col-xs-12 >li').outerWidth(true)+20
		$('#kehu >div').height($('#waves').offset().top-$(window).scrollTop()-82) 
	
	
	
	
	if($(window).scrollTop()>$('.asd').height()){
		$('#kehu').css({
		 "position":"fixed",
		 "top":"82px",
		 "left":a,
	})
	}else{
		$('#kehu').css({
		 "position":"",
		 "top":"0",
		 "left":0,
	})
	}
	
	})

$(window).scroll(function(){
	
	var a=$('.book .col-xs-12 >li').offset().left+$('.book .col-xs-12 >li').outerWidth(true)+20
//	console.log(a)
	
	$('#kehu >div').height($('#waves').offset().top-$(window).scrollTop()-82) 
	
	
	
	
	if($(window).scrollTop()>$('.asd').height()){
		$('#kehu').css({
		 "position":"fixed",
		 "top":"82px",
		 "left":a,
	})
	}else{
		$('#kehu').css({
		 "position":"",
		 "top":"0",
		 "left":0,
	})
	}
	
})

var a=$('.book .col-xs-12  >li').offset().left+$('.book .col-xs-12 >li').outerWidth(true)+20
		$('#kehu >div').height($('#waves').offset().top-$(window).scrollTop()-82) 
	
	
	
	
	if($(window).scrollTop()>$('.asd').height()){
		$('#kehu').css({
		 "position":"fixed",
		 "top":"82px",
		 "left":a,
	})
	}else{
		$('#kehu').css({
		 "position":"",
		 "top":"0",
		 "left":0,
	})
	}
	
