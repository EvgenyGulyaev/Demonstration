import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';

import { StyledImageContainer, StyledImagesStorage } from '../App/styles';
import Image from '../Image';

const { url } = config;

const createResImage = (image = '') => {
  const [name, mime] = image.split('.');
  return `${name}_res.${mime}`
}

const ImageStorage = ({files, setMainPicture}) => {
  const images =  files.map(image => <Image
    key={image} src={`${url}/${image}`}
    onClick={() => setMainPicture({ image, mask: createResImage(image)})}
    alt='NotFound'
  />);

  return <StyledImageContainer>
    <StyledImagesStorage>
    {images}
    </StyledImagesStorage>
  </StyledImageContainer>
}

ImageStorage.propTypes = {
  files: PropTypes.array,
  setMainPicture: PropTypes.func,
}

ImageStorage.defaultProps = {
  files: [],
  setMainPicture: () => null,
}

export default ImageStorage;