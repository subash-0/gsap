gsap.to("#box1",{
    x:1000,
    duration:2,
    ease:"bounce",
    delay:1,
    backgroundColor:"green",
    borderRadius:"50%",
    scale:1.5,
    cursor:"pointer",
   
});

gsap.from("#box2",{
    x:1000,
    duration:2,
    ease:"bounce",
    delay:1,
    backgroundColor:"red",
    rotate:360,
    repeat:Infinity,
    yoyo:true,
    borderRadius:"5%",
   
});

gsap.from("h1",{
    opacity:0,
    duration:2,
    ease:"bounce",
    delay:1,
    stagger:0.5,
   
});