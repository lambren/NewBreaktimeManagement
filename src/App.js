
import './App.css';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil' 
import { io } from 'socket.io-client'
import { currentListState } from './recoil/atoms';
import BadgeScan from './components/BadgeScan';
import { Grid, AppBar, makeStyles } from '@material-ui/core'
import BeingOnBreak from './components/BeingOnBreak';
import ScanResults from './components/ScanResults';
import BreakOverTime from './components/BreakOverTime';
import AppBarContent from './components/AppBarContent';

const useStyle = makeStyles({
  appBarStyle: {
    padding: '1em'
  }
})

function App() {
  const classes = useStyle();
  const setList = useSetRecoilState(currentListState);
  
  useEffect(() => {
    const socket = io('https://tranquil-meadow-63605.herokuapp.com/');
    socket.emit('breaktime_connect');
    socket.on('new_list', data => {
      setList(data)}
      );
  });

  return (
    <div className="App">
      <AppBar className={classes.appBarStyle}
        position='static'>
        <AppBarContent/>
      </AppBar>
      <Grid container>
        <Grid item xs={12} md={5}>
          <BadgeScan/>
          <ScanResults/>
        </Grid>
        <Grid item xs={12} md={7}>
          <BeingOnBreak/>
          <BreakOverTime/>
        </Grid>
      </Grid>
    </div>
  );
}


export default App;
