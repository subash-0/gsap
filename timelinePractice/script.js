let tl = gsap.timeline();
let menu = document.querySelector('#nav i');
let close = document.querySelector('#close');

tl.to('#menuItem', { right: "0", duration: 0.5 });
tl.from('.menu', { x: 150, duration: 0.5, stagger:0.2, opacity: 0 });
tl.from('#close', { x: 50, duration: 0.5, stagger:0.2, opacity: 0 });

tl.pause();

menu.addEventListener('click', () => {
    tl.play();
});
close.addEventListener('click', () => {
    tl.reverse();
});