let cursor = document.querySelector(".cursor")
let page1 = document.querySelector(".page1")
let navbar = document.querySelector(".navbar")
let play = document.querySelector(".page1 h1")
let close = document.querySelector(".games p")

page1.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        x: dets.x,
        y: dets.y,
        duration: 0.3
    })
})

navbar.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
        opacity: 0,
        duration: 0.1
    })
})
navbar.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
        opacity: 1,
        duration: 0.1
    })
})

play.addEventListener("mouseenter", function () {

    gsap.to(".page1 h1", {
        textShadow: "-5px -5px yellow, 0px 0px 40px yellow",
        duration: 0.3
    })
    gsap.to(".cursor", {
        scale: 8,
        zIndex: 1
    })
})
play.addEventListener("mouseleave", function () {

    gsap.to(".page1 h1", {
        textShadow: " 0px 0px yellow, 5px -5px yellow",
        duration: 0.3
    })
    gsap.to(".cursor", {
        scale: 1
    })
})

let time = gsap.timeline()
time.to(".load", {
    width: "1%"
})
time.to(".load", {
    width: "20%"
})
time.to(".load", {
    width: "40%"
})
time.to(".load", {
    width: "60%"
})
time.to(".loading", {
    transform: "translateX(-100%)"
})
time.to(".load", {
    visibility: "hidden",
})
time.from(".box1", {
    y: 600
})
time.from(".box2", {
    x: 500
})
time.from(".page1 h1", {
    opacity: 0,
    y: -300
})
time.to(".ball", {
    transform: "translateY(0px)",
    ease: "power1.in"
})
time.to(".ball", {
    x: 1011,
    y: 311,
    duration: 4,
    rotate: 720,
    ease: "power1.in",
    ease: "bounce.out"
})
let tll = gsap.timeline()
let repeat = 0
play.addEventListener("click", function () {
    tll.to(".games", {
        transform: "translateX(0%)"
    })
    tll.from(".games li", {
        opacity: 0,
        y: 50,
        stagger: 0.2
    })
    tll.from(".games p", {
        opacity: 0,
        y: 50
    })
})

close.addEventListener("click", function () {
    gsap.to(".games", {
        transform: "translateX(200%)"
    })
})

let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let four = document.querySelector("#four")
let five = document.querySelector("#five")

function img1(){
    one.addEventListener("mousemove", function (dets) {
        gsap.to(".img1", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 1
        })
    })
    one.addEventListener("mouseout",function(dets){
        gsap.to(".img1", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 0
        })
    })
}
img1()
function img2(){
    two.addEventListener("mousemove", function (dets) {
        gsap.to(".img2", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 1
        })
    })
    two.addEventListener("mouseout",function(dets){
        gsap.to(".img2", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 0
        })
    })
}
img2()
function img3(){
    three.addEventListener("mousemove", function (dets) {
        gsap.to(".img3", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 1
        })
    })
    three.addEventListener("mouseout",function(dets){
        gsap.to(".img3", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 0
        })
    })
}
img3()
function img4(){
    four.addEventListener("mousemove", function (dets) {
        gsap.to(".img4", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 1
        })
    })
    four.addEventListener("mouseout",function(dets){
        gsap.to(".img4", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 0
        })
    })
}
img4()
function img5(){
    five.addEventListener("mousemove", function (dets) {
        gsap.to(".img5", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 1
        })
    })
    five.addEventListener("mouseout",function(dets){
        gsap.to(".img5", {
            x: dets.x,
            y: dets.y,
            ease: "back.out",
            opacity: 0
        })
    })
}
img5()





