import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { gsap } from 'gsap';
import { featureSlides } from '../../data';
import FeatureSlide from './FeatureSlide';

function RenderImages({activeFeatureIndex}) {
    return featureSlides.map(({imageUrl}, index) => (
        <img 
            className={cn({"as-primary": activeFeatureIndex === index})}     
            key={imageUrl}
            style={{ backgroundImage: `url(${imageUrl})`}}
        />
    ));
}


export default function FeatureSlides() {
    const [activeFeatureIndex, setFeatureIndex] = useState(0);
    const featureSliderRef = useRef(null);
    const featureSlidesRightRef = useRef(null);

    useEffect(() => {
        function stopTrigger(){
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featureSlidesRightRef.current,
                    start: "top top",
                    end: () => `+=${featureSliderRef.current.offsetHeight}`,
                    scrub: true,
                    pin: true,
                },
            });
            return tl;
        }
        const master = gsap.timeline();
        master.add(stopTrigger());
    }, []);
    return (
        <div ref={featureSliderRef} className='feature-slides-container'>
            <div className = 'fearure-slides-left'>
                {featureSlides.map ((feature, index)=>(
                    <FeatureSlide
                        updateActiveImage={setFeatureIndex}
                        key={feature.imageUrl}
                        title={feature.title}
                        description={feature.description}
                        index={index}
                    />
                ))}
            </div>
            <div ref={featureSlidesRightRef} className = 'feature-slides-right'>
                <RenderImages activeFeatureIndex={activeFeatureIndex}/>
            </div>
        </div>
    )
}