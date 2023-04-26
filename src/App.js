import * as React from 'react';
import Board from "./components/Board";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ResetButton from './components/ResetButton';
import Box from '@mui/material/Box';


function App() {
  const [board, setBoard] = React.useState(
    [['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']]);

  const [visible, setVisible] = React.useState(
    [['hidden', 'hidden', 'hidden'],
    ['hidden', 'hidden', 'hidden'],
    ['hidden', 'hidden', 'hidden']]);

  const [colors, setColors] = React.useState(
    [['black', 'black', 'black'],
    ['black', 'black', 'black'],
    ['black', 'black', 'black']]);

  const [turn, setTurn] = React.useState(1);

  const [player, setPlayer] = React.useState('X');

  const [message, setMessage] = React.useState('X\'s turn...');

  const [gameOver, setGameOver] = React.useState(false);

  const ms = { fontFamily: 'monospace' };

  return (
    <div>
      <Typography variant="h1" textAlign="center" sx={{ mb: 3 }} style={ms}>Tic Tac Toe</Typography>
      <Typography variant='h3' textAlign='center' sx={{ mb: 3 }} style={ms}>{message}</Typography>
      <Grid container>
        <Grid item xs={4.5}>

        </Grid>
        <Grid item xs={3}>
          <Board
            setMessage={setMessage}
            board={board}
            visible={visible}
            turn={turn}
            player={player}
            setTurn={setTurn}
            setPlayer={setPlayer}
            gameOver={gameOver}
            setGameOver={setGameOver}
            colors={colors}
          />
        </Grid>
        <Grid item xs={4.5}>

        </Grid>
        <Grid item xs={5.5}>

        </Grid>
        <Grid item xs={1}>
          <Grid container>
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={8}>
              <Box sx={{ ml: 0.6, mt: 3 }}>
                <ResetButton
                  setBoard={setBoard}
                  setVisible={setVisible}
                  setTurn={setTurn}
                  setPlayer={setPlayer}
                  setMessage={setMessage}
                  setGameOver={setGameOver}
                  setColors={setColors} />
              </Box>
            </Grid>
            <Grid item xs={2}>

            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5.5}>

        </Grid>

      </Grid>
    </div>

  );
}

export default App;
