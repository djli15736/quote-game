import { Button, Col } from 'react-bootstrap';
import { Quote } from '../interfaces/quote';
import QUOTES from '../assets/quotes.json';
import { getRandomElement, shuffle } from '../utilities/data';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task as User } from 'editable-dnd-list';

export const LOCAL_STORAGE_USERS = 'quote-game-users';

export const INITIAL_USERS: User[] = [
    {id: '1', text: "Daniel"},
    {id: '2', text: "Jim"},
    {id: '3', text: "Bob"},
    {id: '4', text: "Michael"},
    {id: '5', text: "Tony"}
];

export function getLocalStorageUsers(): User[] {
    let rawUsers: string|null = localStorage.getItem(LOCAL_STORAGE_USERS);
    if (rawUsers === null){
        return [...INITIAL_USERS]
    } else {
        return JSON.parse(rawUsers);
    }
}

export function ControlPanel({setQuote, reveal, sourceRevealed, deck, showAddCardModal}: 
    {setQuote: (q: Quote)=>void, reveal: (r: boolean)=> void, sourceRevealed: boolean, 
        showAddCardModal: (b:boolean) => void, deck: Quote[]}): JSX.Element {
    
    const [users, setUsers] = useState<User[]>(getLocalStorageUsers);
    
    
    function setRandomCard() {
        reveal(false);
        setQuote(getRandomElement(deck))
    }
    
    function shuffleUsers() {
        let shuffledUsers: User[] = shuffle(users);
        setUsers([...shuffledUsers]);
    }

    function save(){
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users));
    }

    function addNewQuote() {
        showAddCardModal(true);
    }

    return <Col>
    <h1> Control Panel </h1>
    <UserList users={users} setUsers={setUsers}></UserList>
    <Button onClick={setRandomCard} className="m-4">Swap Current Quote</Button>
    <Button onClick={() => reveal(!sourceRevealed)} className="m-4"> Reveal Source </Button>
    <Button onClick={shuffleUsers} className="m-4"> Shuffle Users</Button>
    <Button onClick={save} className="m-4" variant="success">Save</Button>
    <Button onClick={addNewQuote} className="m-4" variant="success">Add New Quote</Button>

    </Col>
}