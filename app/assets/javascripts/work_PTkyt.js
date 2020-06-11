$(document).on('turbolinks:load',function(){
  $(".sub-image-b").click(function(){
    var srcUrl = $(this).attr('src');
    var idCount = $(this).attr('id');
    $("#main-image-b").attr('src',srcUrl).hide().fadeIn();
    $(".sub-image-b").removeClass("active-b");
    $("#" + idCount).addClass("active-b");
  });
});

$(document).on('turbolinks:load',function(){
  $('.tabcontent > div').hide();

  $('.tabnav-b a').click(function () {
      $('.tabcontent-b > div').hide().filter(this.hash).fadeIn();

      $('.tabnav-b a').removeClass('active');
      $(this).addClass('active');

      return false;
  }).filter(':eq(0)').click();
});