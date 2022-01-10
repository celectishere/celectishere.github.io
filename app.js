const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".svg", { y: "0%", duration: 0.1});
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
