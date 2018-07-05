import styles from './generic/settings.scss';
import React from 'react';
import axios from 'axios';
import Grid from './components/grid/grid.jsx';
import Filters from './components/filters/filters.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            filters: [],
            requestParameters: {}
        };
    }
    componentDidMount() {
        this.loadCards();
        this.loadFilters();
    }
    loadCards() {
        axios
            .get(`/api/sample-cards`, {
                params: {
                    tag: 'night'
                }
            })
            .then(res => {
                const cards = [...res.data];
                this.setState({ cards });
            });
    }
    loadFilters() {
        axios.get(`/api/sample-filters`).then(res => {
            const filters = [...res.data];
            this.setState({ filters });
        });
    }
    setRequestParameters(parameter) {}
    render() {
        return (
            <div className="container">
                <Filters
                    filters={this.state.filters}
                    setRequestParameters={this.setRequestParameters}
                />
                <Grid cards={this.state.cards} />
            </div>
        );
    }
}
