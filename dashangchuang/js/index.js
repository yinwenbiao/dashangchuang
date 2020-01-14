$.ajax({
	method: "get",
	url: "json/arrdess.json",
	data: {},
	success: function(data) {
		var odata = data.data
		var dizhiNav = '';
		var dizhiBody = '';

		//根据json数据创建城市信息
		$.each(odata, function(i, v) {
			dizhiNav += `<li>${odata[i].id}</li>`;
			var oSity = odata[i].sity;
			var dizhiLi = '';
			$.each(oSity, function(i, v) {
				dizhiLi += `<span>${oSity[i]}</span>`;
			})
			dizhiBody += `<li>
								<div><span>${odata[i].id}</span></div>
								<div>${dizhiLi}</div>
							</li>`
		})
		$('.dizhi-nav ul').html(dizhiNav);
		$('.dizhi-body ul').html(dizhiBody);

		//鼠标移入时滚动条移动
		$.each($('.dizhi-nav li'), function(i, v) {
			var oDizhiTop = $('.dizhi-body li').eq(i).position().top - 50;
			$(this).mouseenter(function() {
				$('.dizhi-body ul').stop()
				$('.dizhi-body ul').animate({
					"scrollTop": oDizhiTop
				})
			})
		})
		//点击地址时更换头部地址的text
		$('.dizhi span').click(function() {
			$('#address').text($(this).html());
			$('.dizhi span')
			$.each($('.dizhi span'), function(i, v) {
				$('.dizhi span').eq(i).attr('class', '')
				if ($('.dizhi span').eq(i).html() == $('#address').text()) {
					$('.dizhi span').eq(i).attr('class', 'dizhispan')
				}
			})
		})
		//头部的html与下部的span html相等的话加上背景色
		$.each($('.dizhi span'), function(i, v) {
			if ($('.dizhi span').eq(i).html() == $('#address').html()) {
				$('.dizhi span').eq(i).attr('class', 'dizhispan')
			}
		})
		//地址的移入移除事件
		$('#address').mouseenter(function() {
			$('.dizhi').css({
				'visibility': 'visible',
				'z-index': 100
			})
			$('#dess p').css({
				'border': '1px solid #d2d2d2',
				'background': ' #fff',
				'border-bottom': '#fff 1px solid'
			})
		})
		$('#dess').mouseleave(function() {
			$('.dizhi').css({
				'visibility': 'hidden',
				'z-index': -100
			})
			$('#dess p').css({
				'border': 'none',
				'background': '#eee',
				'border-bottom': 'none'
			})
		})
	},
	error: function(err) {
		console.log(err)
	},

})

//秒杀活动
var oBmsImgarr = [{
		src: 'images/0_thumb_G_1489096810833.jpg',
		p: '志高嵌入式电陶炉家用双头双灶镶嵌式电磁炉双眼光波炉特价正品 不挑锅可烧烤 三环猛火 嵌入式双灶',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489097011644.jpg',
		p: 'Skyworth/创维 55V9E 55吋4K超高清智能网络平板LED液晶电视机 50 25核智能 4K超高清 人气爆款',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489097621751.jpg',
		p: 'Midea/美的 F6021-X1(S)热水器储水式 家用洗澡电热水器抑菌节能 直降150 购买送净水器+花洒套装',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489097825348.jpg',
		p: 'Joyoung/九阳 Y-50C15电压力锅高压锅正品双胆智能预约5L铁釜新品 土灶铁斧 双重安全锁',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489098157662.jpg',
		p: '三星C24F396FH曲面显示器23.5英寸电脑显示器24液晶显示屏幕超22',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489098265067.jpg',
		p: '新品HYC 2k显示器32寸电脑显示器无边框HDMI液晶显示器IPS显示屏 2K高清屏IPS 超薄 厚6mm 无边框',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489098360804.jpg',
		p: 'Apple/苹果 27” Retina 5K显示屏 iMac:3.3GHz处理器2TB存储',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489098597912.jpg',
		p: '京天华盛i5 7500/GTX1050Ti独显台式机组装机DIY整机游戏电脑主机 热销25万台 跑分17万 升7代CPU',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489098724131.jpg',
		p: '名龙堂i7 6700升7700 GTX1060 6G台式电脑主机DIY游戏组装整机 升6GB独显 送正版WIN10 一年上门',
		prive: '¥366.00',
		del: '¥585.60'
	},
	{
		src: 'images/0_thumb_G_1489099128797.jpg',
		p: 'Razer雷蛇 Firefly烈焰神虫织物版 Chroma幻彩硬质游戏鼠标垫',
		prive: '¥366.00',
		del: '¥585.60'
	}
]
var bMshtml = ''
$.each(oBmsImgarr, function(i, v) {
	bMshtml +=
		`<li>
					<a href="#"><img src="${oBmsImgarr[i].src}" >
					<p title="${oBmsImgarr[i].p}">${oBmsImgarr[i].p}</p></a>
					<span>${oBmsImgarr[i].prive}</span>
					<del>${oBmsImgarr[i].del}</del>
				</li>`
})
$('.b-ms ul').eq(0).html(bMshtml);
//秒杀右击事件
$('.b-ms .right').click(function(e) {
	e.stopPropagation()
	$('.b-ms ul').animate({
		left: '-238px'
	}, 1000, function() {
		$('.b-ms li').eq(0).appendTo($('.b-ms ul'));
		$('.b-ms ul').css("left", 0)
	})
})
//秒杀左击事件
$('.b-ms .left').click(function() {
	$('.b-ms li:last').prependTo($('.b-ms ul'));
	$('.b-ms ul').css("left", '-238px')
	$('.b-ms ul').animate({
		left: 0
	}, 1000)
})
//开启定时器
var timer = setInterval(function() {
	$('.b-ms .right').click()
}, 3000)
//鼠标移入事件
$('.b-ms').mouseenter(function() {
	$('.b-ms .right').css('display', 'block');
	$('.b-ms .left').css('display', 'block');
	clearInterval(timer)
});
//鼠标移出事件
$('.b-ms').mouseleave(function() {
	$('.b-ms .right').css('display', 'none');
	$('.b-ms .left').css('display', 'none');
	timer = setInterval(function() {
		$('.b-ms .right').click()
	}, 3000)
})

