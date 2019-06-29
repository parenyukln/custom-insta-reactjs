import React, {Component} from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href='#' key={this.props.userId} className={this.props.min ? 'user min' : 'user'}>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div>{this.props.name}</div>
            </a>
        );
    }
}