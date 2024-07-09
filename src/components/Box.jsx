import React from 'react';

function Box(props) {
    return (
        <div className="boxInfo">
            <p className="corDestaque">{props.texto}</p>
        </div>
    );
}

export default Box;