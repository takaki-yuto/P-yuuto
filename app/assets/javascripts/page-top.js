// グローバル変数
var syncerTimeout = null ;

// 一連の処理
$(document).on('turbolinks:load',function() {
  // スクロールイベントの設定
  $( window ).scroll( function() {
    // 1秒ごとに処理
    if( syncerTimeout == null ) {
      // セットタイムアウトを設定
      syncerTimeout = setTimeout( function() {

        // 対象のエレメント
        var element = $( '#page-top' );

        // 現在、表示されているか？
        var visible = element.is( ':visible' );

        // 最上部から現在位置までの距離を取得して、変数[now]に格納
        var now = $( window ).scrollTop();

        // 最上部から現在位置までの距離(now)が1500以上かつ
        if( now > 800 ) {
          // 非表示状態だったら
          if( !visible ) {
            // [#page-top]をフェードインする
            element.fadeIn();
          }
        }

        // 1500px以下かつ
        // 表示状態だったら
        else if( visible ) {
          // [#page-top]をゆっくりフェードアウトする
          element.fadeOut( 'slow' );
        }

        // フラグを削除
        syncerTimeout = null;
      } , 1000 );
    }
  });

  // クリックイベントを設定する
  $( '#move-page-top' ).click(
    function() {
      // スムーズにスクロールする
      $( 'html,body' ).animate( {scrollTop:0} , 'slow' );
    }
  );
});