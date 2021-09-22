import React, { useState } from 'react';
import './App.css';
import QUOTES from './assets/quotes.json';
import { ControlPanel } from './components/ControlPanel';
import { CardViewer } from './components/QuoteViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import { Quote } from './interfaces/quote';

function App(): JSX.Element {
  const [activeQuote, setActiveQuote] = useState<Quote>(QUOTES[0] as Quote);
  const [sourceRevealed, reveal] = useState<boolean>(false);

  return (
    <Container className="App">
      <Row>
        <ControlPanel 
        setQuote={setActiveQuote} 
        reveal={reveal}
        sourceRevealed = {sourceRevealed}></ControlPanel>
        <CardViewer quote={activeQuote} sourceRevealed={sourceRevealed}></CardViewer>
      </Row>
    </Container>
  );
}

export default App;
