import { Button, Col } from 'react-bootstrap';
import { Quote } from '../interfaces/quote';
import QUOTES from '../assets/quotes.json';
import { getRandomElement } from '../utilities/data';


export function ControlPanel({setQuote, reveal, sourceRevealed}: {setQuote: (q: Quote)=>void, reveal: (r: boolean)=> void, sourceRevealed: boolean}): JSX.Element {
    function setRandomCard() {
        reveal(false);
        setQuote(getRandomElement(QUOTES as Quote[]))
    }
    
    return <Col>
    <h1> Control Panel </h1>
    <Button onClick={setRandomCard} className="m-4">Swap Current Quote</Button>
    <Button onClick={() => reveal(!sourceRevealed)} className="m-4"> Reveal Source </Button>
    </Col>
}