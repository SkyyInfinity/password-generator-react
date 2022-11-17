import React from 'react';
import Field from './assets/components/field/Field';
import Tweaks from './assets/components/tweaks/Tweaks';

const App = () => {

    return (
        <div className="app">
            <h1>Password Generator</h1>
            <Field />
            <Tweaks />
        </div>
    )
}

export default App;
