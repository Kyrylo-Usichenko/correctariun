import {dateCalculation} from "./dateCalculation";
import {priceCalculation} from "./priceCalculation";
import {workDurationCalculation} from "./workDurationCalculation";

describe("testing functions", () => {
    test('price calculated', () => {
        let testedLength = 12390
        let testedLanguage = 'Англійська(носій)'
        let testedFormat = '.txt'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(1784.1599999999999)
    })

    test('work duration calculated', () => {
        let testedLength = 12390
        let testedLanguage = 'Англійська(носій)'
        let testedFormat = '.txt'
        let functionDurationCalculation = workDurationCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionDurationCalculation).toBe(164160000)
    })

    test('date calculated', () => {
        let testedTime = 1627158863341
        let testedDuration = 3600001
        let functionDateCalculation = dateCalculation(testedTime, testedDuration)
        expect(functionDateCalculation).toBe('26.07.2021 o 11:00')
    })
})