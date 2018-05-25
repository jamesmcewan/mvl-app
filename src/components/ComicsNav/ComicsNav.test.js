import React from 'react';
import { mount } from 'enzyme';
import ComicsNav from './ComicsNav';
import 'jest-styled-components';

describe('ComicsNav', () => {
  it('should render without crashing', () => {
    const wrapper = mount(<ComicsNav />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render the correct JSX', () => {
    const wrapper = mount(<ComicsNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