//动态添加尖货
var oBjhImgarr = ['images/1515953445396793087.jpg', 'images/1515953446469633296.jpg', 'images/1515953447327572638.jpg',
	'images/1515953448824546285.jpg', 'images/1515953449613212705.jpg', 'images/1515953451810325730.jpg',
	'images/1515953452551121428.jpg', 'images/1515953453398254994.jpg', 'images/1515953454232937395.jpg',
	'images/1515953454232937395.jpg', 'images/1515953455883586458.jpg', 'images/1515953456340060955.jpg',
	'images/1515953457540530655.jpg', 'images/1515953458104335318.jpg'
]
var oBjhhtml = ''
$.each(oBjhImgarr, function(i, v) {
	oBjhhtml += `<li><a href="#"><img src="${oBjhImgarr[i]}" ></a></li>`
})
$('.b-jh ul').eq(0).html(oBjhhtml)

// 活动专区
var fnewp = ["魅蓝S6新品开售享好", "新Nokia6", "三星爆款", "品质年货 预售会场", "直邮专场 拔草更放心", "阿迪达斯 领跑时尚"]
var fnewspan = ["直降300元", "返200元云券", "最高省700", "1分抵50", "后套装629元", "满269减50"]
var fnewimg = ["images/1515953443312929674.jpg", "images/1515953443414125497.jpg", "images/1515953444358204870.jpg",
	"images/1516223501146259132.png", "images/1516223502589551036.png", "images/1516223502766589376.png"
]
var fnew = ""
for (var i = 0; i < fnewp.length; i++) {
	fnew +=
		`
		<li>
			<a href="javascript:;">
				<p>${fnewp[i]}</p><br>
				<span>${fnewspan[i]}</span>
				<img src="${fnewimg[i]}">
			</a>
		</li>
	`
}
$("#fte_ul2").append(fnew)

