import React from 'react';
import egg from './egg.svg';

const Egg = (props) => {
    return (
        <div
            className="container"
        >
            <h1>Kliknij w jajko, by pomalować jajko</h1>
            <div
                onClick={props.onClickPaintEgg}
            >
                <img
                    className="image-container"
                    src={egg}
                    alt={'niepomalowane jajko'}
                />
            </div>
        </div>
    )
};

export default Egg;
