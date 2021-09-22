import { Button, Col } from 'react-bootstrap';
import { Quote } from '../interfaces/quote';


export function ControlPanel({setQuote}: {setQuote: (q: Quote)=>void}): JSX.Element {
    return <Col>
    <h1> Control Panel </h1>
    <Button>Swap Current Quote</Button>
    </Col>
}