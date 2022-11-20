import React from "react";
import './Field.scss';
import Toastinette from '../../assets/plugins/toastinette.js';
import '../../assets/plugins/toastinette.min.css';

const Field = (props) => {
    const copyPassword = () => {
        if(props.password != '') {
            navigator.clipboard.writeText(props.password);
            // Success message
            Toastinette.init({
                position: 'top-center',
                title: 'Great!',
                message: 'The password has been copied successfully.',
                type: 'success',
                autoClose: 4000,
                progress: true
            });
        } else {
            // Error message
            Toastinette.init({
                position: 'top-center',
                title: 'Oops!',
                message: 'Please generate password before copy.',
                type: 'error',
                autoClose: 4000,
                progress: true
            });
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
