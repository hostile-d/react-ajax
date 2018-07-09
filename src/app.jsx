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
        console.log(this.state.requestParameters);
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
    setRequestParameters = (event, filter) => {
        const requestParameters = { ...this.state.requestParameters };
        requestParameters[filter.name] = event.target.value;
        this.setState({ requestParameters }, this.loadCards);
    };
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
