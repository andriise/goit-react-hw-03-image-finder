import { Component } from 'react';
import { toast } from 'react-hot-toast';
export class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.value) {
      return toast.error('Error');
    }
    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            value={this.state.value}
            onChange={this.handleChange}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            aria-label="Search"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
