import React, {Component} from 'react';
import Post from './Post';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {
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
                <Post username={name} altname={altname} photo={photo} src={src} altPost={alt} descr={descr} postId={id}/>
            );
        });
    }

    render() {
        const {error, posts} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const renderPosts = this.renderItems(posts);
        return (
            <div className='left'>
                {renderPosts}
            </div>
        );
    }
}