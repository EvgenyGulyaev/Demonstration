import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { getImages } from '../../api';
import config from '../../config';
import {
  ImageContainer,
  ParentContainer,
  StyledContent,
} from './styles';
import Image from '../Image';

const { url } = config;

const App = () => {
  const [image, setImage] = useState(null);
  const [mask, setMask] = useState(null);
  const dropRef = useRef(null);

  const onClickPicture = () => dropRef.current.click();

  const onDrop = useCallback(async (acceptedFiles) => {
    acceptedFiles = acceptedFiles.slice(0, 1).map(file => Object.assign(file, {
      preview: `${URL.createObjectURL(file)}`,
      src: file.path,
    }));
    const { image, mask } =  await getImages(acceptedFiles);
    setImage(`${url}/${image}`);
    setMask(`${url}/${mask}`);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <ParentContainer>
      <ImageContainer>
        <Image
          name='Входное изображение'
          src={image}
          alt='Input'
          text='Input'
          onClick={onClickPicture}
        />
        <Image name='Маска' src={mask} alt='Mask' />
      </ImageContainer>

      <StyledContent {...getRootProps()} ref={dropRef}>
        <input {...getInputProps()} />
      </StyledContent>
    </ParentContainer>
  )
};

export default App;