import styles from './scss/grid.scss';
import React from 'react';
import Card from '../card/card.jsx';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="grid">
                {this.props.cards.map(card => (
                    <Card
                        key={card.id}
                        img={card.img}
                        title={card.title}
                        copy={card.copy}
                    />
                ))}
            </div>
        );
    }
}
