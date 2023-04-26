import * as React from 'react';
import Button from '@mui/material/Button';


export default function ResetButton(props) {

    const handleClick = () => {
        props.setBoard([['-', '-', '-'],
                        ['-', '-', '-'],
                        ['-', '-', '-']]);
        
        props.setVisible([['hidden', 'hidden', 'hidden'],
                          ['hidden', 'hidden', 'hidden'],
                          ['hidden', 'hidden', 'hidden']]);

        props.setColors([['black', 'black', 'black'],
        ['black', 'black', 'black'],
        ['black', 'black', 'black']]);
        
        props.setTurn(1);
        props.setPlayer('X');
        props.setMessage('X\'s turn...');
        props.setGameOver(false);
    }

    return (
        <Button variant="contained" color='error' onClick={handleClick}>Reset</Button>
    );
  }