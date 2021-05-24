import { atom } from 'recoil'

const currentListState = atom({
    key: 'currentListState',
    default: [],
})

const currentBreaktimeState = atom({
    key: 'currentBreaktimeState',
    default: 15
})

const currentResultState = atom({
    key: 'currentResultState',
    default: {}
})

export { currentListState, currentBreaktimeState, currentResultState }