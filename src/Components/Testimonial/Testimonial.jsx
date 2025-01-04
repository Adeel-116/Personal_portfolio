import React, { useEffect, useState, useRef } from 'react'
import TestimonialCard from './TestimonialCard'
import Heading from '../Heading';


function Testimonial() {
    const containerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('forward');
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleDragStart = (e) => {
        setIsDragging(true);
        console.log(e.pageX, containerRef.current.offsetLeft)
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        containerRef.current.style.cursor = 'grab';
    };

    const handleDrag = (e) => {
      
        if (!isDragging) return;
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1; // Adjust speed
        containerRef.current.scrollLeft = scrollLeft - walk;
        console.log(scrollLeft)
    };


    const [circle, setCircle] = useState(1)

    const scrollSmoothly = (start, end, duration) => {
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentScroll = start + (end - start) * progress;

            if (containerRef.current) {
                containerRef.current.scrollLeft = currentScroll;
            }

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                const container = containerRef.current;
                const maxScroll = container.scrollWidth - container.clientWidth;

                let newScrollPosition;
                let index = circle;

                if (scrollDirection === 'forward') {
                    index++;
                    setCircle(index)
                    newScrollPosition = scrollPosition + 320;
                    if (newScrollPosition >= maxScroll) {
                        newScrollPosition = maxScroll;
                        setScrollDirection('backward');
                    }
                } else {
                    index--;
                    setCircle(index)
                    newScrollPosition = scrollPosition - 320;
                    if (newScrollPosition <= 0) {
                        newScrollPosition = 0;
                        setScrollDirection('forward');
                    }
                }

                scrollSmoothly(scrollPosition, newScrollPosition, 1000);
                setScrollPosition(newScrollPosition);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [scrollPosition, scrollDirection]);


    return (
        <div className='w-full h-auto flex  py-16 flex-col items-center gap-y-16 justify-center ' >
            <div className="2xl:w-[80%] xl:w-[85%] w-[90%] h-auto ">
                <Heading heading={"Testimonial"} paragraph={"See how I've helped our clients succeed. IT’s a highly Customizable,creative, modern, visually stunning and Bootstrap5 HTML5 Template."} link={""}/>
            </div>


            <div className='2xl:w-[80%] xl:w-[85%] w-[90%] relative slider flex flex-col gap-y-7  h-auto p-1 '

                style={{ cursor: 'grab' }}>


                <div
                    ref={containerRef}
                    className="flex flex-row overflow-hidden"
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDrag}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                >
                    <TestimonialCard className="flex-shrink-0" name={'USA'} />
                    <TestimonialCard className="flex-shrink-0" name={'Canada'} />
                    <TestimonialCard className="flex-shrink-0" name={'India'} />
                    <TestimonialCard className="flex-shrink-0" name={'Pakistan'} />
                    <TestimonialCard className="flex-shrink-0" name={'China'} />
                    <TestimonialCard className="flex-shrink-0" name={'Russia'} />
                    <TestimonialCard className="flex-shrink-0" name={'Iran'} />
                    <TestimonialCard className="flex-shrink-0" name={'Vitenam'} />
                </div>

                <div className='circles w-full h-auto flex space-x-2 justify-center items-center'>
                    <div className={`w-3 h-3 ${(circle === 1) ? 'bg-lightGreen' : 'bg-gray'} rounded-full`}></div>
                    <div className={`w-3 h-3 ${(circle === 2) ? 'bg-lightGreen' : 'bg-gray'} rounded-full`}></div>
                    <div className={`w-3 h-3 ${(circle === 3) ? 'bg-lightGreen' : 'bg-gray'} rounded-full`}></div>
                    <div className={`w-3 h-3 ${(circle === 4) ? 'bg-lightGreen' : 'bg-gray'} rounded-full`}></div>
                    <div className={`w-3 h-3 ${(circle === 5) ? 'bg-lightGreen' : 'bg-gray'} rounded-full`}></div>
                </div>
            </div>
        </div>

    )
}

export default Testimonial
