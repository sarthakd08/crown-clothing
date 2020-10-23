import React, { useEffect, useState } from 'react';

const TestComponent = () => {
    const [count, setCount] = useState(0);
    const [isStartCounter, setisStartCounter] = useState(false);
    const maxCount = 10;

    useEffect(() => {
        if(isStartCounter) {
            const id = setInterval(() => {
                console.log('interval Running', count);
                if(count == maxCount) {
                    console.log('max reached');
                    setisStartCounter(false);
                    return;
                }
                setCount(prevCount => (prevCount < maxCount) ? (prevCount + 1) : (prevCount))
            }, 300)
        }

        return (id) => { clearInterval(id)}
    }, [isStartCounter])

    const startCounter = () => {
        console.log('StartCounter Clicked');
        setisStartCounter(true);
    }

    return (
        <div>
            {count < maxCount ? <h3>{count}</h3> : <h3>Count Reached Max Count</h3>}
            {count < maxCount && <button onClick={startCounter}>Start Counter</button>}
        </div>
    )

}

export default TestComponent;