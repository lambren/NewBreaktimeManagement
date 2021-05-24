import { Paper, Container, Typography, Grid } from '@material-ui/core'
import React from 'react'
import useStyle from './../Styles'
import BreakImage from './../assets/breaktime.png'
import SetTime from './SetTime'
import { useRecoilValue } from 'recoil'
import { currentBreaktimeState, currentResultState } from '../recoil/atoms'
import { numberOfAssociateBackFronBreakState } from '../recoil/selectors'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
const ScanResults = (props) => {
    const classes = useStyle();
    const currentResult = useRecoilValue(currentResultState);
    const breaktime = useRecoilValue(currentBreaktimeState);
    const numberOfAssociatesBackFromBreak = useRecoilValue(numberOfAssociateBackFronBreakState);

    const chooseStyle = () => {
        if (currentResult.duration - breaktime*60*1000 <= 0)
            return({
                backgroundColor: '#91ff99',
                color: '#04b811',
                border: 'solid 1px #04b811'
            });
        else if (currentResult.duration - breaktime*60*1000 <= 5*60*1000)
            return({
                backgroundColor: '#fbff91',
                color: '#e8f011',
                border: 'solid 1px #e8f011'
            });
        else return({
            backgroundColor: '#ff7a7a',
            color: '#d60d0d',
            border: 'solid 1px #d60d0d'
        });
    }



    const chooseDisplay = () => {
        if (!currentResult.status || currentResult.status !== 'SUCCESS')
            return (                
                <Container className={classes.resultContainer}>
                    <Typography color='textSecondary'>
                        Awaiting Badge Scan
                    </Typography>
                </Container>)
        else 
        {
            const { associateData } = currentResult;
            switch(currentResult.operation)
            {
                case 'BREAK_OUT':
                    return(
                        <Container className={classes.resultContainer}>
                            <Typography color='textSecondary'>
                                Associate <span className={classes.boldFont}>{associateData.badge_number} {associateData.user_name}</span> is going to break
                            </Typography>
                        </Container>
                    )
                case 'BREAK_IN':
                    const durMinute = Math.floor(currentResult.duration/1000/60);
                    const durSecond = Math.floor(currentResult.duration/1000%60);
                    return(
                        <Container
                            style={chooseStyle()} 
                            className={classes.resultContainer}>
                            <Typography color='textSecondary'>
                                Associate <span className={classes.boldFont}>{associateData.badge_number} {associateData.user_name}</span> returned from break
                            </Typography>
                            <Typography color='textSecondary'
                                className={classes.boldFont}>
                                {durMinute} Minutes {durSecond} Seconds
                            </Typography>
                        </Container>
                    )
                default: 
                    return(
                        <Container className={classes.resultContainer}>
                            <Typography color='textSecondary'>
                                Awaiting Badge Scan
                            </Typography>
                        </Container>
                    )
            }
        }
    }

    return (
        <Paper className={classes.root}>
            <div className={classes.flexDisplay}>
                <Typography variant='h5' color='primary' className={classes.inlineDisplay}>
                    Current Breaktime 
                </Typography>
                <AccessTimeIcon/>
                <SetTime/>
            </div>
            <Grid container 
                direction='column'
                justify='center' 
                alignItems='center'>
                <img src={BreakImage} alt='' width='80%' height='auto'></img>
                
                {chooseDisplay()}

            </Grid>
            <Typography color='textSecondary'>
                Associates Returned From Break &nbsp;&nbsp; 
                {numberOfAssociatesBackFromBreak} 
            </Typography>
        </Paper>

    )
}

export default ScanResults;