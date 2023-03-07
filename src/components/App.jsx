// API_KEY = 11497081-cc65ac3ee2055db377a22cee7;

import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
// import { Modal } from './Modal';

export class App extends Component {
  state = {
    textSearch: '',
  };

  handleSubmit = textSearch => {
    this.setState({ textSearch });
  };
  render() {
    return (
      <div>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery />
        {/* <Modal /> */}
      </div>
    );
  }
}
