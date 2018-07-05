import styles from './scss/filters.scss';
import React from 'react';
import Dropdown from '../dropdown/dropdown.jsx';

export default class Filters extends React.Component {
    componentDidMount() {}
    render() {
        return (
            <div className="filters">
                {this.props.filters.map((filter, index) => (
                    <Dropdown
                        key={index}
                        filter={filter}
                        onChange={this.props.setFilters}
                    />
                ))}
            </div>
        );
    }
}
