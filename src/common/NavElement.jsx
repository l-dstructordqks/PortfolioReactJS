import React from 'react';

export default function NavElement(props) {
    const { element, index, handleNavigation } = props
    return (
        <li className="navElement" id={index} onClick={() => {
            handleNavigation()
        }}>
            <p>{element}</p>
        </li>
    )
}