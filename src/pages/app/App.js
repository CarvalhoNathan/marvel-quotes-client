import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import marvelImg from '../../images/avengers.png';
import { Quotes } from '../../components/';
import { getQuote } from '../../services';
import marvelSound from '../../sounds/intro.mp3';

const audio = new Audio(marvelSound);

export function App() {
  const isMounted = useRef(true);

  console.log(isMounted);

  const [quoteState, setQuoteState] = useState({ 
    quote: 'loading....', 
    speaker: 'loading speaker....'
  });
  
  const onUpdate = async () => {
    const quote = await getQuote();
    
    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);
  
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