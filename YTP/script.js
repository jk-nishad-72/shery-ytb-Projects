
gsap.from("#img1",{

opacity:0,
delay:0.4,
duration:1,
y:60


})

gsap.from("#img2",{

opacity:0,
delay:0.4,
duration:1,
x:60


})

gsap.from("#img3",{

opacity:0,
delay:0.4,
duration:1,
y:-60


})

gsap.from("#main h1",{

opacity:0,
delay:0.4,
duration:1,
y:20
})

 gsap.from("#page2 p , #page2 h1 , #page2 h5",{
    opacity:0,
   stagger:0.4,
    scrollTrigger:{
         
        trigger:"#page2 p",
        scroller:"body",
        start:"top 60%",
      
    }

 })