import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Quote } from '../interfaces/quote';


export function AddCardModal({visible, setVisible, addQuote}:
    {visible: boolean, setVisible: (b: boolean)=>void, addQuote: (q: Quote) => void}): JSX.Element {
    const [quote, setQuote] = useState<string>("QUOTE TEXT");
    const [source, setSource] = useState<string>("SOURCE TEXT");

    function saveQuote(){
        console.log("SAVING", quote, source);
        addQuote({
            ID: Math.random(),
            Kind: "Custom",
            Quote: quote,
            Source: source
        });
        setVisible(false);
    }

    const hide = () => setVisible(false);
    return (
    <Modal show={visible} onHide={hide}>
        <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
    
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.quoteTextArea">
                <Form.Label>Quote</Form.Label>
                <Form.Control as="textarea" rows={3}
                value={quote}
                onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setQuote(ev.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.sourceTextArea">
                <Form.Label>Who said it?</Form.Label>
                <Form.Control as="textarea" rows={3}
                value={source}
                onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setSource(ev.target.value)}/>
            </Form.Group>
        </Form>
        </Modal.Body>
    
        <Modal.Footer>
        <Button variant="secondary" onClick={hide}>Close</Button>
        <Button variant="primary" onClick={hide}>Save changes</Button>
        </Modal.Footer>
    </Modal> 
    )
}