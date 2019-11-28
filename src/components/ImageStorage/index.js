import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

import { StyledImageContainer, StyledImagesStorage } from '../App/styles';
import Image from '../Image';

const { url } = config;

const ImageStorage = ({files}) => {
  const images =  files.map(image => <Image key={image} src={`${url}/${image}`} alt='NotFound'/>);

  return <StyledImageContainer>
    <StyledImagesStorage>
    {images}
    </StyledImagesStorage>
  </StyledImageContainer>
}

ImageStorage.propTypes = {
  files: PropTypes.array,
}

ImageStorage.defaultProps ={
  files: [],
}

export default ImageStorage;