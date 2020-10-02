import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

const Counter = ({ counter, inc, dec, reset}) => {
    return (
        <div className="wrapper">
            <div className="count">{counter}</div>
            <div className="wrapper__btn">
                <button className="inc btn" onClick={inc}>
                    <img src="./icon/plus.png" alt="" />
                </button>
                <button className="dec btn" onClick={dec}>
                    <img src="./icon/minus.png" alt="" />
                </button>
                <button className="reset btn" onClick={reset}>
                    <img src="./icon/reset.png" alt="" />
                </button>
            </div>
        </div>
    );
};

export default connect(state => ({counter: state}), actions)(Counter);
