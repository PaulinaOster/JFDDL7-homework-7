import React from 'react';
import paintedEgg from './egg-painted.svg';

const PaintedEgg = (props) => {
    return (
        <div>
            <h1>Wesołych świąt!</h1>
            <div
                onClick={props.onClickPaintEgg}
            >
                <img src={paintedEgg} alt={'pomalowane jajko'} />
            </div>
        </div>
    )
};

export default PaintedEgg;
