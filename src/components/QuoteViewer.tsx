import { Col } from 'react-bootstrap';
import { Quote } from '../interfaces/quote';

export function CardViewer({quote}: {quote: Quote}): JSX.Element{
    return <Col>
    <h1>Card Viewer</h1>
    <div>Current quote: {quote.Quote}</div>
    </Col>
}