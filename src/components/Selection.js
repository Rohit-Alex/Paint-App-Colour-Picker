import React, { useState} from 'react';

const Selection = (props) => {
    const[background, setBackground] = useState({background:""});
    const { key, applyColor} = props;
    return (
        <div className="fix-box" style={{background}} onClick={()=>{applyColor(setBackground)}}>
            <h2 className="subheading">Selection</h2>
        </div>
    );
};

export default Selection;
