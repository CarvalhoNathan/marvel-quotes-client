import styled from 'styled-components';
import marvelImg from '../../images/avengers.png';

export function App() {
  return (
    <Content>
      <MarvelImg src={marvelImg} alt="Marvel avengers" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarvelImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;