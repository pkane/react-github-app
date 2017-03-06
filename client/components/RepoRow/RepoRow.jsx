import React, { Component } from 'react';

class RepoRow extends React.Component {
  render() {
    var name = this.props.repo.name
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.repo.stargazers_count}</td>
      </tr>
    );
  }
}

export default RepoRow;
