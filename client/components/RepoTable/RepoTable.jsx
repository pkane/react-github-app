import React, { Component } from 'react';
import RepoRow from '../RepoRow/RepoRow';
import RepoCategoryRow from '../RepoCategoryRow/RepoCategoryRow';

class RepoTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;  
    this.props.repos.forEach((repo) => {
      if (repo.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      if (repo.category !== lastCategory) {
        rows.push(<RepoCategoryRow category={repo.category} key={repo.category} />);
      }
      rows.push(<RepoRow repo={repo} key={repo.name} />);
      lastCategory = repo.category;
    });    
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Forks</th>
            <th>Starred</th>
            <th>Open Issues</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default RepoTable;
