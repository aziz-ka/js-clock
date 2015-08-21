
$(function() {
  var now = new Date();
  var second = now.getSeconds() * 6;
  var minute = now.getMinutes() * 6;
  var hour = now.getHours() * 30;
  var plus = 0;

  count("second", second);
  count("minute", minute);
  count("hour", hour);
});

function count(hand, deg) {
  setInterval(function() {
    if(hand === "hour") deg += 1/120;
    if(hand === "minute") deg += 0.1;
    if(hand === "second") deg += 6;
    $('#' + hand + '-hand').css('transform', 'rotate(' + deg + 'deg)');
  }, 1000);
}