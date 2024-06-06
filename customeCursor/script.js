let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');
let image = document.querySelector('#image');

main.addEventListener('mousemove', (e) => {
   
    gsap.to(cursor, 0.5, {x: e.clientX, y: e.clientY , ease: "back.out" });
    // let x = e.clientX;
    // let y = e.clientY;
    // cursor.style.left = x + 'px';
    // cursor.style.top = y + 'px';
});
image.addEventListener('mouseenter', () => {
    cursor.innerHTML ="View Image"
    gsap.to(cursor, 0.5, {scale: 2, backgroundColor:'#ffffff9a'});
});
image.addEventListener('mouseleave', () => {
    cursor.innerHTML =""
    gsap.to(cursor, 0.5, {scale: 1,backgroundColor:'#fff'});
});