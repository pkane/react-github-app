import React, { Component } from 'react';
import FilterableRepoTable from '../FilterableRepoTable/FilterableRepoTable';
var GitHub = require('github-api');

var IndexComponent = React.createClass({
  getInitialState : function() {
    return { repos: {} };
  },

  componentDidMount : function() {

    // basic auth
    var gh = new GitHub({
      token: '0d92901f3063542e769d58bc8c4dd0504841d16b'
    });

    var netflix = gh.getOrganization('netflix');
    this.resultsArray = [];

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

    var repoList = netflix.getRepos(function(err, repos) {

      var repoArray = repos;

      repoArray.forEach(function(repo) {
        var entry = filterByKeys(repo, [ 'name', 'open_issues', 'stargazers_count' ]);  

        this.resultsArray.push(entry);
      });

      console.log(repoArray);  

    });

    this.setState({repos: this.resultsArray});

  },

  render : function() {
    if (this.props.length === 0) {
      return (
        <p ref="empty">Index is empty.</p>
      );
    }

    return (
      <section>
        <div>{this.resultsArray}</div>
      </section>
    );
  }
});

// IndexComponent.defaultProps = {
//   repos: repoList
// }

export default IndexComponent;
