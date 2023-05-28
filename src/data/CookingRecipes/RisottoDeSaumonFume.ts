import {CookingRecipe} from "../../Model/CookingRecipes/CookingRecipe";
import {TypeToUnit} from "../../Model/CookingRecipes/IngredientUnit";
import {GousseAil, Poireau} from "./Ingredients/Vegetables";
import {VinBlanc} from "./Ingredients/Liquids";
import {RisottoRice} from "./Ingredients/Carbs";

import RisottoSaumonFume from './../../images/CookingRecipes/RisottoSaumonFume.png';

export const RisottoDeSaumonFume: CookingRecipe = {
    image: RisottoSaumonFume,
    language: 'french', title: 'Risotto de Saumon Fumé',
    cookingTimeMin: 30,
    preparationTimeMin: 10,
    initialServingSize: 4,
    ingredients: [
        `15cl de vin blanc`,
        `400g de riz pour risotto`,
        `1 poireau`,
        `2 gousses d'ail`,
        `40g de beurre`,
        `1/4 c.a.c de curcuma ou 1 dosette de safran`,
        `4 cuillères à soupe de crème fraîche`,
        `40g de Parmesan`,
        `1 c.a.c d'aneth`,
        `1 c.a.c de citron`,
        `sel/poivre`,
        `150g de saumon fumé`,
        `1.5L de bouillon de volaille (3 cubes environ)`,
        `1.5L de bouillon de volaille (3 cubes environ)`,
    ],
    steps: [
        `Préparer le bouillon de volaille.`,
        `Faire revenir le poireau lavé et émincé avec l'ail et 40 g de beurre, à feu doux pendant environ 10 mn, jusqu'à ce que le poireau commence à fondre (utiliser une casserole ou un wok qui n'accroche pas). `, 
        `Ajouter le riz et le curcuma, faire revenir jusqu'à ce que les grains deviennent translucides.`,
        `Ajouter le vin blanc, remuer et laisser s'évaporer complètement.`,
        `Mouiller avec une louche de bouillon et verser le reste en plusieurs fois en remuant régulièrement jusqu'à ce que le riz soit cuit (le riz doit être fondant et légèrement ferme à la fois). Saler en cours de cuisson si nécessaire (le bouillon étant déjà salé je ne le conseille pas).`,
        `En fin de cuisson, rajouter la crème fraîche ou le beurre froid ainsi que le parmesan, remuer doucement.`,
        `Juste avant de servir rajouter le poivre, les lanières de saumon, l'aneth et les zestes de citron (le saumon ne doit pas cuire!)`
    ]
}
