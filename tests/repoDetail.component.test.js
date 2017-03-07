import React from 'react';
import { shallow } from 'enzyme';

import RepoDetail from '../src/components/RepoDetail/RepoDetail';

describe('<RepoDetail />', () => {

    const selectedRepo = {
            repo: {
                name: 'name'
            },
            commits : [
                {
                    sha : '12345',
                    commit : {
                        message : 'hello'
                    }                    
                }
            ]
        }

    it('renders as many li elements as passed', () => {
        const wrapper = shallow(<RepoDetail repo={selectedRepo.repo} commits={selectedRepo.commits}/>);

        expect(wrapper.find('li').length).toBe(1);
    });

});