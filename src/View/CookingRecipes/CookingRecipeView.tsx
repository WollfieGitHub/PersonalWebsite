import {CookingRecipe} from "../../Model/CookingRecipes/CookingRecipe";
import {Card, CardActionArea, CardMedia, Stack, Typography} from "@mui/material";
import React from "react";

interface CookingRecipeViewProps {
    recipe: CookingRecipe
}

const Padding = 20;
const SubPadding = 40;
export const CookingRecipeView = (props: CookingRecipeViewProps) => {
    
    const { recipe } = props;
    
    return <Stack direction={'column'} justifyContent={'start'} paddingLeft={Padding} paddingRight={Padding}>
        <Typography variant={'h4'} padding={2}>{ recipe.title }</Typography>
        <Card> <CardMedia component={'img'} image={recipe.image} height={'200'} /> </Card>
        
        <Stack direction={'column'} justifyContent={'start'} paddingLeft={SubPadding} paddingTop={5}>
            <Typography variant={'body1'} textAlign={'left'} color={'whitesmoke'}><span style={{color: '#959595'}}>Source : </span>{ recipe.url }</Typography>
            <Typography variant={'body1'} textAlign={'left'} color={'whitesmoke'}><span style={{color: '#959595'}}>Serving Size : </span>{ recipe.initialServingSize } people</Typography>
            <Typography variant={'body1'} textAlign={'left'} color={'whitesmoke'}><span style={{color: '#959595'}}>Prep Time : </span>{ recipe.preparationTimeMin } min</Typography>
            <Typography variant={'body1'} textAlign={'left'} color={'whitesmoke'}><span style={{color: '#959595'}}>Cook Time : </span>{ recipe.cookingTimeMin } min</Typography>
        </Stack>
        <Typography variant={'h6'} >Ingredients :</Typography>
        <Stack direction={'column'} justifyContent={'start'} paddingLeft={SubPadding} paddingRight={SubPadding}>
            { recipe.ingredients.map(ingredient => <Typography 
                variant={'body2'} textAlign={'left'}> 
                ∘ { ingredient }
            </Typography>) }
        </Stack>
        <Typography variant={'h6'} >Directions :</Typography>
        <Stack direction={'column'} justifyContent={'start'} paddingLeft={SubPadding} paddingRight={SubPadding}>
            { recipe.steps.map((step, i) => {
                return <Typography variant={'body2'} textAlign={'left'} marginTop={5}>{`${i+1}. ${step}`}</Typography>
            }) }
        </Stack>
    </Stack>
}