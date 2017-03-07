jest.mock('axios');

import React from 'react';
import { shallow } from 'enzyme';

import Index from '../src/components/Index/Index';
import RepoList from '../src/components/RepoList/RepoList';
import RepoDetail from '../src/components/RepoDetail/RepoDetail';

describe('<Index />', () => {
    // it('renders one Index component', () => {
    //     const wrapper = shallow(<Index repos={repos} />);
    //     expect(wrapper.find(RepoList).length).toBe(1);
    // });

    it('Doesn\'t render DetailsComponent on init', () => {
        const wrapper = shallow(<Index />);
        expect(wrapper.find(RepoDetail).length).toBe(0);
    });

    it('Renders a DetailsComponent if a repo is selected', () => {
        const wrapper = shallow(<Index />);

        wrapper.setState({
            selectedRepo: {
                repo: {name: 'Repo 1'},
                commits: []
            }
        });

        expect(wrapper.find(RepoDetail).length).toBe(1);
    });

});