import React, { useState } from 'react';
import './App.css';
import QUOTES from './assets/quotes.json';
import { ControlPanel } from './components/ControlPanel';
import { CardViewer } from './components/QuoteViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { Quote } from './interfaces/quote';
import { AddCardModal } from './components/AddCardModal';

function App(): JSX.Element {
  const [activeQuote, setActiveQuote] = useState<Quote>(QUOTES[0] as Quote);
  const [sourceRevealed, reveal] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [deck, setDeck] = useState<Quote[]>(QUOTES);

  function addQuote(newQuote: Quote) {
    setDeck([...deck, newQuote]);
  }

  return (
    <Container className="App">
      <Row>
        <ControlPanel 
        showAddCardModal = {setVisible}
        setQuote={setActiveQuote} 
        reveal={reveal}
        deck={deck}
        sourceRevealed = {sourceRevealed}></ControlPanel>
        <CardViewer quote={activeQuote} sourceRevealed={sourceRevealed}></CardViewer>
        <AddCardModal visible={visible} setVisible={setVisible}
        addQuote={addQuote}></AddCardModal>
      </Row>
    </Container>
  );
}

export default App;
