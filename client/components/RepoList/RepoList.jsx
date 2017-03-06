import React, { Component } from 'react';

export default class RepoList extends Component{

    createItems(){
        return this.props.repos.map((repo)=> {
            return (
                <li className="repo-list-item" key={repo.id} onClick={()=>this.props.onRepoSelected(repo)}>
                    <img className="repo-org-avatar" src={repo.owner.avatar_url} />                
                    <p>{repo.name}</p>
                    <span className="small-text">Watchers: {repo.watchers}</span>
                    <span className="small-text">Forks: {repo.forks_count}</span>
                </li>
            )
        });
    }

    render(){
        return(
            <ul className="repo-list">
                {this.createItems()}
            </ul>
        )
    }
}

RepoList.propTypes = {
    repos: React.PropTypes.array.isRequired,
    onRepoSelected: React.PropTypes.func.isRequired    
};