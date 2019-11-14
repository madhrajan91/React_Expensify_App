import React from 'react';
import {shallow} from 'enzyme';
import NotFoundComponent from '../../components/NotFoundComponent';


test ('should render not found correctly', () => {
    const wrapper = shallow(<NotFoundComponent/>);
    expect(wrapper).toMatchSnapshot()
})