// 发现好货  b-find-as
var faimg = ["images/1515953437766680336.jpg", "images/1515953437822309342.jpg", "images/1515953438203658169.jpg",
	"images/1515953438223405786.jpg", "images/1515953438419443895.jpg", "images/1515953438771578335.jpg"
]
var faspan = ["360行车记录仪", "攀升兄弟", "OPPO R11", "三星55吋", "华为智能腕表", "海尔对开门"]
var faspan1 = ["夜视 监控 电子狗 蓝牙", "I7独显主机", "新品热力红 30天免息", "4K处理器流畅不卡顿", "防水蓝宝石玻璃镜面", "风冷无霜 低温净味"]
var fann = ""
for (var i = 0; i < faimg.length; i++) {
	fann +=
		`<li>
				<a href="">
					<img src="${faimg[i]}" >
				</a>
				<span>${faspan[i]}</span>
				<span>${faspan1[i]}</span>
			</li>`
}
$(".b-find-as").append(fann)
// 还没逛够
var ftu=["images/0_thumb_G_1490211575591.jpg","images/0_thumb_G_1489099437211.jpg","images/1002_thumb_G_1539998306081.jpg","images/0_thumb_G_1536606976503.jpg","images/0_thumb_G_1536540539657.jpg","images/925_thumb_G_1569533172825.jpg","images/0_thumb_G_1536532312220.jpg","images/0_thumb_G_1490218800612.jpg","images/0_thumb_G_1490209690294.jpg","images/0_thumb_G_1490174414186.jpg","images/0_thumb_G_1490174342632.jpg","images/0_thumb_G_1490167877934.jpg","images/0_thumb_G_1490160001609.jpg","images/0_thumb_G_1490155369648.jpg","images/0_thumb_G_1490147569517.jpg","images/0_thumb_G_1489109633806.jpg","images/0_thumb_G_1489108908792.jpg","images/0_thumb_G_1489108311901.jpg","images/0_thumb_G_1489102950633.jpg","images/0_thumb_G_1489102753231.jpg","images/0_thumb_G_1489102299856.jpg","images/0_thumb_G_1489097825348.jpg","images/0_thumb_G_1489097621751.jpg","images/0_thumb_G_1489096810833.jpg"]
var fp=["马克华菲长袖T恤男 冬季新品纯棉圆领黑白潮款印花休闲t恤 98","秋季新款男士套头卫衣印花外套韩版简约百搭潮流男生上衣服","韩都衣舍2018秋新款女装韩版圆领宽松慵懒毛衣针织衫NH9459","Xiaomi/小米 小米8SE全面屏拍照游戏智能手机学生机商务机8周年 官方旗舰店正品现货速发","小米空气净化器2S家用办公智能氧吧除甲醛雾霾粉尘 新品","山水 F7 5.1家庭影院音响套装电视客厅家用3d环绕组合音箱 电视k歌音响套装 家用 组合 ","Xiaomi/小米 小米电视4A 55英寸 4k超高清智能网络电视机 50 60","洽福 转椅轮子万向轮 老板椅办公椅子滑轮电脑椅配件滚轮脚轮轱辘 静音灵活不伤地板质保三年下单备注安装方式","TOSOT/大松 GDF-2001C格力电饭煲迷你智能全自动家用 电饭锅1-2人 格力出品 数码显示 智能预约 全国包邮","森马针织衫 冬季男圆领套头青年毛衣小清新线衫毛衫纯色韩版学生","9871","进口洋酒 杰克丹尼威士忌酒700ml Jack Daniel's鸡尾酒基酒 行货","DIY台式电脑整机I7四核六核独显固态组装游戏电脑主机24寸显示器 送百元礼品 内存免费升级 送显示器","Apple/苹果 Apple Watch Series 2 智能手表42mm","飞科全身水洗智能电动充电式剃须刀男士刮胡刀胡须刀刮胡子FS375 全身水洗 座充设计 智能操控系统","春季马丁靴男真皮男靴黄靴工装军靴韩版短靴沙漠靴高帮男鞋大黄靴 头层牛皮","伊米妮2017春新款简约时尚自然摔牛皮单肩手提大小版波士顿包女包 简约时尚 自然摔牛皮 单肩手提 波士顿包","Samsung/三星 Galaxy C9 Pro SM-C9000 6+64G全金属超薄手机 12期免息 送蓝牙音箱等多种套餐好礼","韩都衣舍2017韩版女装新款黑白拼接插肩棒球服春季短外套HH5597妠 朴信惠同款 黑白拼接 插肩袖 棒球服","新款韩版chic学生宽松短款外套上衣字母长袖连帽套头卫衣女潮","新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女","Razer雷蛇 炼狱蝰蛇 精英版/2013/幻彩/守望先锋电竞有线游戏鼠标","Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘","Apple/苹果 13 英寸：MacBook Pro Multi-Touch Bar 和 Touch ID 2.9GHz 处理器 512GB 存储容量"]
var fspan=["¥80.00","¥120.00","¥10.00 ","¥1888.00","¥800.00","¥1999.00","¥2399.00","¥23.80","¥388.00 ","¥79.00","¥498.00","¥136.00","¥1388.00","¥3188.00","¥149.00","¥800.00","¥888.00","¥3500.00","¥420.00","¥300.00","¥233.00","¥300.00","¥500.00","¥7800.00"]
var fa=["¥96.00","¥144.00","¥12.00","¥2265.60","¥960.00","¥2398.79","¥2878.80","¥28.56","¥465.59","¥94.80","¥597.60","¥163.20","¥1665.60","¥3825.60","¥178.79","¥1200.00","¥1065.60","¥4200.00","¥540.00","¥360.00","¥279.59","¥360.00","¥600.00","¥9360.00"]
var fli=""
for (var i = 0; i < ftu.length; i++) {
			fli+='<li>'
				+'<img src="'+ftu[i]+'" class="fimg">'
				+'<p>'+fp[i]+'</p>'
				+'<span style="font-size:16px">'+fspan[i]+'</span><a href="javascript:;">'+fa[i]+'</a>'
			+'</li>'
}
$(".ful")[0].innerHTML=fli



