import React from 'react'
import { Paper, Typography, Grid, Container } from '@material-ui/core'
import useStyle from '../Styles'
import { useRecoilValue } from 'recoil'
import { associatesBreakOverTimeState} from './../recoil/selectors'


const BeingOnBreak = (props) => {
    const beingOnBreakList = useRecoilValue(associatesBreakOverTimeState);

    const classes = useStyle();
    return(
        <Paper className={classes.root}>
            <Grid container>
                <Typography variant='h5'
                    color='primary'>
                    Associate Taking Over Time Break&nbsp;&nbsp;
                </Typography>
                <Typography variant='h5'
                    color='textSecondary'>
                        {beingOnBreakList.length}
                </Typography>
                <Grid container className={classes.listHeader}>
                    <Grid item xs={6} sm={3}>
                        <Typography variant='h6'>
                            Badge
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography variant='h6'>
                            Login
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Typography variant='h6'>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Typography variant='h6'>
                            Duration
                        </Typography>
                    </Grid>
                </Grid>
                <Container className={classes.breakOverTimeContainer}>
                {
                    beingOnBreakList.map(item => {
                        const timeOut = new Date(item.time_out);
                        const timeIn = new Date(item.time_in);
                        const duration = timeIn - timeOut;
                        const durMinute = duration/1000/60;
                        const durSeconds = duration/1000%60;
                        return (
                            <Grid key={item.badge_number} container 
                                className={classes.associateDisplay}>
                                <Grid item xs={6} sm={3}>
                                    <Typography>
                                        {item.badge_number}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={3}>
                                    <Typography>
                                        {item.user_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Typography>
                                        {item.user_first_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={2}>
                                    <Typography>
                                        {Math.floor(durMinute)}:{Math.floor(durSeconds)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )}
                    )
                }
                </Container>
            </Grid>
        </Paper>
    )
}

export default BeingOnBreak;