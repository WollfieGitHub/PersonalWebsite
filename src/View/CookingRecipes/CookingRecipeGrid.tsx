import {Box, Grid, Typography} from "@mui/material";
import {CookingRecipeCardPreview} from "./CookingRecipeCardPreview";
import {CookingRecipe} from "../../Model/CookingRecipes/CookingRecipe";
import {RisottoDeSaumonFume} from "../../data/CookingRecipes/RisottoDeSaumonFume";
import {useState} from "react";
import {CookingRecipeView} from "./CookingRecipeView";

const recipes: CookingRecipe[] = [
    RisottoDeSaumonFume,
];

export const CookingRecipeGrid = () => {
    
    const [ selectedRecipe, setSelectedRecipe ] = useState<CookingRecipe|undefined>(undefined);
    
    const handleRecipeSelection = (r: CookingRecipe) => setSelectedRecipe(r);
    
    return <Box>
        { selectedRecipe === undefined ? (
        <>
            <Typography variant={'h4'}>Because. Why not.</Typography>
            <Grid container>
                { recipes.map(recipe => <CookingRecipeCardPreview recipe={recipe} onClick={handleRecipeSelection}/>) }
            </Grid>
        </>
        ) : (
            <Box>
                <CookingRecipeView recipe={selectedRecipe} />
            </Box>
        ) }
    </Box>
}