// console.log($('.H-Box'))
//滚动条事件
$(window).scroll(function() {
	var scrTOP = $(window).scrollTop();
	var asiTOP = $('.aside').position().top
	var oHeight = $('#h-left-top').height() + $('#h-advertisement').height();


	if (scrTOP > oHeight) {
		$('.freturn1').css('display', 'block')
		$('.H-Box').css('display', 'block')
	} else if (scrTOP < oHeight) {
		// $("#freturn").fadeOut(300)
		$('.freturn1').css('display', 'none')
		$('.H-Box').css('display', 'none')
		// console.log($('.H-Box'))
	}
	// 左侧边栏
	if (scrTOP > $('.b-nianhuo').offset().top - $('.H-Box').height()) {
		$('.aside').css('display', 'block')
	} else if (scrTOP < $('.b-nianhuo').offset().top - $('.H-Box').height()) {
		$('.aside').css('display', 'none')
	}
	//楼层导航
	$('.floor').each(function(i, v) {
		if (scrTOP > $(this).offset().top - asiTOP) {
			$('.aside li').eq(i).attr('class', 'b-active').siblings('li').removeClass('b-active')
		}
	})
})
//左侧边栏点击事件
$('.aside li').click(function() {
	$(this).attr('class', 'b-active').siblings('li').removeClass('b-active');
	$("body,html").animate({
		"scrollTop": $('.floor').eq($(this).index()).offset().top - $('#h-var').height()
	}, 500)

})
//侧边栏地回到顶部
$('.aside p,.freturn1').click(function() {
	$("body,html").animate({
		"scrollTop": 0
	}, 500)
})
$(window).resize(function(){
	var asideHei =$('.fshop').height()/2
	console.log(asideHei)
	$('.fshop').css({
		// 'top':'50%',
		// 'margin-top':-asideHei
	})
})


//右侧边栏移入移出事件
$(".ff1").each(function(i, v) {
	$(this).mouseenter(function() {
		$(".ff1").parent().eq(i).css("background-color", "red")
		$(".faa").eq(i).css({
			"visibility": "visible",
			"left": "-100px",
			"transition": "all 0.5s"
		})
	})
	$(".ff1").parent().mouseleave(function() {
		$(".ff1").parent().eq(i).css("background-color", "")
		$(".faa").eq(i).css({
			"visibility": "hidden",
			"left": "",
			"transition": ""
		})
	})
})

// 购物车
var fnum=1
// 购物车 点击



$("#fulshop").click(function(e){
	console.log('1');
	e.stopPropagation()
	if (fnum==1) {
		// clearInterval(timer)
		$('.fshop').animate({"right":"280px"},1000)
		// $(".fshoup1").animate({"display":"block","right":"0px"},1000)
		fnum=2
		console.log("1");
	}else if (fnum==2) {
		e.stopPropagation()
		$('.fshop').animate({"right":"0px"},1000)
		// $(".fshoup1").animate({"display":"none","right":"-280px"},1000)
		fnum=1
		console.log("2");
	}
})
$('body').click(function(e){
	e.stopPropagation()
		if (fnum==2) {
			$('.fshop').animate({"right":"0px"},1000)
			fnum=1
			console.log("3");
		}
})
$('[class="fshoup1"]').click(function(e){
	e.stopPropagation()
			$('.fshop').animate({"right":"280px"},1000)
})
$(".fshop>ul").click(function(e){
	e.stopPropagation()
	$(this).stop()
})
$(".iconcha").click(function(e){
	e.stopPropagation()
	$(".fshoup1").animate({"right":"-280px","display":"none"},1000)
	fnum=1
})
