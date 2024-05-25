import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end }) => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div ref={ref}>
            {inView && <CountUp start={0} end={end} duration={3.5} separator="," />}
        </div>
    );
};

export default Counter;
