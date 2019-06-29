import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import Preloader from './Preloader';

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false,
        loading: true
    };
    
    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError);
    }

    onPhotosLoaded = photos => {
        this.setState({
            photos,
            error: false,
            loading: false
        });
    }

    onError = error => {
        this.setState({
            error: true,
            loading: false
        });
    }

    renderItems(arr) {
        return arr.map(item => {
            const {src, alt, id} = item;
            return (
                <img src={src} alt={alt} key={id}></img>
            );
        });
    }

    render() {
        const {error, photos, loading} = this.state;
        if (loading) {
            console.log('preloader')
            return <Preloader/>
        }

        if (error) {
            return <ErrorMessage/>
        }

        const renderPhotos = this.renderItems(photos);
        return (
            <div className='palette'>
                {renderPhotos}
            </div>
        );
    }
}