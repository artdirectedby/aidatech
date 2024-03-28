import React, { useEffect, useRef } from "react"
import imgSrc from "../../assets/phone-mockup.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function HeroPhoneBlock() {
    const phoneRef = useRef(null);

    useEffect (() => {

        gsap.registerPlugin(ScrollTrigger);

        function intro() {
            const tl = gsap.timeline();

            tl.fromTo(phoneRef.current, {y: 200}, {y: 0, duration: 1 });
            return tl;
        }
        function stopTrigger() {
            const tl = gsap.timeline({
                delay: 1,
                scrollTrigger: {
                    trigger: phoneRef.current,
                    start: "top top",
                    end: "+=1300",
                    pin: true,
                    scrub: true,
                },
            });
            tl.to(phoneRef.current, { scale: 1.2 }, "+=0.2");
            tl.to(
                ".hero-container", 
                {
                    backgroundColor: 'black',
                    duration: 0.25,
                },
                "-=0.5"
            );
            return tl;
        }

        const master = gsap.timeline();
        master.add(intro());
        setTimeout(()=>{
            master.add(stopTrigger());
        }, 1000)
    }, []);
    return (
        <div className="hero-phone-black" ref={phoneRef}>
            <div className="hero-phone-template" style={{backgroundImage: `url(${imgSrc})`}}></div>
        </div>
    );
}
