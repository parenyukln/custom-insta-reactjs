import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    };
    
    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = posts => {
        this.setState({
            posts,
            error: false
        });
    }

    onError = error => {
        this.setState({
            error: true
        });
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, altname, photo, src, alt, descr, id} = item;
            return (
                <User src={photo} alt={altname} name={name} userId={id} min/>
            );
        });
    }

    render() {
        const {posts, error} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const renderPosts = this.renderItems(posts);
        return (
            <div className='right'>
                <User 
                    src='https://m.media-amazon.com/images/G/01/6pm/landing/2019/Mens/February/Button-Ups._CB455064164_.jpg' 
                    alt='Аватарка'
                    name='Harry'/>
                <div className='users__block'>
                    {renderPosts}
                </div>
            </div>
        );
    }
}