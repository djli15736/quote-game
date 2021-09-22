import { Button, Col } from 'react-bootstrap';
import { Quote } from '../interfaces/quote';
import QUOTES from '../assets/quotes.json';
import { getRandomElement, shuffle } from '../utilities/data';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task as User } from 'editable-dnd-list';


export function ControlPanel({setQuote, reveal, sourceRevealed}: {setQuote: (q: Quote)=>void, reveal: (r: boolean)=> void, sourceRevealed: boolean}): JSX.Element {
    const [users, setUsers] = useState<User[]>([
        {id: '1', text: "Daniel"},
        {id: '2', text: "Jim"},
        {id: '3', text: "Bob"},
        {id: '4', text: "Michael"},
        {id: '5', text: "Tony"}
    ]);
    
    function setRandomCard() {
        reveal(false);
        setQuote(getRandomElement(QUOTES as Quote[]))
    }
    
    function shuffleUsers() {
        let shuffledUsers: User[] = shuffle(users);
        setUsers([...shuffledUsers]);
    }

    return <Col>
    <h1> Control Panel </h1>
    <UserList users={users} setUsers={setUsers}></UserList>
    <Button onClick={setRandomCard} className="m-4">Swap Current Quote</Button>
    <Button onClick={() => reveal(!sourceRevealed)} className="m-4"> Reveal Source </Button>
    <Button onClick={shuffleUsers} className="m-4"> Shuffle Users</Button>
    </Col>
}