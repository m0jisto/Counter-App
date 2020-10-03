import React, { useContext } from 'react';
import { ContextApp } from './app';
import { inc, dec, reset } from '../actions/';

const Counter = () => {
    const {state, dispatch} = useContext(ContextApp)

    return (
        <div className="wrapper">
            <div className="count">{state}</div>
            <div className="wrapper__btn">
                <button className="inc btn" onClick={() => dispatch(inc())}>
                    <img src="./icon/plus.png" alt="" />
                </button>
                <button className="dec btn" onClick={() => dispatch(dec())}>
                    <img src="./icon/minus.png" alt="" />
                </button>
                <button className="reset btn" onClick={() => dispatch(reset())}>
                    <img src="./icon/reset.png" alt="" />
                </button>
            </div>
        </div>
    )
};

export default Counter;
