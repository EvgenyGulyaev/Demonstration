import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { postImage, getImage } from '../../api';
import config from '../../config';
import {
  ImageContainer, MainPage,
  ParentContainer,
  StyledContent,
} from './styles';
import Image from '../Image';
import ImageStorage from '../ImageStorage';
import Background from '../../assets/89250.jpg';

const { url } = config;
const backgroundImage = `url("${ Background }")`;

const App = () => {
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState([]);
  const [mask, setMask] = useState(null);
  const dropRef = useRef(null);

  useEffect(  () => {
    async function fetchData() {
      const files = await getImage();
      setFiles(files);
    }
    fetchData();
  }, []);

  const onClickPicture = () => dropRef.current.click();

  const setMainPicture = ({mask, image} = {}) => {
    setImage(`${url}/${image}`);
    setMask(`${url}/${mask}`);
  }

  const onDrop = useCallback(async (acceptedFiles) => {
    acceptedFiles = acceptedFiles.slice(0, 1).map(file => Object.assign(file, {
      preview: `${URL.createObjectURL(file)}`,
      src: file.path,
    }));
    const { image, mask } =  await postImage(acceptedFiles);
    setMainPicture({ image, mask });
    const files = await getImage();
    setFiles(files);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <ParentContainer style={{backgroundImage}}>
      <MainPage>
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

        <ImageStorage
          setMainPicture={setMainPicture}
          files={files}
        />
      </MainPage>

      <StyledContent {...getRootProps()} ref={dropRef}>
        <input {...getInputProps()} />
      </StyledContent>
    </ParentContainer>
  )
};

export default App;