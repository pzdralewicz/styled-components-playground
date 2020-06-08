import React from 'react';
import * as Styled from './App.styles';

const App = () => {
  return (
    <Styled.Container>
      <Styled.Button>Wciśnij mnie!</Styled.Button>
      <Styled.BlueButton>Niebieski!</Styled.BlueButton>
      <Styled.RedButton>Czerwony!</Styled.RedButton>
    </Styled.Container>
  );
}

export default App;
