import React, { useState } from 'react';

const Eval = () => {
    const [data, setData] = useState();

    const handleType = (e) => {
        setData(e.target.value);
    };

    const handleSubmit = () => {
        eval(data);
    };

    return (
        <div>
            <p>Place this code inside input: <code>alert('Hacked')</code></p>
            <input
                type='text'
                name='firstName'
                value={data}
                onChange={(e) => handleType(e)}
            />
            <button onClick={() => handleSubmit()} className="button">Submit</button>{' '}
        </div>
    );
};

export default Eval;