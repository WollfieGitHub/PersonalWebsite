
export type UnitType = 'mass' | 'volume' | 'unit' | 'teaspoon' | 'tablespoon' | 'cup' 

export const TypeToUnit: Map<UnitType, IngredientUnit> = new Map([
    ['mass', { unitType: "mass", shorthand: 'g', allowedTenthIndicator: new Map([
        [0.001, true], [0.01, false], [0.1, false], [1, true], [10, false], [100, false], [1000, true],
    ])}],
    ['volume', { unitType: "volume", shorthand: 'L', allowedTenthIndicator: new Map([
        [0.001, true], [0.01, true], [0.1, true], [1, true], [10, false], [100, false], [1000, true],
    ])}],
    ['unit', { unitType: "unit", shorthand: '', allowedTenthIndicator: new Map([
        [0.001, false], [0.01, false], [0.1, false], [1, false], [10, false], [100, false], [1000, false],
    ])}],
    ['teaspoon', { unitType: "teaspoon", shorthand: 'teaspoon', allowedTenthIndicator: new Map([
        [0.001, false], [0.01, false], [0.1, false], [1, false], [10, false], [100, false], [1000, false],
    ])}],
    ['tablespoon', { unitType: "tablespoon", shorthand: 'tablespoon', allowedTenthIndicator: new Map([
        [0.001, false], [0.01, false], [0.1, false], [1, false], [10, false], [100, false], [1000, false],
    ])}],
    ['cup', { unitType: "cup", shorthand: 'cup', allowedTenthIndicator: new Map([
        [0.001, false], [0.01, false], [0.1, false], [1, false], [10, false], [100, false], [1000, false],
    ])}],
]);

export type TenthUnit = 'm' | 'c' | 'd' | '' | 'deca' | 'hecto' | 'k';

export const TenthIndicator: {quantity: number, unit: TenthUnit}[] = [
    { quantity: 0.001, unit: 'm'},
    { quantity: 0.01, unit: 'c'},
    { quantity: 0.1, unit: 'd'},
    { quantity: 1, unit: ''},
    { quantity: 10, unit: 'deca'},
    { quantity: 100, unit: 'hecto'},
    { quantity: 1000, unit: 'k'},
];

export function unitToNumber(unit: TenthUnit): number {
    for (const indicator of TenthIndicator) {
        if (indicator.unit === unit) { return indicator.quantity; }
    }
    return 1;
}

export function numberToUnit(quantity: number): TenthUnit {
    for (const indicator of TenthIndicator) {
        if (indicator.quantity === quantity) { return indicator.unit; }
    }
    return '';
}

export function normalize(quantity: number, currentUnit: TenthUnit): {quantity: number, unit: TenthUnit} {
    if (quantity === 0) { return { quantity: quantity, unit: currentUnit}; }
    
    const normalized = unitToNumber(currentUnit) * quantity;
    const powerOfTen = Math.round(Math.log10(normalized));
    const newTenth = Math.pow(10, powerOfTen);
    const newUnit: TenthUnit = numberToUnit(newTenth);
    const newQuantity = newTenth * normalized;
    
    return { quantity: newQuantity, unit: newUnit };
}

export interface IngredientUnit {
    unitType: UnitType,
    allowedTenthIndicator: Map<number, boolean>,
    shorthand: string,
}

