import React, { Component } from 'react';

export default class RepoDetail extends Component{

    getCommits(){
        return this.props.commits.map((commit)=><li key={commit.sha}>{commit.commit.message}</li>);
    }

    render(){
        const repo = this.props.repo;
        const commits = this.props.commits;

        return(
            <section>
                <h3 className="headline">'{repo.name}'' Latest Commits</h3>
                <ul className="commits-list">
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
