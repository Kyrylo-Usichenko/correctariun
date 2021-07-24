export const workDurationCalculation = (length, language, format) => {
    let translationSpeed

    if (language === "Українська" || language === "Російська") {
        translationSpeed = 1333
    }
    if (language === "Англійська" || language === "Англійська(носій)") {
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

