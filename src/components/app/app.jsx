import styles from '../../generic/settings.scss';
import React from 'react';
import axios from 'axios';
import Grid from '../grid/grid.jsx';
import Filters from '../filters/filters.jsx';
import queryString from 'query-string';
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
        this.loadFilters();
        this.loadCards();
    }
    getQueryString() {
        const params = queryString.parse(this.props.location.search);
        const filterNames = {};
        this.state.filters.forEach(item => {
            filterNames[item.name] = true;
        });
        for (var key in params) {
            if (!filterNames.hasOwnProperty(key)) {
                delete params[key];
            }
        }
        const requestParameters = {
            ...this.state.requestParameters,
            ...params
        };
        this.setState({ requestParameters });
        this.setState({ requestParameters }, this.loadCards);
    }
    setQueryString() {
        this.props.history.push({
            pathname: '/',
            search: `?${queryString.stringify(this.state.requestParameters)}`
        });
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
                this.setQueryString();
            });
    }
    loadFilters() {
        axios.get(`/api/sample-filters`).then(res => {
            const filters = [...res.data];
            this.setState({ filters }, this.getQueryString);
        });
    }
    setRequestParameters = (event, filter) => {
        if (event.target.value === '') {
            const requestParameters = { ...this.state.requestParameters };
            for (var key in requestParameters) {
                if (
                    requestParameters.hasOwnProperty(key) &&
                    filter.name === key
                ) {
                    delete requestParameters[key];
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
