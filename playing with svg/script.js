var Path ='M 10 80 Q 500 100 990 100'
var finalPath ='M 10 80 Q 500 100 990 80'
const string = document.querySelector('#string');
const dot = document.querySelector('#dot');
string.addEventListener('mousemove', (e) => {
   Path =`M 10 80 Q ${e.x} ${e.y} 990 100`
   gsap.to('svg path', {duration: 0.3, attr: {d: Path}});
   
});
string.addEventListener('mousemove', (e) => {
   console.log(e.y);
});
string.addEventListener('mouseleave', (e) => {
   gsap.to('svg path', {duration: 1.5, ease:"elastic.out", attr: {d: finalPath}});
});

document.addEventListener('mousemove', (e) => {
   gsap.to(dot, {duration: 0.3, x: e.pageX *2-50+'%', y: e.pageY *2-50+'%'});
   dot.style.left = e.pageX + 'px';
   dot.style.top = e.pageY + 'px';
});