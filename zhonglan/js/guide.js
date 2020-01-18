$('.one >li').click(function() {
	var numn = $(this).index()
	//	console.log(numn)a
	$('.one >li').children("ul").css("display", "none")
	$(this).children("ul").css("display", "block")
	$('.two >li').click(function() {
		$('.two >li').children("ul").css("display", "none")
		var numn1 = $(this).index()
		//	console.log(numn)
		$(this).children("ul").css("display", "block")

	})
})