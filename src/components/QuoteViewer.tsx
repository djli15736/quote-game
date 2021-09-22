import { Col, Card as BootstrapCard, Card} from 'react-bootstrap';
import { Quote } from '../interfaces/quote';

export function CardViewer({quote, sourceRevealed}: {quote: Quote, sourceRevealed: boolean}): JSX.Element{
    return <Col>
        <BootstrapCard>
            <BootstrapCard.Body>
                <BootstrapCard.Title>Quote Viewer</BootstrapCard.Title>
                <BootstrapCard.Text>
                    <strong>Current quote:</strong> {quote.Quote}
                </BootstrapCard.Text>
                {sourceRevealed && <BootstrapCard.Text>
                    <strong>Source:</strong> {quote.Source} 
                </BootstrapCard.Text>}
            </BootstrapCard.Body>
        </BootstrapCard>
    </Col>
}