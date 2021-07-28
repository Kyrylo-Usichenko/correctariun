import moment from "moment"
import {dateCalculation} from './dateCalculation'
import {priceCalculation} from "./priceCalculation";
import {workDurationCalculation} from "./workDurationCalculation";

const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT'
const SELECT_USER_LANGUAGE = 'CHOOSE-USER-LANGUAGE'

export type InitialStateType = {
    processedText: string,
    selectedLanguage: string,
    totalAmount: null | string,
    currentTime: any,
    deadLine: null | string,
}
const initialState: InitialStateType = {
    processedText: '',
    selectedLanguage: "Українська",
    totalAmount: null,
    currentTime: null,
    deadLine: null,
}

function reducer(state = initialState, action: ActionsType) {
    switch (action.type) {
        case SELECT_USER_LANGUAGE:

            return {
                ...state,
                selectedLanguage: action.value,
                processedText: state.processedText,
                totalAmount: null
            }


        case UPDATE_NEW_TEXT:
            // @ts-ignore
            state.currentTime = moment().local("uk").valueOf();
            state.totalAmount = priceCalculation(action.text.length, state.selectedLanguage, '.doc').toFixed(2)
            let workDuration = workDurationCalculation(action.text.length, state.selectedLanguage, '.doc')
            let deadLine = dateCalculation(state.currentTime, workDuration)

            return ({
                ...state,
                processedText: action.text,
                totalAmount: state.totalAmount,
                deadLine: deadLine
            })
        default:
            return state
    }
}

type ActionsType = updateProcessedTextType | selectUserLanguageType
type updateProcessedTextType = {
    type: typeof UPDATE_NEW_TEXT
    text: string
}
export const updateProcessedText = (text:string): updateProcessedTextType => ({type: UPDATE_NEW_TEXT, text})
type selectUserLanguageType = {
    type: typeof SELECT_USER_LANGUAGE
    value: string
}
export const selectUserLanguage = (value: string): selectUserLanguageType => ({type: SELECT_USER_LANGUAGE, value})

export default reducer
