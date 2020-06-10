$(document).on('turbolinks:load',function(){
  $(".sub-image-c").click(function(){
    var srcUrl = $(this).attr('src');
    var idCount = $(this).attr('id');
    $("#main-image-c").attr('src',srcUrl).hide().fadeIn();
    $(".sub-image-c").removeClass("active-c");
    $("#" + idCount).addClass("active-c");
  });
});

jQuery(function($){
  $('.tabcontent > div').hide();

  $('.tabnav-c a').click(function () {
      $('.tabcontent-c > div').hide().filter(this.hash).fadeIn();

      $('.tabnav-c a').removeClass('active');
      $(this).addClass('active');

      return false;
  }).filter(':eq(0)').click();
});