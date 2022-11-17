import React from "react";
import './Field.scss';

const Field = () => {

	return (
        <div className="password-field">
            <input 
                id="password" 
                type="text" 
                name="password" 
                placeholder="P4$5W0rD!" 
                disabled 
            />
            <button className="copy" title="Copy"><i className="ri-file-copy-line"></i></button>
        </div>
    );
};

export default Field;
