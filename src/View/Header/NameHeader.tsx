import {Avatar, Stack, Typography, useTheme} from "@mui/material";

import WollfieAvatar from '../../images/ProfilePicture.png';

export const NameHeader = () => {

    const theme = useTheme();

    return <Stack direction={'row'}
                  justifyContent={{ sm: 'center', md: 'start' }}
                  alignItems={'center'} width={{ sm: '100%', md: '50%' }}
                  paddingLeft={{ sm: 0, md: 5 }}
    >
        <Avatar src={WollfieAvatar} alt={"My avatar"} sx={{
            width: 80, height: 80, border: `solid 2px ${theme.palette.primary.main}`
        }}/>
        <Typography variant={'h4'} fontFamily={'Pompiere, cursive'} p={2}>
            Wollfie
        </Typography>
    </Stack>
}