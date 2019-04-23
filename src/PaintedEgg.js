import React from 'react';
import paintedEgg from './egg-painted.svg';

const PaintedEgg = (props) => {
    return (
        <div
            className="container"
        >
            <h1>Wesołych świąt!</h1>
            <div
                onClick={props.onClickPaintEgg}
            >
                <img
                    className="image-container"
                    src={paintedEgg}
                    alt={'pomalowane jajko'}
                />
            </div>
        </div>
    )
};

export default PaintedEgg;
