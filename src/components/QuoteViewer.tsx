import { useState } from 'react';
import { Col, Card as BootstrapCard, Card} from 'react-bootstrap';
import { idText } from 'typescript';
import { Quote } from '../interfaces/quote';

export function CardViewer({quote, sourceRevealed}: {quote: Quote, sourceRevealed: boolean}): JSX.Element{
    const [score, setScore] = useState(1);
   // const [correct, showCorrect] = useState<boolean>(false);
   // const [incorrect, showIncorrect] = useState<boolean>(false);

    const scoreIncrease = () => {
        setScore(score + 1);
      };
    
    function submitGuess(){
        let guess = (document.getElementById("guess-box") as HTMLInputElement)?.value;
        let displayScore = document.getElementById("scoreboard");
        if(guess === quote.Source){
            scoreIncrease();
            displayScore!.innerHTML = "Score: " + score;
            alert("Correct!");
        }
        else {
            alert("Incorrect!");
        }
    }

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

        <BootstrapCard>
            <BootstrapCard.Body>
            <input id="guess-box" type="text" placeholder = "Who said it?"></input>
            <button onClick={submitGuess}>Submit</button>
            <div id="scoreboard">Score: 0</div>
            </BootstrapCard.Body>
        </BootstrapCard>
    </Col>
}