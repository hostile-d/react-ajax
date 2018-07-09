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
            requestParameters: {},
            isLoading: false
        };
    }
    componentDidMount() {
        this.loadCards();
        this.loadFilters();
    }
    loadCards() {
        this.setState({ isLoading: true });
        axios
            .get(`/api/sample-cards`, {
                params: {
                    ...this.state.requestParameters
                }
            })
            .then(res => {
                this.setState({ isLoading: false });
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
        if (event.target.value === '') {
            const requestParameters = { ...this.state.requestParameters };
            for (var key in requestParameters) {
                if (requestParameters.hasOwnProperty(key)) {
                    if (filter.name === key) {
                        delete requestParameters[key];
                    }
                }
            }
            this.setState({ requestParameters }, this.loadCards);
        } else {
            const requestParameters = { ...this.state.requestParameters };
            requestParameters[filter.name] = event.target.value;
            this.setState({ requestParameters }, this.loadCards);
        }
    };
    render() {
        return (
            <div className="container">
                <Filters
                    filters={this.state.filters}
                    setRequestParameters={this.setRequestParameters}
                />
                <Grid
                    cards={this.state.cards}
                    isLoading={this.state.isLoading}
                />
            </div>
        );
    }
}
