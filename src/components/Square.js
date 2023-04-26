import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function SimplePaper(props) {
  const [entry, setEntry] = React.useState(props.board[props.row][props.col]);

  const handleClick = () => {
    if (props.board[props.row][props.col] === '-' && !props.gameOver) {
      setEntry(props.player);
    }

    props.handleClick(props.row, props.col);
  }

  return (
    <Paper elevation={0} variant='outlined' onClick={handleClick} square='true' sx={{borderColor: 'black'}}>
      <Typography
        variant="h1"
        sx={{ mt: 1.2 }}
        color={props.colors[props.row][props.col]}
        align='center'
        visibility={props.visible[props.row][props.col]}>
        {entry}
      </Typography>
    </Paper>
  );
}
