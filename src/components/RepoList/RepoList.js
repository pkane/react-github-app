import React, { Component } from 'react';

import styles1 from '../Index/index.styles.css';
import styles2 from './RepoList.styles.css';

export default class RepoList extends Component{

    createItems(){
        return this.props.repos.map((repo)=> {
            return (
                <li styleName="styles2.repoListItem" key={repo.id} onClick={()=>this.props.onRepoSelected(repo)}>
                    <img styleName="styles2.repoOrgAvatar" src={repo.owner.avatar_url} />                
                    <p>{repo.name}</p>
                    <span styleName="styles1.smallText">Watchers: {repo.watchers}</span>
                    <span styleName="styles1.smallText">Forks: {repo.forks_count}</span>
                </li>
            )
        });
    }

    render(){
        return(
            <ul styleName="styles2.repoList">
                {this.createItems()}
            </ul>
        )
    }
}

RepoList.propTypes = {
    repos: React.PropTypes.array.isRequired,
    onRepoSelected: React.PropTypes.func.isRequired    
};