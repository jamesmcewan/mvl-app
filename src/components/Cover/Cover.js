import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProgressiveImage from 'react-progressive-image';
import placeHolder from '../../images/placeholder.jpg';
import getCover from '../../functions/getCover';

const CoverButton = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0;
  display: block;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 50px;
  opacity: ${(props) => (props.visible ? '0.1' : '1')};
  filter: blur(${(props) => (props.visible ? '10px' : '0')})
    hue-rotate(${(props) => (props.visible ? '-90deg' : '0')});
  transition: filter 1.5s, opacity 1.5s;
`;

const Cover = ({ thumbnail, title, visible, setVisible }) => {
  return (
    <CoverButton onClick={() => setVisible(!visible)}>
      <ProgressiveImage src={getCover(thumbnail)} placeholder={placeHolder}>
        {(src) => <Img src={src} alt={title} visible={visible} />}
      </ProgressiveImage>
    </CoverButton>
  );
};

Cover.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func
};

export { CoverButton, Img };
export default Cover;
