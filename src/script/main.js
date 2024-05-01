//header
var header__button__left = document.querySelector(".header__right--btnleft");
var header__button__right = document.querySelector(".header__right--btnRight");
var header__right__btnleft__link = document.querySelector(".header__right--btnleft--link");
var header__right__btnRight__link = document.querySelector(".header__right--btnRight--link");


header__button__left.addEventListener('mouseenter', function(event) {
    header__button__left.style.backgroundColor = 'rgba(93, 80, 198, 1)';
    header__right__btnleft__link.style.color = 'rgba(238, 238, 238, 1)';
    header__button__left.style.boxShadow = '0 2px 3px 1px rgb(90, 25, 241)';

    header__right__btnRight__link.style.color = 'rgba(34, 40, 49, 1)';
    header__button__right.style.backgroundColor = 'white';
    

  });

  header__button__left.addEventListener('mouseleave', function(event) {
   header__button__left.style.backgroundColor = 'white';
   header__right__btnleft__link.style.color = 'rgba(34, 40, 49, 1)';
   header__right__btnRight__link.style.color = 'rgba(238, 238, 238, 1)';
   header__button__right.style.backgroundColor = 'rgba(93, 80, 198, 1)';
   header__button__left.style.boxShadow = 'none';

  });

