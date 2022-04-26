import React from 'react';
import './List.css'

const List = ({ items }) => {
    return (
        <ul className="List-wrap">
            {
                items.map(item => (
                    <li className="List-item"><strong>{item.label}</strong>{item.value}</li>
                ))
            }
        </ul>
    );
};

export default List;