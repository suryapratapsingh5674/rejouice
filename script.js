const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function cursoreffect(){
    var page1Content = document.querySelector("#page1-content");

var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function(dets){
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
    })
})

page1Content.addEventListener("mouseenter", function(dets){
    gsap.to(cursor, {
        scale: 1,
    })
})

page1Content.addEventListener("mouseleave", function(dets){
    gsap.to(cursor, {
        scale: 0,
    })
})
}
cursoreffect();

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();




gsap.from("#page2 h1", {
    y: "100%",
    duration: 1,
    delay: 0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller: "#main",
    }
})

gsap.from("#hr", {
    x: "-100%",
    duration:1,
    scrollTrigger:{
        trigger:"#hr",
        scroller: "#main",
    }
})

gsap.from("#page4 h1", {
    y: "100%",
    duration: 1,
    delay: 0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "#main",
    }
})

gsap.from("#page3 h2", {
    y: "100%",
    duration: 0.5,
    delay: 0.2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller: "#main",
    }
})

gsap.from("#page6 h1", {
    y: "100%",
    duration: 1,
    delay: 0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 h1",
        scroller: "#main",
    }
})

gsap.from("#page8 h2", {
    y: "100%",
    duration: 1,
    delay: 0.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page8 h2",
        scroller: "#main",
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });

var tl = gsap.timeline();

tl.from("#loader h3", {
    x : 200,
    opacity: 0,
    duration: 1,
    stagger:0.1 
})

tl.to("#loader h3", {
    opacity: 0,
    x: -10,
    duration:1,
    stagger:0.1
})

tl.to("#loader", {
    y: "-110%" ,
})

tl.from("#page1-content h1 span", {
    y: "100%",
    duration: 0.8,
    opacity:0,
    stagger:0.1,
})
