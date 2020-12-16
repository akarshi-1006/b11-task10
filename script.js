


const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#content",
        start: "top center",
        toggleActions: 'play pause resume reverse'
    }
});

tl2.from('.block', {
    stagger: .3,
    opacity: 0,
    delay: .1,
    duration: 1,
    ease: 'Expo.easeInOut'
})
.from('.block .img', {
    stagger: .1,
    opacity: 0,
    duration: 1.5,
    ease: 'Expo.easeInOut'
})
.from('#content p', {
    y: 10,
    opacity: 0,
    duration: 1.5,
    ease: 'Expo.easeInOut'
})