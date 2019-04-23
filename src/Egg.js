import React from 'react';
import egg from './egg.svg';

const Egg = (props) => {
    return (
        <div>
            <h1>Kliknij by pomalować jajko</h1>
            <div
                onClick={props.onClickPaintEgg}
            >
                <img src={egg} alt={'niepomalowane jajko'} />
            </div>
        </div>
    )
};

export default Egg;
