import { makeStyles } from '@material-ui/core/styles';
const useStyle = makeStyles({
    root: {
        padding: '2em',
        margin: '1em',
    },
    inputStyles: {
        padding: '0.5em',
        borderRadius: '3px',
        border: '1px solid #d4d4d4',
        width: '100%',
        margin: '0.5em',
    },
    formStyles : {
        width: '90%'
    },
    resultContainer: {
        border: '1px solid #d4d4d4',
        padding: '1em',
        textAlign: 'center',
        borderRadius: '3px',
        marginBottom:'0.5em',
    },
    inlineDisplay: {
        display:'inline',
        paddingRight: '0.5em'
    },
    beingOnBreakContainer: {
        height: '30vh',
        padding: '0px',
        overflowY: 'scroll',
    },
    breakOverTimeContainer: {
        height: '10vh',
        padding: '0px',
        overflowY: 'scroll',
    },
    loadingOverlay: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.8)',
        width: '100%',
    },
    scanInputBlock: {
        position: 'relative',
        marginTop:'0.5em'
    },
    iconPadding: {
        padding: '0.5em'
    },
    whiteColor : {
      color: 'white'
    },
    flexDisplay: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    associateDisplay: {
        paddingTop: '0.2em',
        paddingBottom: '0.2em',
        borderBottom: 'solid 1px #d4d4d4',
        paddingRight: '0.2em'
    },
    listHeader: {
        paddingTop: '10px',
        marginRight: '20px'
    },
    boldFont: {
        fontWeight: 'bold'
    },
    bigText: {
        fontSize: '22px',
    }
})

export default useStyle;