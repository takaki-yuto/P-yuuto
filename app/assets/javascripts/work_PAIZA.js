$(document).on('turbolinks:load',function(){
  $(".sub-image-d").click(function(){
    var srcUrl = $(this).attr('src');
    var idCount = $(this).attr('id');
    $("#main-image-d").attr('src',srcUrl).hide().fadeIn();
    $(".sub-image-d").removeClass("active-d");
    $("#" + idCount).addClass("active-d");
  });
});

$(document).on('turbolinks:load',function(){
  $('.tabcontent > div').hide();

  $('.tabnav-d a').click(function () {
      $('.tabcontent-d > div').hide().filter(this.hash).fadeIn();

      $('.tabnav-d a').removeClass('active');
      $(this).addClass('active');

      return false;
  }).filter(':eq(0)').click();
});