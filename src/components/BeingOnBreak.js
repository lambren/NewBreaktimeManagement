import React from 'react'
import { Paper, Typography, Grid, Container } from '@material-ui/core'
import useStyle from '../Styles'
import { useRecoilValue } from 'recoil'
import {associatesBeingOnBreakState} from './../recoil/selectors'


const BeingOnBreak = (props) => {
    const beingOnBreakList = useRecoilValue(associatesBeingOnBreakState);

    const classes = useStyle();
    return(
        <Paper className={classes.root}>
            <Grid container>
                <Typography variant='h5'
                    color='primary'>
                    Associate Being On Break&nbsp;&nbsp;
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
                            Time
                        </Typography>
                    </Grid>
                </Grid>
                <Container className={classes.beingOnBreakContainer}>
                {
                    beingOnBreakList.map(item => {
                        const timeOut = new Date(item.time_out);
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
                                        {timeOut.getHours()}:{timeOut.getMinutes()}
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