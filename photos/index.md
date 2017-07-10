---
slug: "photos"
title: "相册"
noDate: "true"
comments: "false"
---
<link type="text/css" href="./ins.css" rel="stylesheet">
<link type="text/css" href="./jquery.fancybox.css" rel="stylesheet">

<div class="instagram">
    <section class="archives album">
      <ul class="img-box-ul">
      </ul>
    </section>
</div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="./jquery.lazyload.js"></script>
<script src="./jquery.fancybox.js"></script>
<script src="./photos.js"></script>

<script>
  var that = this;
  $.getJSON("./picture.json", function (data) {
    that.render(that.page, data);
  });
</script>