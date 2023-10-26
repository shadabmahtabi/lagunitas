// ********** locomotive **********
loco = ()=>{
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
        top: 0,
        left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
// loco();
// ********** Gsap **********
gsap.to("#bottle",{
    scrollTrigger: {
        trigger: ".section:nth-child(2)",
        start: "10% 90%",
        end: "0% 60%",
        // markers: true,
        scrub: 1,
    },
    rotate: "-14.5deg",
    ease: Power0.easeOut,
})
gsap.to("#bottle",{
    scrollTrigger: {
        trigger: ".section:nth-child(4)",
        start: "0% 50%",
        end: "0% -100%",
        // markers: true,
        scrub: 0.5,
    },
    scale: .4,
    ease: Power0.easeOut,
})
let playBtn = document.querySelector("#playBtn");
document.querySelector("#videoPart").addEventListener("mouseenter",()=>{
    playBtn.style.opacity = "1";
    playBtn.style.pointerEvents = "initial";
    playBtn.addEventListener("mouseenter",()=>{
        playBtn.style.opacity = ".9";
    })
})
document.querySelector("#videoPart").addEventListener("mouseleave",()=>{
    playBtn.style.opacity = "0";
    playBtn.style.pointerEvents = "none";
    playBtn.addEventListener("mouseleave",()=>{
        playBtn.style.opacity = "1";
    })
})
let flag = 0;
playBtn.addEventListener("click", ()=>{
    if(flag === 0){
        playBtn.innerHTML = `<ion-icon name="pause-outline"></ion-icon>`;
        document.querySelector("video").play();
        flag = 1
    }
    else{
        playBtn.innerHTML = `<ion-icon name="play-outline"></ion-icon>`;
        document.querySelector("video").pause();
        flag = 0
    }
})