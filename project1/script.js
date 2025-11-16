function playBtnAnimation() {
    var videoBox = document.querySelector("#video-container")

    var playBtn = document.querySelector("#play")

    videoBox.addEventListener("mouseenter", function () {
        gsap.to(playBtn, {
            opacity: 1,
            scale: 1,
        })
    })

    videoBox.addEventListener("mouseleave", function () {
        gsap.to(playBtn, {
            opacity: 0,
            scale: 0,
        })
    })

    videoBox.addEventListener("mousemove", function (dets) {
        gsap.to(playBtn, {
            left: dets.x,
            top: dets.y
        })
    })
}

playBtnAnimation()

document.addEventListener("mousemove", function(dets){
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y
    })
})


document.querySelector("#child1").addEventListener("mouseenter", function(){
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)",
        backgroundColor: "rgb(251, 233, 211)"
    })
})
document.querySelector("#child1").addEventListener("mouseleave", function(){
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)"
    })
})

document.querySelector("#child2").addEventListener("mouseenter", function(){
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)",
        backgroundColor: "rgb(242, 211, 251)"
    })
})
document.querySelector("#child2").addEventListener("mouseleave", function(){
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)"
    })
})

document.querySelector("#child3").addEventListener("mouseenter", function(){
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)",
        backgroundColor: "rgb(211, 251, 212)"
    })
})
document.querySelector("#child3").addEventListener("mouseleave", function(){
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)"
    })
})

document.querySelector("#child4").addEventListener("mouseenter", function(){
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)",
        backgroundColor: "rgb(251, 211, 211)"
    })
})
document.querySelector("#child4").addEventListener("mouseleave", function(){
    gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)"
    })
})

