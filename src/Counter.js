import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <h2>Increment by 5</h2>
            &nbsp;
            <div className='container'>
                <h1>{count}</h1>
            </div>
            <section className='btn-container'>
                <button onClick={() => setCount(count + 5)} className='increment'>+</button>
                <button onClick={() => setCount(count - 5)} className='increment'>-</button>
            </section>
        </>
    )
}

export default Counter