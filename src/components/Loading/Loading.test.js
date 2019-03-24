import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).toHaveLength(1);
  });
});
