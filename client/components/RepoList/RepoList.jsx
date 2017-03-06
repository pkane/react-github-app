import React, { Component } from 'react';

export default class RepoList extends Component{

    // constructor(state) {
    //     super(state);
    //     this.state = {
    //       filterText: ''
    //     };
    // }

    createItems(){
        return this.props.repos.map((repo)=><li className="repo-list-item" key={repo.id}><img className="repo-org-avatar" src={repo.owner.avatar_url} />{repo.name}</li>);
    }

    // render () {
    // var elements = this.createItems();

    // var filteredElements = elements
    //   .filter(e => e.includes(this.state.filterText))
    //   .map(e => <li>{ e }</li>)

    // return (
    //   <div>
    //     <input
    //       type="text"
    //       value={ this.state.filterText }
    //       onChange={ e => this.setState({ filterText: e.target.value }) } />
    //     <ul className="repo-list">
    //       { filteredElements }
    //     </ul>
    //   </div>
    // );
    // }


    render(){
        return(
            <ul className="repo-list">
                {this.createItems()}
            </ul>
        )
    }
}

RepoList.propTypes = {
    repos: React.PropTypes.array.isRequired
};