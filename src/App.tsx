import React from 'react';
import './App.css';
import QUOTES from './assets/quotes.json';
import { ControlPanel } from './components/ControlPanel';
import { CardViewer } from './components/QuoteViewer';

function App(): JSX.Element {
  return (
    <div className="App">
      <ControlPanel></ControlPanel>
      <CardViewer></CardViewer>
    </div>
  );
}

export default App;
