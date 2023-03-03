// import axios from 'axios';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGallery/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { FetchImages } from './services/pixabayAPI';

export class App extends Component {
  state = {
    img: null,
    searchWord: '',
    isLoading: false,
    showModal: false,
    error: null,
  };

  handleSearchbarSubmit = searchWord => {
    this.setState({ searchWord });
    // console.log(searchWord);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // const pixabayKey = '33097272-5cfe3e3a455a7cd5afa001a4b';
  // const url = `https://pixabay.com/api/?q=cat&page=1&key={pixabayKey}&image_type=photo&orientation=horizontal&per_page=12`;
  componentDidMount() {
    const fetchImages = async searchWord => {
      try {
        this.setState({ isLoading: true });
      } catch {
        // const images = await this.setState({ error: error.message });
      } finally {
      }
    };
    // fetchImages(searchWord);
  }

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery />
        <ImageGalleryItem />
        {/* <Loader /> */}
        <Button />
        <button type="button" onClick={this.toggleModal}>
          Modal open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        {/* {isLoading && } */}
        <Loader />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
