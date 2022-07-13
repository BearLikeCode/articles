import React from 'react';

const DangerouslySetInnerHTML = () => {
    const placeHtml = () => {
        return {
            __html: "<img onerror='alert(\"Hacked!\");' src='invalid-image' />",
        };
    };
    return (
        <div>
            <p>We inserted img inside div using dangerouslySetInnerHTML property and add js code in onerror attribute</p>
            <div dangerouslySetInnerHTML={placeHtml()} />
        </div>
    );
};

export default DangerouslySetInnerHTML;