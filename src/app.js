import styles from './generic/settings.scss';
import React from 'react';
import Grid from './components/grid/grid.jsx';
import SampleCards from './sample-cards.json';

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
        const cards = [...SampleCards];
        this.setState({ cards });
    }
    render() {
        return <Grid cards={this.state.cards} />;
    }
}
