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

/* nav + submenu mouseenter, mouseleave and click*/

$('.nav li').on({
  mouseenter: function () {
    $(this).addClass('active');
    /*  $(this).find('.submenu').toggle(); */
  },
  mouseleave: function () {
    $(this).removeClass('active');
    /* $(this).find('.submenu').toggle(); */
  },
  click: function () {},
});

// finding the parent to the submenu on click
$('.nav li > .submenu')
  .parent()
  .click(function (e) {
      e.preventDefault();
      // prevents bubbling up the dom tree
    e.stopPropagation();
    // submenu variable is the list (children of submenu - ul )
    const submenu = $(this).children('.submenu');
    // Checks CSS content for display:[none|block]
    // found answer here https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery
    if ($(submenu).is(':hidden')) {
      $(submenu).slideDown(200);
    } else {
      $(submenu).slideUp(200);
    }
  });
