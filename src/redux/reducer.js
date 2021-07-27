import moment from "moment"
import {dateCalculation} from './dateCalculation'
import {priceCalculation} from "./priceCalculation";
import {workDurationCalculation} from "./workDurationCalculation";

console.log(moment().local("uk").valueOf())
console.log(moment().local("uk").hour(18))
console.log(dateCalculation(moment().local("uk").hour(18).valueOf(), 3600001))

const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT'
const SELECT_USER_LANGUAGE = 'CHOOSE-USER-LANGUAGE'


const initialState = {
    processedText: '',
    selectedLanguage: "Українська",
    totalAmount: null,
    currentTime: null,
    deadLine: null,
}

function reducer(state = initialState, action) {


    switch (action.type) {
        case SELECT_USER_LANGUAGE:

            return {
                ...state,
                selectedLanguage: action.value,
                processedText: state.processedText,
                totalAmount: null
            }




        case UPDATE_NEW_TEXT:
            state.currentTime = moment().local("uk").valueOf();
            state.totalAmount = priceCalculation(action.newText.length, state.selectedLanguage, '.doc').toFixed(2)
            let workDuration = workDurationCalculation(action.newText.length, state.selectedLanguage,'.doc')
            let deadLine = dateCalculation(state.currentTime, workDuration)

            return ({
                ...state,
                processedText: action.newText,
                totalAmount: state.totalAmount,
                deadLine: deadLine
            })
        default:
            return state
    }
}


export const updateProcessedText = (text) => ({type: UPDATE_NEW_TEXT, newText: text})
export const selectUserLanguage = value => ({type: SELECT_USER_LANGUAGE, value})


export default reducer
