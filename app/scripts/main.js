/* fixed route element with scroll event */
var sectionTop_1 = document.body.querySelector('#section-1').offsetTop;
var routeElm = document.body.querySelector('ul.route');

window.addEventListener('scroll', function(event){
  event.preventDefault();
  if(sectionTop_1 < window.scrollY){
    routeElm.style.position = 'fixed';
    routeElm.style.top = '35vh';
  }else{
    routeElm.style.position = 'absolute';
    routeElm.style.top = '135vh';
  }
});

document.body.querySelector('.header button').addEventListener('click', function(){
  fullpage.moveSectionDown();
});

document.body.querySelector('#section-1 button').addEventListener('mouseenter', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = 'url("Seta/images/bg_venise.jpg")';
});
document.body.querySelector('#section-1 button').addEventListener('mouseleave', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = '#f77363';
});
document.body.querySelector('#section-2 button').addEventListener('mouseenter', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = 'url("Seta/images/bg_constantinople.jpg")';
});
document.body.querySelector('#section-2 button').addEventListener('mouseleave', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = '#f77363';
});
document.body.querySelector('#section-3 button').addEventListener('mouseenter', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = 'url("Seta/images/bg_nishapur.jpg")';
});
document.body.querySelector('#section-3 button').addEventListener('mouseleave', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = '#f77363';
});
document.body.querySelector('#section-4 button').addEventListener('mouseenter', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = 'url("Seta/images/bg_kashgar.jpg")';
});
document.body.querySelector('#section-4 button').addEventListener('mouseleave', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = '#f77363';
});
document.body.querySelector('#section-5 button').addEventListener('mouseenter', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = 'url("Seta/images/bg_dunhuang.jpg")';
});
document.body.querySelector('#section-5 button').addEventListener('mouseleave', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = '#f77363';
});
document.body.querySelector('#section-6 button').addEventListener('mouseenter', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = 'url("Seta/images/bg_beijing.jpg")';
});
document.body.querySelector('#section-6 button').addEventListener('mouseleave', function(){
  this.parentElement.parentElement.parentElement.parentElement.style.background = '#f77363';
});
