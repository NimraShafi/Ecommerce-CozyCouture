var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
    cursorBlur.style.left = dets.x- 150+"px";
    cursorBlur.style.top = dets.y- 150+"px";

})

var li = document.querySelectorAll(".header");
li.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 0
        cursor.style.border = "1px solid #8d5f5f"
        cursor.style.backgroundColor = "transparent"
    })
})
li.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "1px solid #8d5f5f"
        cursor.style.backgroundColor = "#8d5f5f"
    })
})


var tl = gsap.timeline()
tl.from(".image-box",{
    x:-150,
    duration:3,
    opacity:0,
    delay:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".image-box",
        scroller:"body",
        start:"top 60%",
        end:"top 10%",
        scrub:2
    }
})

tl.from(".logo",{
    opacity:0,
    y:-40,
    duration:0.5,
    delay:1

})
tl.from(".freeDelivery-navbar p",{
    opacity:0,
    y:-40,
    duration:0.5
})
tl.from(".menu-navbar ul li",{
    opacity:0,
    y:-40,
    duration:0.5,
    stagger:0.3
})
tl.from(".cart-login",{
    opacity:0,
    y:-40,
    duration:0.5,
    stagger:0.3
})
gsap.to("#main",{
    backgroundColor:"#fff",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50vh",
        end:"top -1100vh",
        scrub:2

    }
})
gsap.from(".newsletter",{
    y:50,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".newsletter",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"bottom 30%",
        scrub:2
    }
})

gsap.from(".section-image",{
   scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".section-image",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"bottom 30%",
        scrub:2
    }
})


gsap.from(".promises-container .promise-box",{
    y:100,
     opacity:0,
     duration:2,
     stagger:0.3,
     scrollTrigger:{
         trigger:".promises-container .promise-box",
         scroller:"body",
        //  markers:true,
         start:"top 60%",
         end:"bottom 30%",
         scrub:1
     }
 })

 
gsap.from(".discount-div-content",{
     x:-100,
     rotate:"45deg",
     opacity:0,
     duration:4,
     stagger:0.3,
     scrollTrigger:{
         trigger:".discount-div-content",
         scroller:"body",
        //  markers:true,
         start:"top 50%",
         end:"bottom 40%",
         scrub:2
     }
 })
 gsap.from(".content-area .testimonial-content",{
    y:-100,
    // rotate:"45deg",
    opacity:0,
    duration:3,
    stagger:0.8,
    scrollTrigger:{
        trigger:".content-area .testimonial-content",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"bottom 40%",
        scrub:2
    }
})

gsap.from(".ourStory",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".ourStory",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    }
})
gsap.from(".ourMission",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".ourMission",
        scroller:"body",
        // markers:true,
        start:"top 50%",
    }
})

gsap.from(".aboutSection h2",{
    scale:0.3,
    rotate: "90deg",
    opacity:0,
    duration:2,
    stagger:0.8,
    // scrollTrigger:{
    //     trigger:".ourMission",
    //     scroller:"body",
    //     // markers:true,
    //     start:"top 50%",
    //     end:"bottom 40%",
    //     scrub:2
    // }
})
