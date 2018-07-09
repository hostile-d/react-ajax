import styles from './scss/card.scss';
import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card__img-wrapper">
                    <img className="card__img" src={this.props.img} />
                </div>
                <div className="card__content">
                    <h3 className="card__title">{this.props.title}</h3>
                    <p className="card__copy">{this.props.copy}</p>
                    <div className="card__tags">
                        <div className="card__tag">{this.props.year}</div>
                        <div className="card__tag">{this.props.month}</div>
                    </div>
                </div>
            </div>
        );
    }
}
