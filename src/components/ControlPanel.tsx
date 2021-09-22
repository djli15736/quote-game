import { Button, Col } from 'react-bootstrap';
import { Quote } from '../interfaces/quote';
import QUOTES from '../assets/quotes.json';
import { getRandomElement } from '../utilities/data';


export function ControlPanel({setQuote}: {setQuote: (q: Quote)=>void}): JSX.Element {
    return <Col>
    <h1> Control Panel </h1>
    <Button onClick={
        () => setQuote(getRandomElement(QUOTES as Quote[]))
    }>Swap Current Quote</Button>
    </Col>
}