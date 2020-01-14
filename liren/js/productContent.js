var big = document.getElementById('big')
var bimg = big.getElementsByTagName('img')
// console.log(big);
// console.log(bimg);
var xiao = document.getElementById('xiao')
var xli = xiao.getElementsByTagName('li')
// console.log(xiao);
// console.log(xli);

for(var i = 0; i < xli.length; i++) {
	xli[i].cont = i
	// console.log(bimg[i]);
	xli[i].onclick = function() {
		for(var i = 0; i < bimg.length; i++) {
			// console.log(bimg[i]);
			bimg[i].style.display = 'none';
		}
		bimg[this.cont].style.display = 'block';
		// console.log('test');
	}
}