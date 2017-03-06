import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RepoTable from '../RepoTable/RepoTable';

class FilterableRepoTable extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      filterText: ''
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <RepoTable 
          repos={this.state.repos} 
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableRepoTable;
