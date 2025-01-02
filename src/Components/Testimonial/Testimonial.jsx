import React, { useEffect, useState, useRef } from 'react'
import TestimonialCard from './TestimonialCard'


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
                    newScrollPosition = scrollPosition + 315;
                    if (newScrollPosition >= maxScroll) {
                        newScrollPosition = maxScroll;
                        setScrollDirection('backward');
                    }
                } else {
                    index--;
                    setCircle(index)
                    newScrollPosition = scrollPosition - 315;
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
        <div className='w-full h-auto flex flex-col items-center gap-y-16 justify-center'>
            <div className="w-[80%] h-auto">
                <div className="w-full flex flex-col">
                    <div className="w-1/3 h-auto  border-l-4 border-lightGreen flex items-center ">
                        <h1 className="pl-2.5 p-1 text-6xl text-black font-bold">Testimonials</h1>
                    </div>
                    <div>
                        <p className="text-gray-700 mt-2 text-[16px] font-medium w-[55%] ">
                            See how I've helped our clients succeed. IT’s a highly Customizable,creative, modern, visually stunning and Bootstrap5 HTML5 Template.
                        </p>
                    </div>
                </div>
            </div>


            <div className='relative slider flex flex-col gap-y-7 w-[80%] h-auto p-1 '


                style={{ cursor: 'grab' }}>


                <div
                    ref={containerRef}
                    className="flex flex-row overflow-hidden"
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDrag}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                >
                    <TestimonialCard className="flex-shrink-0" name={'P'} />
                    <TestimonialCard className="flex-shrink-0" name={'A'} />
                    <TestimonialCard className="flex-shrink-0" name={'k'} />
                    <TestimonialCard className="flex-shrink-0" name={'i'} />
                    <TestimonialCard className="flex-shrink-0" name={'s'} />
                    <TestimonialCard className="flex-shrink-0" name={'t'} />
                    <TestimonialCard className="flex-shrink-0" name={'a'} />
                    <TestimonialCard className="flex-shrink-0" name={'n'} />
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
