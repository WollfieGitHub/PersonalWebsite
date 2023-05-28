import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {CookingRecipe} from "../../Model/CookingRecipes/CookingRecipe";

interface CookingRecipeCardViewProps {
    recipe: CookingRecipe,
    onClick: (r: CookingRecipe) => void,
}

export const CookingRecipeCardPreview = (props: CookingRecipeCardViewProps) => {
    
    const handleRecipeSelection = () => props.onClick(props.recipe);
    
    return <Grid item>
        <Card sx={{padding: 0}}>
            <CardActionArea onClick={handleRecipeSelection}>
                <CardMedia component={'img'} image={props.recipe.image} height={'300'}/>
                <CardContent>
                    <Typography variant={'h6'}>
                        { props.recipe.title }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
}