import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Link,
    Stack,
    Typography,
    useTheme
} from "@mui/material";
import Comission0 from "../../images/Renders/Comissions/iconSnowDayBardFinalSigned.png";
import React, {useEffect, useState} from "react";

export type Image = {image: string, transparent?: boolean};

export const MediaContentItem = (props: {
    title: string | {label: string, url: string}, images: Image[]
}) => {

    const theme = useTheme();

    const label = (
        typeof props.title === 'string'
            ? props.title
            : props.title.label
    )
    const url = ( typeof props.title === 'string' ? undefined : props.title.url)

    console.log(theme.breakpoints.up('md'))

    const sizeStyle = {
        md: { height: 300, width: 'auto' },
        xs: { height: 'auto', width: 300 },
    }

    return <Grid item xs={1} md={1} lg>
        <Card color={'primary'} sx={{
            backgroundImage: 'none'
        }}>
            <CardActionArea>
                <CardContent>
                    <Link href={url} target={'_blank'} underline={'none'} rel={"noopener noreferrer"}>
                        <Typography variant={'h6'} sx={{
                            textDecoration: `underline solid 2px ${theme.palette.primary.main}`
                        }}>
                            { label }
                        </Typography>
                    </Link>
                    <Stack direction={{ md: 'column', lg: 'row' }}
                           gap={{ xs: 1, md: 2, lg: 2 }}
                           justifyContent={'center'} alignItems={'center'}
                           flexWrap={'wrap'} alignContent={'cent'}
                    >
                        { props.images.map(image =>
                            <Box component={'img'} m={0} p={0} src={image.image} sx={{
                                margin: 0, borderRadius: 10,
                                border: (image.transparent ? 'none' : `solid 2px ${theme.palette.primary.main}`)
                            }} height={{
                                xs: 'auto', md: 'auto', lg: 300
                            }} width={{
                                xs: 150, md: 300, lg: 'auto'
                            }}
                            />
                        ) }
                    </Stack>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
}