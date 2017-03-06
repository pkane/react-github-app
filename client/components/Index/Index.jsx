import React, { Component } from 'react';
import FilterableRepoTable from '../FilterableRepoTable/FilterableRepoTable';
var axios = require('axios');

var IndexComponent = React.createClass({
  resultsArray : [],

  getInitialState : function() {
    return { repos: [] };
  },

  componentDidMount : function() {

    var username = 'netflix';
    var resultsArray = [];

    axios.get('https://api.github.com/orgs/' + username + '/repos')
      .then(function (response) {
        var repos = response.data;

        function filterByKeys(obj, keep) {

            var result = {};
            for (var i = 0, len = keep.length; i < len; i++) {
                var key = keep[i];
                if (Object.hasOwnProperty.call(obj, key)) {
                    result[key] = obj[key];
                }
            }

            return result;
        };        

        repos.forEach(function(repo) {
          var entry = filterByKeys(repo, [ 'name', 'open_issues', 'stargazers_count' ]);  

          resultsArray.push(entry);
        });        

        console.log(resultsArray);        

      })

      .catch(function (error) {
        console.log(error);
      });    

    this.setState({repos: resultsArray});

  },

  render : function() {
    if (this.props.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <section>
        <FilterableRepoTable 
          repos={this.state.repos}
        />
      </section>
    );
  }
});

// IndexComponent.defaultProps = {
//   repos: {this.state.repos}
// }

export default IndexComponent;
