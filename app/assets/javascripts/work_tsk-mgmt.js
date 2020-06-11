$(document).on('turbolinks:load',function(){
  $(".sub-image-a").click(function(){
    var srcUrl = $(this).attr('src');
    var idCount = $(this).attr('id');
    $("#main-image-a").attr('src',srcUrl).hide().fadeIn();
    $(".sub-image-a").removeClass("active-a");
    $("#" + idCount).addClass("active-a");
  });
});

$(document).on('turbolinks:load',function(){
  $('.tabcontent > div').hide();

  $('.tabnav-a a').click(function () {
      $('.tabcontent-a > div').hide().filter(this.hash).fadeIn();

      $('.tabnav-a a').removeClass('active');
      $(this).addClass('active');

      return false;
  }).filter(':eq(0)').click();
});