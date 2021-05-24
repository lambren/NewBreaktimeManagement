import React , {useState} from 'react'
import { Grid, Typography, Button, Box, CircularProgress } from '@material-ui/core'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyle from './../Styles'
import { HOSTNAME } from '../Constants';
  
const AppBarContent = (props) => {
    const classes = useStyle();

    const onClearList = () => {
        setLoading(true);
        fetch(HOSTNAME + 'clear-breakroom/', {method:'POST'})
        .then(res => res.json())
        .then(data => {
            if (data.status !== 'SUCCESS')
                window.alert('FAILED TO CLEAR BREAKROOM. PLEASE TRY AGAIN LATER')
        }).catch(e => {
            console.log(e);
            window.alert('NETWORK ERROR! CLEAR LIST FAILED');
        }).finally(() => setLoading(false));
    }

    const [loading, setLoading] = useState(false);

    return(
        <Grid container direction='row' 
            justify='space-between'
            alignItems='center'>

            <Box className={classes.flexDisplay}>
            <FreeBreakfastIcon className={classes.iconPadding}/>
            <Typography variant='h5'>
                DLA9 Breaktime Management App
            </Typography>
            </Box>
        
            <div>
                {loading ? <CircularProgress className={classes.whiteColor}/> :
                <Button onClick={onClearList}
                    variant='text'
                    className={classes.whiteColor}
                    endIcon={<DeleteForeverIcon/>}>
                    Clear List
                </Button>
                }
            </div>
        </Grid>
    )
}

export default AppBarContent