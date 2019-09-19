$(function() {

  //FAQアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');

    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });

  //モーダル
  $('.signup-show').click(function() {
    $('#signup-modal').css('display', 'flex').hide().fadeIn();
  });

  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });

  //トップへ戻るボタン
  $('#top-btn').click(function() {
    $('html, body').animate({
      'scrollTop': 0
    }, 900);
  });

  //リンク先にふわーっと飛ぶ
  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 900);
  });



});
