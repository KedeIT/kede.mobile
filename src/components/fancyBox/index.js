import React from 'react';

function fancyBox(props) {
    return (
        <div>
            <div>{props.topContent} </div>
            <div>{props.bottomContent} </div>
        </div>
    );
}


export default fancyBox;