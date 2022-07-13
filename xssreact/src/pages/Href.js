import React, { useState } from 'react';

const Href = () => {
    const [data, setData] = useState();
    const handleType = (e) => {
        setData(e.target.value);
    };

    return (
        <div>
            <p>Place this code inside input: <code>javascript: alert('Hacked');</code></p>
            <input
                type='text'
                name='text'
                value={data}
                onChange={(e) => handleType(e)}
            />
            <a href={data} className="button">Click Here</a>
        </div>
    );
};

export default Href;