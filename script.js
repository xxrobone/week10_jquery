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

$('.submenu2')
  .parent()
  .click(function (e) {
    e.preventDefault();
    // prevents bubbling up the dom tree
    e.stopPropagation();
    const submenu2 = $(this).children('.submenu2');

    // Checks CSS content for display:[none|block]
    // found answer here https://stackoverflow.com/questions/178325/how-do-i-check-if-an-element-is-hidden-in-jquery
    if ($(submenu2).is(':hidden')) {
      $(submenu2).animate(
        {
          opacity: 1,
          left: '100%',
          top: '0',
          width: 'toggle',
        },
        400,
        function () {
          // Animation complete.
        }
      );
      /* .children(submenu2)
        .each(function (i) {
          $(this)
            .animate({ left: '2px', opacity: '1' }, 1000, function () {})
            .delay(++i * 1000);
        }); */
    } else {
      $(submenu2).animate(
        {
          opacity: 0,
          left: '0',
          top: '0',
          height: 'toggle',
          width: 'toggle',
          zIndex: '-1',
        },
        400,
        function () {
          // Animation complete.
        }
      );
      /*  .css({ '-webkit-transform': 'translatX(-240px)' }); */
    }
  });

// copying the menu active function
$('.submenu2 > li ').on({
  mouseenter: function () {
    $(this).addClass('active');
  },
  mouseleave: function () {
    $(this).removeClass('active');
  },
});

// random paragraph from array
/* 
let paragraphs = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint animi similique amet placeat voluptatem harum, necessitatibus blanditiis, aliquam, ullam distinctio voluptate eaque unde quidem quos deleniti odio nulla? Ipsa reprehenderit, modi velit, odit repellendus debitis totam explicabo fuga ad quis quam dolor eaque voluptatum officia ducimus temporibus enim ab tempore non.',
  'Dolorem assumenda libero, cupiditate maxime reprehenderit blanditiis odio officiis expedita suscipit asperiores nulla, a molestiae quae necessitatibus repudiandae inventore omnis autem maiores totam magnam.',
  ' Quod aspernatur recusandae quidem corporis temporibus necessitatibus quaerat ut nulla natus? Ea error officiis consectetur nemo at quibusdam quod nulla, officia illum consequuntur nesciunt?',
];

function randomPara(arr) {
  let para;
 
  if (
    Array.isArray(arr) &&
    arr !== null &&
    arr !== undefined &&
    arr.length !== 0
  ) {
    para = arr[Math.floor(Math.random() * arr.length)];
  } else {
    console.log('No array of words is found, need one to function');
  }
  return para;
}

let menuArr = $('.nav > li');

menuArr.each(function (i) {

  $('<div/>', {
    text: randomPara(paragraphs),
    class: 'item',
  }).appendTo('main');
  $('<h2/>', {
    text: $(this).text(),
    class: 'headline',
  }).appendTo('.item');

  console.log(i + ': ' + $(this).text());
});

 */
