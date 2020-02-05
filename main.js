var right = document.querySelector('.left');
var left = document.querySelector('.right');
var container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});
