import React from 'react';
import './App.css';
import Counter from './Counter.js';
import SearchForm from './SearchForm.js';
import GenreSelect from './GenreSelect.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 'Action',
      searchResult: '',
      genres: ['Action', 'Comedy', 'Drama', 'Horror'],
    };

    this.handleGenreSelect = this.handleGenreSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleGenreSelect(genre) {
    this.setState({ selectedGenre: genre });
  }

  handleSearch(query) {
    this.setState({ searchResult: `Searched for: ${query}` });
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Counter, { initialValue: 0 }),
      React.createElement('br'),
      React.createElement(SearchForm, {
        initialQuery: '',
        onSearch: this.handleSearch,
      }),
      React.createElement('div', null, this.state.searchResult),
      React.createElement('br'),
      React.createElement(GenreSelect, {
        genres: this.state.genres,
        selectedGenre: this.state.selectedGenre,
        onSelect: this.handleGenreSelect,
      })
    );
  }
}

export default App;
