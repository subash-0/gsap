// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     ease:"bounce",
//     delay:1,
//     backgroundColor:"green",
//     borderRadius:"50%",
//     scale:1.5,
//     cursor:"pointer",
   
// });

// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     ease:"bounce",
//     delay:3,
//     backgroundColor:"red",
//     rotate:360,
//     yoyo:true,
//     borderRadius:"5%",
   
// });

// gsap.from("#box3",{
//     opacity:0,
//     duration:2,
//     ease:"bounce",
//     delay:5,
//     stagger:0.5,
   
// });

let tl = gsap.timeline();
// tl.to("#box1",{
//     x:1000,
//     duration:2,
//     ease:"bounce",
//     delay:1,
//     backgroundColor:"green",
//     borderRadius:"50%",
//     scale:1.5,
//     cursor:"pointer",
   
// })
// .to("#box2",{
//     x:1000,
//     duration:2,
//     ease:"bounce",
//     backgroundColor:"red",
//     rotate:360,
//     yoyo:true,
//     borderRadius:"5%",
   
// })
// .to("#box3",{
//     opacity:0,
//     duration:2,
//     ease:"bounce",
    
   
// });

tl.from("nav",{
    y:-60,
    duration:2,
}
)
tl.from("h4",{
    y:-40,
    duration:1,
    opacity:0,
}
)
tl.from("a",{
    y:-40,
    duration:1,
    opacity:0,
    stagger:0.3,
}
)
tl.from("h2",{
    y:20,
    duration:1,
    opacity:0,
    scale:0.2,
}   
)