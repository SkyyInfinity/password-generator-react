import React, { useState } from 'react';
import Field from './components/field/Field';
import Tweaks from './components/tweaks/Tweaks';

const App = () => {
    const MAX       = 20;
    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS   = '0123456789';
    const SYMBOLS   = '/\\@&-_)(=}{*+!?';

    const [length, setLength] = useState(10);
    const [selected, setSelected] = useState('');
    const [password, setPassword] = useState('');

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
        setPassword(prev => {
            let result           = '';
            let charactersLength = selected.length;

            for ( let i = 0; i < length; i++ ) {
                result += selected.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            return result;
        });
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
