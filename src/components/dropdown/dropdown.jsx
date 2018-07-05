import styles from './scss/dropdown.scss';
import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        return (
            <div className="dropdown">
                <select className="dropdown__select">
                    {console.log(this.props.filter.values)}
                    {this.props.filter.values.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}
