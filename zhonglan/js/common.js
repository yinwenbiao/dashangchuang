//导航栏
$('#navUl a.active').append($('<p class="italic">'))
$('#navUl a').click(function(e) {
//	e.preventDefault()
	$(this).addClass("active").closest("li").siblings().children().removeClass("active")
	$("p").remove(".italic");
	$('#navUl a.active').append($('<p class="italic">'))
})
//弹窗
var num = true
$('#tan1').click(function() {
	if(num == true) {
		$("#formm").css("display", "block")
		$('#tan1').css("border", "0")
		$('#tan1').css("border-bottom", "2px solid #fff")

		num = false
	} else if(num == false) {
		$("#formm").css("display", "none")
		$('#tan1').css("border", "2px solid #fff")
		num = true
	}

})
//弹窗右边


$('.bodyTop').click(function() {
	$("body,html").animate({
		"scrollTop": 0
	}, 500)
})

$(window).scroll(function() {
	
	if($(window).scrollTop() > 200) {
		$('.bodyTop').css("display", "block")
	} else {
		$('.bodyTop').css("display", "none")
	}
})