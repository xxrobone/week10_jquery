console.log('from app js');
let arr = document.querySelectorAll('.nav > li > a');

// random paragraph from array
let paragraphs = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint animi similique amet placeat voluptatem harum, necessitatibus blanditiis, aliquam, ullam distinctio voluptate eaque unde quidem quos deleniti odio nulla? Ipsa reprehenderit, modi velit, odit repellendus debitis totam explicabo fuga ad quis quam dolor eaque voluptatum officia ducimus temporibus enim ab tempore non.',
  'Dolorem assumenda libero, cupiditate maxime reprehenderit blanditiis odio officiis expedita suscipit asperiores nulla, a molestiae quae necessitatibus repudiandae inventore omnis autem maiores totam magnam.',
  ' Quod aspernatur recusandae quidem corporis temporibus necessitatibus quaerat ut nulla natus? Ea error officiis consectetur nemo at quibusdam quod nulla, officia illum consequuntur nesciunt?',
];

function randomPara(arr) {
  let para;
  // check that array actully is an array
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

arr.forEach((i) => {
  console.log(i.textContent);
  let div = document.createElement('div');
  div.classList.add('div_item');
  let headline = document.createElement('h2');
  let para = document.createElement('p');
  let btn = document.createElement('button');
  btn.classList.add('div_btn');
  btn.textContent = 'show more';
  para.textContent = randomPara(paragraphs);
  headline.textContent = i.textContent;
  document.querySelector('main').append(div);
  div.append(headline, para, btn);

  i.addEventListener('mouseenter', function () {
    if (i.textContent === headline.textContent) {
      headline.style.backgroundColor = '#282828';
      headline.style.opacity = '0.85';
    }
  });

  i.addEventListener('mouseleave', function () {
    if (i.textContent === headline.textContent) {
      headline.style.backgroundColor = '#000';
      headline.style.opacity = '1';
    }
  });

  btn.addEventListener('click', () => {
    if (para.classList.contains('clicked')) {
      para.classList.remove('clicked');
    } else {
      para.classList.add('clicked');
    }
  });
});
