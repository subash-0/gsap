gsap.to("#box2 h1",{
   transform:"translateX(-300%)",
   scrollTrigger:{
      trigger:"#box2",
      scroller:"body",
      start:"top 0",
      end:"top -300%",
      markers:true,
      scrub:2,
      pin:true
      
      
   }
})