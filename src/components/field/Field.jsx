import React from "react";
import './Field.scss';

const Field = (props) => {
    const copyPassword = () => {
        if(props.password != '') {
            navigator.clipboard.writeText(props.password);
            // TODO Show notice "Copied!"
        } else {
            alert('Please generate password before copy!');
        }   
    }

	return (
        <div className="password-field">
            <input 
                id="password" 
                type="text" 
                name="password" 
                placeholder="P4$5W0rD!"
                value={ props.password !== '' ? props.password : '' }
                disabled 
            />
            <button 
                className="copy" 
                title="Copy" 
                onClick={ copyPassword }
            >
                <i className="ri-file-copy-line"></i>
            </button>
        </div>
    );
};

export default Field;
