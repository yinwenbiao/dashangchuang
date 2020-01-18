//轮播图
$("#myCarousel").carousel({
	interval: 2000
})

//我们的成绩数字跳动

var options = {  
	useEasing: true,
	  useGrouping: true,
	  separator: ',',
	  decimal: '.',
	  prefix: '',
	  suffix: ''
};

var arr = [
	new CountUp("sum-apply", 0, 18397, 0, 2, options),
	new CountUp("sum-rate", 0, 98.8, 1, 3, options),
	new CountUp("sum-urgent", 0, 3273, 0, 2, options),
	new CountUp("urgent-rate", 0, 100, 0, 2, options)
]
$(window).scroll(function() {
	if($(window).scrollTop() > $('.aaa').offset().top - $(window).height() - 30) {
		$('.aaa').each(function(i) {
			var index = $(this).index()
			arr[i].start()
		})
	}
	if($(window).scrollTop() > 200) {
		$('.bodyTop').css("display", "block")
	} else {
		$('.bodyTop').css("display", "none")
	}
})
if($(window).scrollTop() > $('.aaa').offset().top - $(window).height() - 30) {
	$('.aaa').each(function(i) {
		var index = $(this).index()
		arr[i].start()
	})
}
//我们的服务
$('#hoh li').mouseover(function() {
	$(this).addClass('hover1').siblings().removeClass("hover1")
})


//倒计时弹出
var end = new Date(new Date().getTime() + 1000 * 6);
var intervalId = setInterval(function() {
	// 开始时间
	var start = new Date();
	// 时间差
	var times = end.getTime() - start.getTime();
	var seconds = Math.floor(times % (1000 * 60 * 60) % (1000 * 60) / 1000);
	var str_now = seconds;
	console.log("111")
	
	if(seconds < 0) {
		$('#denglv').css("display","block")
		clearInterval(intervalId);
	}
}, 1000);
$('#xiao').click(function(){
	$('#denglv').css("display","none")
})