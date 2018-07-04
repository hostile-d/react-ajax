import styles from './generic/settings.scss';
import React from 'react';
import Grid from './components/grid/grid.jsx';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }
    componentDidMount() {
        this.getCards();
    }
    getCards() {
        axios.get(`/api/sample-cards`).then(res => {
            const cards = [...res.data];
            this.setState({ cards });
        });
    }
    render() {
        return <Grid cards={this.state.cards} />;
    }
}
