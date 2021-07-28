export const workDurationCalculation = (length: any, language: string, format: string) => {
    let translationSpeed

    if (language === "Українська" || language === "Російська") {
        translationSpeed = 1333
    } else {
        translationSpeed = 333
    }
    let time = 0.5
    if (format === ".doc" || format === ".docx" || format === ".rtf" || format === undefined) {
        time = Math.round(length / translationSpeed + time) * 60 * 60 * 1000
        return time <= 3600 ? 3600 : time
    } else {
        time = Math.round((length / translationSpeed + time)) * 60 * 60 * 1000 * 1.2
        return time <= 3600 ? 3600 * 1.2 : time
    }
}

