import styles from './scss/grid.scss';
import React from 'react';
import Card from '../card/card.jsx';

export default class Grid extends React.Component {
    render() {
        return (
            <div className="grid">
                {/* {console.log(this.props.cards)} */}
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
