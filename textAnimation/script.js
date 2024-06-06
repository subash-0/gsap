let h1Text = document.querySelector('h1').textContent;
let h1 = document.querySelector('h1');
let splitedText = h1Text.split('');

splitedText.forEach((letter, index) => {
    if(index <=splitedText.length/2){
    splitedText[index] = `<span class='a'>${letter}</span>`;
}else {
    splitedText[index] = `<span class='b'>${letter}</span>`;    
}
});
console.log(splitedText);
h1.innerHTML = splitedText.join('');

gsap.from('h1 .a', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'back.out'
});
gsap.from('h1 .b', {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: -0.1,
    ease: 'bounce.out'
});