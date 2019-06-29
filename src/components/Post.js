import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='post' key={this.props.postId}>
                <User 
                    src={this.props.photo} 
                    alt={this.props.altname}
                    name={this.props.username}
                    min/>
                <img src={this.props.src} alt={this.props.altPost}></img>
                <div className='post__name'>
                    {this.props.username}
                </div>
                <div className='post__descr'>
                    {this.props.descr}
                </div>
            </div>
        );
    }
}