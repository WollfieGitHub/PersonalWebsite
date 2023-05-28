
import {IngredientUnit, TenthUnit} from "./IngredientUnit";
import {Language} from "../Language";

export interface CookingRecipe {
    url?: string,
    image?: string,
    language: Language
    cookingTimeMin: number,
    preparationTimeMin: number,
    initialServingSize: number, 
    title: string, 
    ingredients: string[], 
    steps: string[],
}

export interface IngredientItem {
    quantity?: number,
    unit?: IngredientUnit,
    tenth?: TenthUnit,
    ingredient: Ingredient,
    preparation?: string,
}

export interface Ingredient {
    id: string,
    name: Map<Language, string>,
}
