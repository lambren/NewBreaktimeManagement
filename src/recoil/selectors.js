import { selector } from 'recoil'
import { currentBreaktimeState, currentListState } from './atoms'

const associatesBeingOnBreakState = selector({
    key: 'associatesBeingOnBreakState',
    get: ({get}) => {
        const list = get(currentListState);
        return list.filter(item => !(item.time_in));
    }
})

const associatesBreakOverTimeState = selector({
    key: 'associatesBreakOverTimeState',
    get: ({get}) => {
        const list = get(currentListState);
        const currentBreakTime = get(currentBreaktimeState);

        return list.filter(item => {
            const timeOut = new Date(item.time_out);
            const timeIn = new Date(item.time_in);
            if (!item.time_in) return false;
            return ((timeIn - timeOut) > (currentBreakTime*60*1000 + 5*60*1000))})
        
    }
})

const numberOfAssociatesScannedOutState = selector({
    key: 'numberOfAssociatesScannedOutState',
    get: ({get}) => {
        const list = get(currentListState);
        return list.length;
    }
})

const numberOfAssociateBackFronBreakState = selector({
    key: 'numberOfAssociateBackFronBreakState',
    get: ({get}) => {
        const list = get(currentListState);
        return list.filter(item => item.time_in).length;
    }
})


export { associatesBeingOnBreakState, associatesBreakOverTimeState,
    numberOfAssociatesScannedOutState, numberOfAssociateBackFronBreakState }