import { Grid, Paper, Typography, Box, CircularProgress } from '@material-ui/core'
import React, { createRef, useEffect, useState } from 'react'
import useStyle from './../Styles'
import {HOSTNAME} from './../Constants'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { currentResultState } from '../recoil/atoms'
import { numberOfAssociatesScannedOutState } from './../recoil/selectors'


const BadgeScan = (props) => {
    const classes = useStyle();
    const [badge_number, setBadgeNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const inputRef = createRef();
    const setCurrentResult = useSetRecoilState(currentResultState);
    const numberOfAssociatesScannedOut = useRecoilValue(numberOfAssociatesScannedOutState);

    useEffect(() => {
        if (inputRef.current) 
            inputRef.current.focus();
    });

    const onBadgeScan = (e) => {
        e.preventDefault();

        setLoading(true);
        fetch(HOSTNAME + 'badge-scan/', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                badge_number
            })
        }).then(res => res.json())
        .then(data => {
            if (data.status === 'SUCCESS')
                setCurrentResult(data);
            else window.alert('BADGE SCAN FAILED. PLEASE TRY AGAIN');
        }).catch(e => {
            console.log(e);
            window.alert('NETWORK ERROR! BADGE SCAN FAILED')
        }).finally(()=> {
            setLoading(false);
            setBadgeNumber('');
        })
    }

    return(
        <Paper className={classes.root}>
            <Grid container direction='column'>
                <Box>
                    <Typography variant='h5'
                        color='primary'
                        className={classes.inlineDisplay}>
                        Associate Scanned Out for Break 
                    </Typography>
                    <Typography variant='h5'
                        color='textSecondary'
                        className={classes.inlineDisplay}>
                            {numberOfAssociatesScannedOut}
                    </Typography>
                </Box>

                <Box className={classes.scanInputBlock}>
                    <Box hidden={!loading} className={classes.loadingOverlay}>
                        <Grid container alignItems='center' justify='center'>
                            <CircularProgress></CircularProgress>
                        </Grid>
                    </Box>
                    <form className={classes.formStyles} 
                        onSubmit={onBadgeScan}>
                        <input
                            onChange={e => setBadgeNumber(e.target.value)}
                            value={badge_number}
                            className={classes.inputStyles}
                            placeholder="Scan Associate's Badge"
                            ref={inputRef}>
                        </input>
                    </form>
                </Box>
            </Grid>
        </Paper>
    )
}

export default BadgeScan;