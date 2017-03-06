import React, { Component } from 'react';
import RepoList from '../RepoList/RepoList';
import SearchBar from '../SearchBar/SearchBar';
var axios = require('axios');

export default class Index extends Component{

	constructor(props){
		super(props);

		this.state = {
			organization: 'netflix',
			repos: [],
			filterText: ''            
		};

		axios.get(`http://api.github.com/orgs/${this.state.organization}/repos`).then((res)=>{
			this.setState({
				repos: res.data
			});
		})

	    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);

	}

	handleFilterTextInput(filterText) {
		this.setState({
		  filterText: filterText
		});
	}	

	render(){
	  var orgName = this.state.organization.charAt(0).toUpperCase() + this.state.organization.slice(1);
		return(
			<section className="content">
			<section className="header">
				<h3 className="app-title">{orgName} Github</h3>
				<p className="headline">Tool to browse {orgName} repositories.</p>
			</section>
			<RepoList repos={this.state.repos}/>
			</section>
		)
	}
}