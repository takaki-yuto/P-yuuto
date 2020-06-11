$(document).on('turbolinks:load',function(){
  $(".btn-gnavi").on("click", function(){
      // ハンバーガーメニューの位置を設定
      var rightVal = 0;
      if($(this).hasClass("open")) {
          // 位置を移動させメニューを開いた状態にする
          rightVal = -300;
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).removeClass("open");
      } else {
          // メニューを開いたら次回クリック時は閉じた状態になるよう設定
          $(this).addClass("open");
      }

      $("#global-navi").stop().animate({
          right: rightVal
      }, 200);
  });

  //aタグがクリックされたらスクロールする処理
  //ただし、tabと名前のあるidは除外する
  $('a[href^="#"]').not('a[href^="#tab"]').click(function() {
    // スクロールの速度
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    if($('a').hasClass("open")) {
      rightVal = -300;
      $("#global-navi").stop().animate({
        right: rightVal
      }, 200);
      $('.btn-gnavi').removeClass("open");
    }
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});