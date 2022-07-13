import React from 'react';

const Home = () => {

    return (
        <div>
            <p>Links:</p>
            <a href='/eval' className="link">Eval example</a>
            <a href='/href' className="link">Href example</a>
            <a href='/dangerously' className="link">DangerouslySetInnerHTML example</a>
        </div>
    );
};

export default Home;