window.onload = function() {
	var wang = document.getElementsByClassName('wang')[0]
	console.log(wang);
	var oin = document.getElementById('inter');
	console.log(oin);
	oin.onclick = function() {
		wang.style.display = "block"
	}
	wang.onclick = function() {
		wang.style.display = "none"
	}
}

// e.stopPropagation