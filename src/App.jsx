import React, { useState } from 'react';
import Field from './components/field/Field';
import Tweaks from './components/tweaks/Tweaks';
import Toastinette from './assets/plugins/toastinette.js';
import './assets/plugins/toastinette.min.css';

const App = () => {
    const MAX       = 20;
    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS   = '0123456789';
    const SYMBOLS   = '/\\@&-_)(=}{*+!?';

    const [length, setLength] = useState(10);
    const [selected, setSelected] = useState('');
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    const handleLengthSlider = e => {
        setLength(e.target.value);
    }

    const increaseStrength = (data) => {
        let bars = document.querySelectorAll('.bar');

        for(let i = 0; i < data; i++) {
            bars[i].classList.add('bar__active');
        }
    };
    const decreaseStrength = (data) => {
        let bars = document.querySelectorAll('.bar');

        for(let i = data; i >= data; i--) {
            bars[i].classList.remove('bar__active');
        }
    };

    const toggleUppercase = e => {
        if(e.target.checked) {
            setSelected(prev => {
                let string = '';
                string = prev.concat(UPPERCASE);
                
                return string;
            });
            setStrength(prev => {
                let result = prev + 1;

                increaseStrength(result);

                return result;
            });
        } else {
            setSelected(prev => {
                let string = '';

                string = prev.replace(UPPERCASE, '');

                return string;
            });
            setStrength(prev => {
                let result = prev - 1;

                decreaseStrength(result);

                return result;
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
            setStrength(prev => {
                let result = prev + 1;

                increaseStrength(result);

                return result;
            });
        } else {
            setSelected(prev => {
                let string = '';

                string = prev.replace(LOWERCASE, '');

                return string;
            });
            setStrength(prev => {
                let result = prev - 1;

                decreaseStrength(result);

                return result;
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
            setStrength(prev => {
                let result = prev + 1;

                increaseStrength(result);

                return result;
            });
        } else {
            setSelected(prev => {
                let string = '';

                string = prev.replace(NUMBERS, '');

                return string;
            });
            setStrength(prev => {
                let result = prev - 1;

                decreaseStrength(result);

                return result;
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
            setStrength(prev => {
                let result = prev + 1;

                increaseStrength(result);

                return result;
            });
        } else {
            setSelected(prev => {
                let string = '';

                string = prev.replace(SYMBOLS, '');

                return string;
            });
            setStrength(prev => {
                let result = prev - 1;

                decreaseStrength(result);

                return result;
            });
        }
    }
    const generatePassword = () => {
        if(selected.length !== 0) {
            setPassword(prev => {
                
                    let result = '';
                    let charactersLength = selected.length;
                    let trueChars = selected.split("").sort(function(a, b) { return (Math.random() < 0.5 ? 1 : -1); }).join("");

                    for ( let i = 0; i < length; i++ ) {
                        result += trueChars.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    
                    return result;
            });
        } else {
            // Error message
            Toastinette.init({
                position: 'top-center',
                title: 'Oops!',
                message: 'Can\'t generate password with empty characters.',
                type: 'error',
                autoClose: 4000,
                progress: true
            });
        }
    }

    return (
        <div className="app">
            <h1>Password Generator</h1>
            <Field 
                password={ password }
            />
            <Tweaks 
                max={ MAX }
                length={ length }
                strength={ strength } 
                handleLengthSlider={ handleLengthSlider }
                toggleUppercase={ toggleUppercase }
                toggleLowercase={ toggleLowercase }
                generatePassword={ generatePassword }
                toggleNumbers={ toggleNumbers }
                toggleSymbols={ toggleSymbols }
                password={ password }

            />
        </div>
    )
}

export default App;
