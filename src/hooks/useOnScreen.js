import { useEffect, useState } from "react";

function useOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        console.log('useOnScreen hook called');
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('IntersectionObserver callback', entry.isIntersecting);
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold: 0.5,
            }
        );
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, rootMargin]);

    console.log('isIntersecting:', isIntersecting);

    return isIntersecting;
}

export default useOnScreen;
