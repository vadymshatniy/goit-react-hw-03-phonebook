import React from 'react';
import profileStyles from "./Filter.module.css"

function Filter({ value, onChange }) {
    return (
        <label>
            Find contact by name
            <input type="text" value={value} onChange={onChange} className={profileStyles.filter} />
        </label >
    )
};


export default Filter;