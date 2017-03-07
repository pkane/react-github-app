import React, { Component } from 'react';

import styles1 from '../Index/index.styles.css';
import styles2 from './RepoDetail.styles.css';

export default class RepoDetail extends Component{

    getCommits(){
        return this.props.commits.map((commit)=><li key={commit.sha}>{commit.commit.message}</li>);
    }

    render(){
        const repo = this.props.repo;
        const commits = this.props.commits;

        return(
            <section>
                <h3 styleName="styles1.headline">'{repo.name}' Latest Commits</h3>
                <ul styleName="styles2.commitsList">
                    {this.getCommits()}
                </ul>
            </section>
        )
    }
}

RepoDetail.propTypes = {
    repo: React.PropTypes.object.isRequired,
    commits: React.PropTypes.array.isRequired
};
