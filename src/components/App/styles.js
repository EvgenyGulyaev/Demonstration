import styled from 'styled-components';

export const ParentContainer = styled.div`
  position: fixed; 
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  background-image: ${({srcBackground}) => `url(${srcBackground})`};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledImage = styled.img`
  opacity: ${({src}) => src ? 1 : 0.5 };
  border: ${({src}) => src ? 'none' : 'dashed black 1px'};
  cursor: pointer;
  height: auto;
  width: 300px;
  line-height: 250px;
  text-align: center;
  border-radius: 10px;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${({text}) => text === 'Input' ? '20px' : 0 };
`;

export const MainPage = styled.div`
  height: inherit;
`;

export const StyledImagesStorage = styled.div`
  overflow-y: auto;
  max-height: 99%;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 20px ;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledContent = styled.div`
  display: none;
`;