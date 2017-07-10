<script src="/assets/js/APlayer.min.js"> </script>var render = function(page, data){
	var img = "";
	for (var i = 0; i < data.length; i++) {
		img += '<li><div class="img-box">' + '<a class="img-bg " rel="external" data-fancybox="images" href="http://orwbuystz.bkt.clouddn.com/' + data[i] + '" target="_blank"></a>' + '<img lazy-src="http://orwbuystz.bkt.clouddn.com/' + data[i] + '" src="http://orwbuystz.bkt.clouddn.com/' + data[i] + '" style="">'  + '</div></li>';
		//img += '<img src="http://yourqiniu.url.com/' + data[i] + '">';
	}
	$(".img-box-ul").append(img);
	$(".img-box-ul").lazyload();
	$("a[rel=external]").fancybox();
}