import { useState } from 'react';
import styled from 'styled-components';
import marvelImg from '../../images/avengers.png';
import { Quotes } from '../../components/';
import { getQuote } from '../../services';

export function App() {
  const [ quoteState, setQuoteState ] = useState({ 
    quote: 'ok', 
    speaker: 'Speaker'
  });
  
  const onUpdate = async () => {
    const quote = await getQuote();

    setQuoteState(quote);
  };
  
  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
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