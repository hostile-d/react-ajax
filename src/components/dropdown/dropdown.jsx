import styles from './scss/dropdown.scss';
import React from 'react';

export default class Dropdown extends React.Component {
    selectHandler = e => {
        this.props.setRequestParameters(e, this.props.filter);
    };
    render() {
        const name = this.props.filter.name;
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        return (
            <div className="dropdown" onChange={this.selectHandler}>
                <select className="dropdown__select">
                    <option value="">{capitalizedName}</option>
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
