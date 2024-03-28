import React, {useEffect} from "react"
import { photos } from "../../data";
import { videos } from "../../data";
import { gsap } from "gsap";



function VideoElement({src}){
    return (
        <div className='hero-element'>
            <video
                className='collage-element'
                playsinline=""
                autoPlay
                webkit-playsinline=""
                loop
                src={src}
            ></video>
        </div>
    );
}
function ImageElement({src}){
    return (
        <div className='hero-element'>
            <img src={src} className='collage-element' alt="" />
        </div>
    )
}

export default function HeroCollage() {
    const leftImages = photos.slice(0,2);
    const rightImages = photos.slice(2, photos.length);

    const [leftVideo, rightVideo] = videos;

    useEffect(() => {
        const tl= gsap.timeline({
            delay: 1,
        });

        tl.fromTo(
            ".hero-element", 
            { y: 300}, 
            { 
                y: 0, 
                duration: 1, 
                delay: function(index){
                    return 0.2*index;
                },
            }
        );
    }, []);

    return (
        <div className='hero-collage'>
            <div className='left-column'>
                {leftImages.map((src) => (
                    <ImageElement src={src} />
                ))}
                <VideoElement src={leftVideo} />
            </div>
            <div className='right-column'>
                {rightImages.map((src) => (
                    <ImageElement src={src} />
                ))}
                <VideoElement src={rightVideo} />
            </div>
        </div>
    );
}