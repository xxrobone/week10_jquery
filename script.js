$(function () {
  console.log('jquery working');
});

$('.btn:first-of-type').on('click', function () {
  $(this).css({
    backgroundColor: '#fafafa',
    color: '#282828',
  });
  $('h1').toggle('slow');
  $('header').css({
    backgroundColor: '#000',
    color: 'aqua',
  });
});

$('.btn:first-of-type').on({
  mouseenter: function () {
    $(this).css('opacity', '0.85');
  },
  mouseleave: function () {
    $(this).css('opacity', '1');
  },
});
