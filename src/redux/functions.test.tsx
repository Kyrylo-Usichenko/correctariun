import {dateCalculation} from "./dateCalculation";
import {priceCalculation} from "./priceCalculation";
import {workDurationCalculation} from "./workDurationCalculation";
import moment from "moment";

describe("testing functions", () => {
    test('price calculated eng cost with unknown format', () => {
        let testedLength = 12390
        let testedLanguage = 'Англійська(носій)'
        let testedFormat = '.txt'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(1784.1599999999999)
    })
    test('price calculated min eng cost with unknown format', () => {
        let testedLength = 10
        let testedLanguage = 'Англійська(носій)'
        let testedFormat = '.txt'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(144)
    })
    test('price calculated min eng cost with known format', () => {
        let testedLength = 10
        let testedLanguage = 'Англійська(носій)'
        let testedFormat = '.doc'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(120)
    })
    test('price calculated eng cost with known format', () => {
        let testedLength = 12390
        let testedLanguage = 'Англійська(носій)'
        let testedFormat = '.doc'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(1486.8)
    })
    test('price calculated min rus/ua cost with unknown format', () => {
        let testedLength = 10
        let testedLanguage = 'Російська'
        let testedFormat = '.txt'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(60)
    })
    test('price calculated min rus/ua cost with known format', () => {
        let testedLength = 10
        let testedLanguage = 'Російська'
        let testedFormat = '.doc'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(50)
    })
    test('price calculated rus/ua cost known format', () => {
        let testedLength = 12390
        let testedLanguage = 'Російська'
        let testedFormat = '.doc'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(619.5)
    })
    test('price calculated rus/ua cost with unknown', () => {
        let testedLength = 12390
        let testedLanguage = 'Російська'
        let testedFormat = '.txt'
        let functionPriceCalculation = priceCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionPriceCalculation).toBe(743.4)
    })


    test('work duration calculated eng with unknown format', () => {
        let testedLength = 12390
        let testedLanguage = 'Англійська(носій)'
        let testedFormat = '.txt'
        let functionDurationCalculation = workDurationCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionDurationCalculation).toBe(164160000)
    })
    test('work duration calculated eng with known format', () => {
        let testedLength = 12390
        let testedLanguage = 'Англійська(носій)'
        let testedFormat = '.doc'
        let functionDurationCalculation = workDurationCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionDurationCalculation).toBe(136800000)
    })
    test('work duration calculated ru with known format', () => {
        let testedLength = 12390
        let testedLanguage = 'Російська'
        let testedFormat = '.doc'
        let functionDurationCalculation = workDurationCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionDurationCalculation).toBe(36000000)
    })
    test('work duration calculated ru with unknown format', () => {
        let testedLength = 12390
        let testedLanguage = 'Російська'
        let testedFormat = '.txt'
        let functionDurationCalculation = workDurationCalculation(testedLength, testedLanguage, testedFormat)
        expect(functionDurationCalculation).toBe(43200000)
    })

    test('date calculated default', () => {

        let testedTime = 1627394624496
        let testedDuration = 3600001
        let functionDateCalculation = dateCalculation(testedTime, testedDuration)
        expect(functionDateCalculation).toBe('27.07.2021 o 18:03')
    })
    test('date calculated from 18 oclock to next day', () => {
        // @ts-ignore
        let testedTime = moment().local("uk").hour(18).valueOf()
        let testedDuration = 3600001
        let functionDateCalculation = dateCalculation(testedTime, testedDuration)
        expect(functionDateCalculation).toBe('29.07.2021 o 11:00')
    })
    test('date calculated from 20 oclock to next day', () => {
// @ts-ignore
        let testedTime = moment().local("uk").hour(20).valueOf()
        let testedDuration = 3600001
        let functionDateCalculation = dateCalculation(testedTime, testedDuration)
        expect(functionDateCalculation).toBe('29.07.2021 o 11:00')
    })
    test('date calculated from friday to next work day', () => {
// @ts-ignore
        let testedTime = moment().local("uk").day(5).hour(20).valueOf()
        let testedDuration = 3600001
        let functionDateCalculation = dateCalculation(testedTime, testedDuration)
        expect(functionDateCalculation).toBe('02.08.2021 o 11:00')
    })
    test('date calculated from morning 5 am to next work day', () => {

        // @ts-ignore
        let testedTime = moment().local("uk").day(3).hour(5).valueOf()
        let testedDuration = 3600001
        let functionDateCalculation = dateCalculation(testedTime, testedDuration)
        expect(functionDateCalculation).toBe('28.07.2021 o 11:00')
    })
})