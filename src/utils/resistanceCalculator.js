const colorCodes = {
    black: { value: 0, multiplier: 1 },
    brown: { value: 1, multiplier: 10, tolerance: 1 },
    red: { value: 2, multiplier: 100, tolerance: 2 },
    orange: { value: 3, multiplier: 1_000 },
    yellow: { value: 4, multiplier: 10_000 },
    green: { value: 5, multiplier: 100_000, tolerance: 0.5 },
    blue: { value: 6, multiplier: 1_000_000, tolerance: 0.25 },
    violet: { value: 7, multiplier: 10_000_000, tolerance: 0.1 },
    gray: { value: 8, multiplier: 100_000_000, tolerance: 0.05 },
    white: { value: 9, multiplier: 1_000_000_000 },
    gold: { multiplier: 0.1, tolerance: 5 },
    silver: { multiplier: 0.01, tolerance: 10 }
};

export function calculateResistance(bands, multiplier, tolerance) {
    if (bands.some(band => !colorCodes[band]) || !colorCodes[multiplier]) {
        return "Invalid Selection";
    }
    const resistanceValue = bands.reduce((acc, band, index) => acc * 10 + colorCodes[band].value, 0) * colorCodes[multiplier].multiplier;
    const toleranceValue = colorCodes[tolerance]?.tolerance || "Unknown";
    return `${formatResistance(resistanceValue)} ± ${toleranceValue}%`;
}

function formatResistance(value) {
    if (value >= 1_000_000) return `${value / 1_000_000}MΩ`;
    if (value >= 1_000) return `${value / 1_000}kΩ`;
    return `${value}Ω`;
}

export function decodeSMD(code) {
    if (!/^\d{3,4}$/.test(code)) return "Invalid SMD Code";
    const length = code.length;
    const significantFigures = code.slice(0, length - 1);
    const multiplier = Math.pow(10, code[length - 1]);
    return formatResistance(parseInt(significantFigures) * multiplier);
}
