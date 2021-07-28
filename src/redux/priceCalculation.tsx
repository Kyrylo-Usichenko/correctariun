export const priceCalculation = (length: number, language: string, format: string) => {
    let factor: number
    let minPrice: number
    if (language === "Українська" || language === "Російська") {
        factor = 0.05
        minPrice = 50
    } else  {
        factor = 0.12
        minPrice = 120
    }
    if (language === "Українська" || language === "Російська") {
        if (format === ".doc" || format === ".docx" || format === ".rtf" || format === undefined) {
            return length > 1000 ? length * factor : minPrice;
        } else {
            return length > 1000 ? length * factor * 1.2 : minPrice * 1.2
        }
    } else {
        if (format === ".doc" || format === ".docx" || format === ".rtf" || format === undefined) {
            return length > 1000 ? length * factor : minPrice;
        } else {
            return length > 1000 ? length * factor * 1.2 : minPrice * 1.2
        }
    }
}