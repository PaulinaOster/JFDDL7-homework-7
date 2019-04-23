import React from 'react';
import { connect } from 'react-redux';
import { setActionCreator } from './state/easterEgg';
import PaintedEgg from './PaintedEgg';
import Egg from './Egg';

const App = (props) => {
  return (
    <div>
      {
        props._isPainted ?
          <PaintedEgg
            onClickPaintEgg={props._onClickPaintEgg}
          />
          : <Egg
            onClickPaintEgg={props._onClickPaintEgg}
          />
      }
    </div>
  )
};

const mapStateToProps = state => ({
  _isPainted: state.easterEgg.isPainted,
});

const mapDispatchToProps = dispatch => ({
  _onClickPaintEgg: () => dispatch(setActionCreator()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
