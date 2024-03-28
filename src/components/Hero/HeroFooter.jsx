import React, { useEffect, useRef } from "react"
import { gsap } from "gsap";
export default function HeroFooter() {
    const ref = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "top center",
                scrub: true,
            },
        });
        tl.to(
            ".hero-container", 
            {backgroundColor: "white", duration: 0.25}, 
            "-=2"
        );
    }, []);


    return(
        <div ref={ref} className='hero-text-section-footer'>
            <h1 id='hero-text'>Our mission is to be a booster for the digital evolution of business</h1>
        </div>
    );
}