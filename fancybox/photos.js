var render = function(page, data){
	var img = "";
	for (var i = 0; i < data.length; i++) {
		img +=  '<li><div class="img-box">' +
                '<a class="img-bg" rel="example_group" href="http://orwbuystz.bkt.clouddn.com/' + data[i] + '"></a>' +
                '<img lazy-src="http://orwbuystz.bkt.clouddn.com/' + data[i] + '" />' +
                '</li>'
		
	}
	$(".img-box-ul").append(img);
	$(".img-box-ul").lazyload();
	$("a[rel=example_group]").fancybox();
}