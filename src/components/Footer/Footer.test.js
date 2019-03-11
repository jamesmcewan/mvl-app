import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import 'jest-styled-components';

describe('Footer', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toHaveLength(1);
  });
});
