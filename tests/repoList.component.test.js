import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import RepoList from '../src/components/RepoList/RepoList';

describe('<RepoList />', () => {

    const repos = [
        {name: 'one', id:1, owner: {avatar_url : '1'} },
        {name: 'two', id:2, owner: {avatar_url : '2'} }
    ];

    const onMockedRepoSelected = sinon.spy();

    it('renders as many li elements as passed', () => {
        const wrapper = shallow(<RepoList repos={repos} onRepoSelected={onMockedRepoSelected}/>);

        expect(wrapper.find('li').length).toBe(2);
    });

    it('Check if click event is getting triggered', () => {
        const wrapper = shallow(<RepoList repos={repos} onRepoSelected={onMockedRepoSelected}/>);

        wrapper.find('li').first().simulate('click');

        expect(onMockedRepoSelected.callCount).toBe(1);
        expect(onMockedRepoSelected.calledWith({name: 'one', id:1, owner: {avatar_url : '1'}})).toBe(true);
    });

});