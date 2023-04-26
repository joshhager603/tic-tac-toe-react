import * as React from 'react';
import Grid from '@mui/material/Grid';
import Square from './Square';

export default function Board(props) {

  const checkForWin = () => {
    for (let i = 0; i < props.board.length; i++) {
      /* check row i */
      if (props.board[i][0] === props.player && props.board[i][1] === props.player && props.board[i][2] === props.player) {
        props.colors[i][0] = 'error';
        props.colors[i][1] = 'error';
        props.colors[i][2] = 'error';
        return true;
      }

      /* check col i */
      if (props.board[0][i] === props.player && props.board[1][i] === props.player && props.board[2][i] === props.player) {
        props.colors[0][i] = 'error';
        props.colors[1][i] = 'error';
        props.colors[2][i] = 'error';
        return true;
      }
    }

    /* check right diagonal */
    if (props.board[0][0] === props.player && props.board[1][1] === props.player && props.board[2][2] === props.player) {
      props.colors[0][0] = 'error';
      props.colors[1][1] = 'error';
      props.colors[2][2] = 'error';
      return true;
    }

    /* check left diagonal */
    if (props.board[0][2] === props.player && props.board[1][1] === props.player && props.board[2][0] === props.player) {
      props.colors[0][2] = 'error';
      props.colors[1][1] = 'error';
      props.colors[2][0] = 'error';
      return true;
    }

    return false;
  }


  const handleClick = (row, col) => {
    if(!props.gameOver){
      if (props.board[row][col] === '-') {

        props.board[row][col] = props.player;
        props.visible[row][col] = 'visible';
  
        let win = checkForWin();
  
        if (win) {
          props.setMessage(props.player + ' wins!');
          props.setGameOver(true);
        } else if (props.turn === 9) {
          props.setMessage('Draw!');
          props.setGameOver(true);
        } else {
  
          if (props.player === 'X') {
            props.setPlayer('O');
            props.setMessage('O\'s turn...');
          } else {
            props.setPlayer('X');
            props.setMessage('X\'s turn...');
          }
  
          props.setTurn(props.turn + 1);
        }
      } else {
        props.setMessage('Pick another square...');
      }
    }
  }

  return (
    <Grid container spacing={0}>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={0} col={0} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={0} col={1} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={0} col={2} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={1} col={0} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={1} col={1} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={1} col={2} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={2} col={0} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={2} col={1} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
      <Grid item xs={4}>
        <Square handleClick={handleClick} row={2} col={2} player={props.player} board={props.board} visible={props.visible} gameOver={props.gameOver} colors={props.colors}/>
      </Grid>
    </Grid>
  );
}
