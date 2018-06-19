$(document).ready(function () {

$('.new-tweet textarea').keyup(function () {
    const counter = $('.new-tweet .counter');
    const tweet = $(this).val();
    const tweetCount = Array.from(tweet).length;
    const remaining = 140 - tweetCount;
    counter.html(remaining);

    if(remaining < 0) {
      $('.new-tweet .counter').addClass("overlimit");
    } else {

      $('.new-tweet .counter').removeClass("overlimit");
    }
  });

});



