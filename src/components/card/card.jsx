import styles from './scss/card.scss';
import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img
                    className="card__img"
                    src="https://picsum.photos/300/300"
                />
                <h3 className="card__title">Card title</h3>
                <p className="card__copy">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fuga, nihil!
                </p>
            </div>
        );
    }
}
