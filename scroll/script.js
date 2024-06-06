gsap.from("#page1 #box",{
    scale:0,
    duration:2,
    delay:1,
});
gsap.from("#page2 #box",{
    scale:0,
    duration:2,
    
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 80%",
        markers:true,
        scrub:2,
        pin:true
    }
});
gsap.from("#pag31 #box",{
    scale:0,
    duration:2,
    delay:1,
})