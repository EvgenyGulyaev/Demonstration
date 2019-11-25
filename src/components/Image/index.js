import React from 'react';
import { StyledImage, StyledImageContainer } from '../App/styles';

const Image = ({ name, src, alt, text, onClick }) => <StyledImageContainer text={text}>
  <p>{name}</p>
  <StyledImage onClick={onClick} src={src} alt={alt}/>
</StyledImageContainer>;

Image.defaultProps = {
  text: '',
  name: '',
  src: '',
  alt: '',
  onClick: () => null,
}
export default Image