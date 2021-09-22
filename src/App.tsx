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


  return (
    <Container className="App">
      <Row>
        <ControlPanel setQuote={setActiveQuote}></ControlPanel>
        <CardViewer quote={activeQuote}></CardViewer>
      </Row>
    </Container>
  );
}

export default App;
