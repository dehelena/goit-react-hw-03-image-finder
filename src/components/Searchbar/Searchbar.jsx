// import PropTypes from 'prop-types';

import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledSearchbar } from './SearchbarStyled';

// export const Searchbar = ({ onSubmit }) => (
//   <StyledSearchbar className="searchbar">
//     <form className="form" onSubmit={onSubmit}>
//       <button type="submit" className="button">
//         <span className="button-label">Search</span>
//       </button>

//       <input
//         className="input"
//         type="text"
//         autocomplete="off"
//         autofocus
//         placeholder="Search images and photos"
//       />
//     </form>
//   </StyledSearchbar>
// );

class Searchbar extends Component {
  state = {
    searchWord: '',
  };

  handleSearchWordChange = e => {
    this.setState({ searchWord: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchWord.trim() === '') {
      return toast.warn('Please enter search parameter');
    }

    this.props.onSubmit(this.state.searchWord);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <StyledSearchbar className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchWordChange}
            value={this.state.searchWord}
          />
        </form>
      </StyledSearchbar>
    );
  }
}

export default Searchbar;
