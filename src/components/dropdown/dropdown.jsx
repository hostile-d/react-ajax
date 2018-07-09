import styles from './scss/dropdown.scss';
import React from 'react';

export default class Dropdown extends React.Component {
    selectHandler = e => {
        this.props.setRequestParameters(e, this.props.filter);
    };
    render() {
        return (
            <div className="dropdown" onChange={this.selectHandler}>
                <select className="dropdown__select">
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
