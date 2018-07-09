import styles from './scss/grid.scss';
import spinner from './scss/spinner.scss';
import React from 'react';
import Card from '../card/card.jsx';

export default class Grid extends React.Component {
    render() {
        return (
            <div className="grid">
                {this.props.isLoading ? <div className="spinner" /> : null}
                {this.props.cards.map((card, index) => (
                    <Card
                        key={index}
                        img={card.img}
                        title={card.title}
                        copy={card.copy}
                    />
                ))}
            </div>
        );
    }
}
