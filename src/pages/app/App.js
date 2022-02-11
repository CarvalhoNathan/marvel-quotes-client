import styled from 'styled-components';
import marvelImg from '../../images/avengers.png';
import { Quotes } from '../../components/';

export function App() {
  return (
    <Content>
      <Quotes quote={'ok'} speaker={'Speaker'} />
      <MarvelImg src={marvelImg} alt="Marvel avengers" />
    </Content>
  );
}

// Conteúdo do site
const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Imagem de fundo
const MarvelImg = styled.img` 
  max-width: 50vw;
  align-self: flex-end;
`;