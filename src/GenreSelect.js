import React from 'react';

class GenreSelect extends React.Component {
    constructor(props) {
      super(props);
      this.handleSelect = this.handleSelect.bind(this);
    }
  
    handleSelect(genre) {
      this.props.onSelect(genre);
    }
  
    render() {
      const buttons = this.props.genres.map((genre) => {
        const isSelected = genre === this.props.selectedGenre;
        return React.createElement(
          'button',
          {
            key: genre,
            onClick: () => this.handleSelect(genre),
            style: { fontWeight: isSelected ? 'bold' : 'normal' },
          },
          genre
        );
      });
  
      return React.createElement('div', null, buttons);
    }
}  
export default GenreSelect;