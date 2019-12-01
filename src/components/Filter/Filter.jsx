import React from 'react';
import './Filter.sass';

export default function Filter(props) {

    const options = props.options;
    const optionItems = options.map((option, index) =>
        <option key={index}>{option}</option>
    );
    return (
        <select className={"filter " + props.className}>{optionItems}</select>
    );

}
