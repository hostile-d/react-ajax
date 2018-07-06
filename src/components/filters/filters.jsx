import styles from './scss/filters.scss';
import React from 'react';
import Dropdown from '../dropdown/dropdown.jsx';

export default class Filters extends React.Component {
    render() {
        return (
            <div className="filters">
                {this.props.filters.map((filter, index) => (
                    <Dropdown
                        key={index}
                        filter={filter}
                        setRequestParameters={this.props.setRequestParameters}
                    />
                ))}
            </div>
        );
    }
}
