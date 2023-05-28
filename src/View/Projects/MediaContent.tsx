import React from "react";
import {Card, CardContent, CardMedia, Grid, Stack} from "@mui/material";

import Aidodevoirs0 from '../../images/Renders/Aidodevoirs/PoliceBotLogo.png';
import Aidodevoirs1 from '../../images/Renders/Aidodevoirs/GeoMapBotLogo.png';
import Aidodevoirs2 from '../../images/Renders/Aidodevoirs/LogoProposal.png';

import Comissions0 from '../../images/Renders/Comissions/iconSnowDayBardFinalSigned.png';

import GameJams0 from '../../images/Renders/GameJams/Dragon_Thumbnail.png';
import GameJams1 from '../../images/Renders/GameJams/dragon_spaghettiWiggle0000.png';
import GameJams2 from '../../images/Renders/GameJams/CutieInHerPlane.png';

import Personal0 from '../../images/Renders/Others/profilePictureWollfieDiscordBrownHair.png';
import Personal1 from '../../images/Renders/Others/Tonkar.png';
import Personal2 from '../../images/Renders/Others/Peche_En_Foret.png';
import Personal3 from '../../images/Renders/Others/WatermelonKawaii.png';
import Personal4 from '../../images/Renders/Others/Bard.png';
import Personal5 from '../../images/Renders/Others/Mario_Galaxy_Luma.png';
import Personal6 from '../../images/Renders/Others/EvilScientistBackground.png';

import {MediaContentItem} from "./MediaContentItem";

export const MediaContent = () => {
    
    return (
        <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} paddingTop={0}>
            <Grid container spacing={2}
                  alignItems={'center'} justifyContent={'center'}
                  paddingRight={'10vw'} paddingLeft={'10vw'}
                  margin={0} columns={{ xs: 1, md: 1, lg: 2 }}
            >
                <MediaContentItem title={'Commissions'} images={[
                    {image: Comissions0}
                ]}/>
                <MediaContentItem title={{label: 'Aidodevoirs', url: 'https://discord.gg/uPuPQyEw3T'}} images={[
                    {image: Aidodevoirs0}, {image: Aidodevoirs1}, {image: Aidodevoirs2}
                ]}/>
                <MediaContentItem title={{label: 'Game Jams', url: 'https://wollfie.itch.io/'}} images={[
                    {image: GameJams1, transparent: true}
                ]}/>
                <MediaContentItem title={'Personal'} images={[
                    {image: Personal0}, {image: Personal1}, {image: Personal5}, {image: Personal6}
                ]}/>
            </Grid>
        </Stack>
    )
}
