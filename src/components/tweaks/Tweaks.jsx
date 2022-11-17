import React, { useState } from 'react';
import './Tweaks.scss';

const Tweaks = () => {
    const [length, setLength] = useState(10);
    const [password, setPassword] = useState('');
    const [selected, setSelected] = useState('');
    const MAX       = 20;
    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS   = '0123456789';
    const SYMBOLS   = '/\\:@&"-_)(=}{*+.,;!?';

    const handleLengthSlider = e => {
        setLength(e.target.value);
    }

    const toggleUppercase = e => {
        if(e.target.checked) {
            setSelected(prev => {
                let string = '';
                string = prev.concat(UPPERCASE);
                
                return string;
            });
        } else {
            setSelected(prev => {
                let string = '';

                string = prev.replace(UPPERCASE, '');

                return string;
            });
        }
    }
    const toggleLowercase = e => {
        if(e.target.checked) {
            setSelected(prev => {
                let string = '';
                string = prev.concat(LOWERCASE);
                
                return string;
            });
        } else {
            setSelected(prev => {
                let string = '';

                string = prev.replace(LOWERCASE, '');

                return string;
            });
        }
    }
    const toggleNumbers = e => {
        if(e.target.checked) {
            setSelected(prev => {
                let string = '';
                string = prev.concat(NUMBERS);
                
                return string;
            });
        } else {
            setSelected(prev => {
                let string = '';

                string = prev.replace(NUMBERS, '');

                return string;
            });
        }
    }
    const toggleSymbols = e => {
        if(e.target.checked) {
            setSelected(prev => {
                let string = '';
                string = prev.concat(SYMBOLS);
                
                return string;
            });
        } else {
            setSelected(prev => {
                let string = '';

                string = prev.replace(SYMBOLS, '');

                return string;
            });
        }
    }

    const generatePassword = () => {
        const INPUT = document.getElementById('password');

        setPassword(prev => {
            let result           = '';
            let charactersLength = selected.length;

            for ( let i = 0; i < length; i++ ) {
                result += selected.charAt(Math.floor(Math.random() * charactersLength));
            }
            INPUT.value = result;
            
            return result;
        });


    }

    return (
        <div className="tweaks">
            <div className="length">
                <div className="length-head">
                    <label htmlFor="length-label">Character Length</label>
                    <span className="length-count">{ length }</span>
                </div>
                <div className="length-body">
                    <input 
                        type="range" 
                        name="length" 
                        id="length" 
                        onChange={ handleLengthSlider } 
                        value={ length } 
                        max={ MAX } 
                    />
                </div>
            </div>
            <div className="tweaks-checkboxes">
                <div className="field field__uppercase">
                    <input type="checkbox" name="uppercase" id="uppercase" onChange={ toggleUppercase } />
                    <label htmlFor="uppercase">Include Uppercase Letters</label>
                </div>
                <div className="field field__lowercase">
                    <input type="checkbox" name="lowercase" id="lowercase" onClick={ toggleLowercase } />
                    <label htmlFor="lowercase">Include Lowercase Letters</label>
                </div>
                <div className="field field__numbers">
                    <input type="checkbox" name="numbers" id="numbers" onClick={ toggleNumbers } />
                    <label htmlFor="numbers">Include Numbers</label>
                </div>
                <div className="field field__symbols">
                    <input type="checkbox" name="symbols" id="symbols" onClick={ toggleSymbols } />
                    <label htmlFor="symbols">Include Symbols</label>
                </div>
            </div>
            <div className="tweaks-strength">
                <label>Strength</label>
                <div className="bars">
                    <span className="label">Medium</span>
                    <div className="bar bar__active"></div>
                    <div className="bar bar__active"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <button 
                className="btn"
                onClick={ generatePassword }
            >
                Generate
                <i className="ri-arrow-right-line"></i>
            </button>
        </div>
    );
}

export default Tweaks;
