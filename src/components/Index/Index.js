import React, { Component } from 'react';
import RepoList from '../RepoList/RepoList';
import RepoDetail from '../RepoDetail/RepoDetail';
import axios from 'axios';

import styles from './index.styles.css';

export default class Index extends Component{

    constructor(props){
        super(props);

        this.state = {
            organization: 'netflix',
            repos: [],
            filteredRepos : [],
            selectedRepo: null,            
            filteredText : '',
            orderAsc: true,
            orderBy : 'name'
        };

        axios.get(`http://api.github.com/orgs/${this.state.organization}/repos?client_id=b7494ef1a91f220d048b&client_secret=68957ccd33ac4badae434ac8240f2e01e0179d1f`).then((res)=>{
            this.setState({
                repos: this.sortArray(res.data, true, this.state.orderBy)
            });
        })

    }

    onRepoSelected(repo){
        axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?client_id=b7494ef1a91f220d048b&client_secret=68957ccd33ac4badae434ac8240f2e01e0179d1f`)
            .then((commits)=>{
                this.setState({
                    selectedRepo: {
                        repo: repo,
                        commits: commits.data
                    }
                });
            })
    }

    renderCommits(){
        if(this.state.selectedRepo){
            return (
                <RepoDetail repo={this.state.selectedRepo.repo} commits={this.state.selectedRepo.commits}/>
            )
        }

        return <p styleName="defaultCopy">Select a repo to view a list of commits.</p>;
    }    

    filter(e){
        const newArr = this.state.repos.filter((repo)=>repo.name.toLowerCase().indexOf(e.target.value) !== -1);

        this.setState({
            filteredText : e.target.value,
            filteredRepos: newArr
        });

    }

    renderReposList() {
        if (this.state.repos.length > 0) {
            if (this.state.filteredText && this.state.filteredRepos.length < 1) {
                return <p>No results found!</p>
            }           
            return <RepoList repos={this.state.filteredRepos.length?this.state.filteredRepos:this.state.repos} onRepoSelected={this.onRepoSelected.bind(this)}/>
        } else {
            return <p>Loading...</p>
        }

    }

    sortArray(arr, asc, attr){
        if(asc) return arr.sort(function(a, b){
            var aVal = a[attr].toLowerCase ? a[attr].toLowerCase() : a[attr];
            var bVal = b[attr].toLowerCase ? b[attr].toLowerCase() : b[attr];

            if(aVal < bVal) return -1;
            if(aVal > bVal) return 1;
            return 0;
        });

        return arr.sort(function(a, b){
            var aVal = a[attr].toLowerCase ? a[attr].toLowerCase() : a[attr];
            var bVal = b[attr].toLowerCase ? b[attr].toLowerCase() : b[attr];

            if(aVal > bVal) return -1;
            if(aVal < bVal) return 1;
            return 0;
        });
    }

    sort(attr){
        this.setState({
            orderAsc: !this.state.orderAsc,
            repos: this.sortArray(this.state.repos, !this.state.orderAsc, attr),
            filteredRepos: this.sortArray(this.state.filteredRepos, !this.state.orderAsc, attr),
            orderBy : attr
        });
    }    

    render(){
      var orgName = this.state.organization.charAt(0).toUpperCase() + this.state.organization.slice(1);
        return(
            <section styleName="content">
                <section styleName="header">
                    <h1>{orgName} Github</h1>
                    <p styleName="headline">Tool to browse {orgName} repositories.</p>
                </section>
                <section styleName="results">
                    <input type="text" placeholder="Search" onChange={this.filter.bind(this)}/>
                    <span styleName="smallText">Sort by:</span>
                    <a styleName="filterLink" href="#" onClick={this.sort.bind(this, 'name')}>Name</a>
                    <a styleName="filterLink" href="#" onClick={this.sort.bind(this, 'forks_count')}>Forks</a>
                    <a styleName="filterLink" href="#" onClick={this.sort.bind(this, 'watchers_count')}>Watchers</a>
                    {this.renderReposList()}
                </section>
                <section styleName="commits">
                    {this.renderCommits()}
                </section>                
            </section>
        )
    }
}