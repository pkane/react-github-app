import React, { Component } from 'react';

class RepoCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

export default RepoCategoryRow;
