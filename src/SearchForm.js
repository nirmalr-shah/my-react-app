import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { query: props.initialQuery };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  
    handleInputChange(event) {
      this.setState({ query: event.target.value });
    }
  
    handleSearch() {
      this.props.onSearch(this.state.query);
    }
  
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.props.onSearch(this.state.query);
      }
    }
  
    render() {
      return React.createElement(
        'div',
        null,
        React.createElement('input', {
          type: 'text',
          value: this.state.query,
          onChange: this.handleInputChange,
          onKeyPress: this.handleKeyPress,
        }),
        React.createElement('button', { onClick: this.handleSearch }, 'Search')
      );
    }
}

export default SearchForm;