import reducer from "./reducer";

const {updateProcessedText, selectUserLanguage} = require("./reducer");

describe("testing state", () => {

    let state = {
        processedText: '',
        selectedLanguage: "Українська",
        totalAmount: null,
        currentTime: null,
        deadLine: null,
    }

    test('text updated', () => {
        let action = updateProcessedText("HELLO WORD")
        let newState = reducer(state, action)
        expect(newState.processedText).toBe('HELLO WORD')
    })

    test('language updated', () => {
        let action = selectUserLanguage("Українська")
        let newState = reducer(state, action)
        expect(newState.selectedLanguage).toBe('Українська')
    })
})

