import React, { useEffect } from 'react';
import './Tweaks.scss';

const Tweaks = (props) => {

    useEffect(() => {
        const BARS = document.querySelectorAll('.bar');

        BARS.forEach(bar => {
            if(bar.classList.contains('bar__active')) {
                if(props.strength > 3) {
                    // strong
                    bar.style.backgroundColor = "var(--c-primary)";
                } else if(props.strength >= 2) {
                    // medium
                    bar.style.backgroundColor = "orange";
                } else if(props.strength === 1) {
                    // weak
                    bar.style.backgroundColor = "crimson";
                } else {
                    // nothing
                    bar.style.backgroundColor = "transparent";
                }
            } else {
                bar.style.backgroundColor = "transparent";
            }
        });
        
    }, [props.strength]);
    
    return (
        <div className="tweaks">
            <div className="length">
                <div className="length-head">
                    <label htmlFor="length-label">Character Length</label>
                    <span className="length-count">{ props.length }</span>
                </div>
                <div className="length-body">
                    <input 
                        type="range" 
                        name="length" 
                        id="length" 
                        onChange={ props.handleLengthSlider } 
                        value={ props.length } 
                        max={ props.max } 
                    />
                </div>
            </div>
            <div className="tweaks-checkboxes">
                <div className="field field__uppercase">
                    <input type="checkbox" name="uppercase" id="uppercase" onChange={ props.toggleUppercase } />
                    <label htmlFor="uppercase">Include Uppercase Letters</label>
                </div>
                <div className="field field__lowercase">
                    <input type="checkbox" name="lowercase" id="lowercase" onClick={ props.toggleLowercase } />
                    <label htmlFor="lowercase">Include Lowercase Letters</label>
                </div>
                <div className="field field__numbers">
                    <input type="checkbox" name="numbers" id="numbers" onClick={ props.toggleNumbers } />
                    <label htmlFor="numbers">Include Numbers</label>
                </div>
                <div className="field field__symbols">
                    <input type="checkbox" name="symbols" id="symbols" onClick={ props.toggleSymbols } />
                    <label htmlFor="symbols">Include Symbols</label>
                </div>
            </div>
            <div className="tweaks-strength">
                <label>Strength</label>
                <div className="bars">
                    <span className="label">
                        {  props.strength > 3 ? 'Strong' : props.strength >= 2 ? 'Medium' : 'Weak' }
                    </span>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
            </div>
            <button 
                className="btn"
                onClick={ props.generatePassword }
            >
                Generate
                <i className="ri-arrow-right-line"></i>
            </button>
        </div>
    );
}

export default Tweaks;
