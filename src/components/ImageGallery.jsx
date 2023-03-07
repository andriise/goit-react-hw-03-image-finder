import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { getPhotos } from './service';
import { Loader } from './Loader';
import { ErrorPage } from './ErrorPage';

export class ImageGallery extends Component {
  state = {
    id: '',
    query: '',
    page: 1,
    imageType: '',
    orientation: '',
    perPage: 12,
    error: '',
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });

      getPhotos(this.props.value.trim(), this.state.page)
        .then(response => response.json())
        .then(photos => {
          if (photos.status !== 'ok') {
            return Promise.reject(photos.message);
          }

          this.setState({
            photos: [...this.state.photos, ...photos.articles],
            status: 'resolved',
          });
        })
        .catch(error => {
          console.log('error :>> ', error);
          this.setState({ error, status: 'rejected' });
        });
    }
  }
  handleLoad = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  render() {
    const { status, imageType, error, id } = this.state;
    if (status === 'pending') return <Loader />;
    if (status === 'resolved')
      return (
        <ul className="ImageGallery">
          <ImageGalleryItem photos={imageType} id={id} />
          <button onClick={this.handleLoad}>Load</button>
        </ul>
      );
    if (status === 'rejected') return <ErrorPage error={error} />;
  }
}
