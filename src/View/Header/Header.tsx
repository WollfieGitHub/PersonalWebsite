import {Avatar, Button, IconButton, Stack, Tooltip, Typography, useTheme} from "@mui/material";

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import {NameHeader} from "./NameHeader";
import {PricingButton} from "./PricingButton";
import {ContactButton} from "./ContactButton";
import {Pricing} from "./Pricing";
import PlaylistButton from "../../images/Music/PlaylistButton";

export const Header = () => {
    
    const [ pricingDialogOpened, setPricingDialogOpened ] = useState(false);
    
    const showPricingDialog = () => setPricingDialogOpened(true);
    
    const handleClose = () => setPricingDialogOpened(false);
    
    return (
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row'}}
               justifyContent={'center'} alignItems={'center'}
               alignContent={'center'}
               width={'100%'} paddingBottom={{ xs: 2, sm: 2, md: 2, lg: 0 }}
        >
            
            <NameHeader />
            
            <Stack direction={{ sm: 'column', md: 'row'}} justifyContent={{ sm: 'center', md: 'end' }}
                   alignItems={'center'} width={{ sm: '100%', md: '50%' }} paddingRight={{ sm: 0, md: 5 }}
                   spacing={4} gap={2} alignContent={'center'}
            >
                <PlaylistButton/>
                <PricingButton showPricingDialog={showPricingDialog}/>
                <ContactButton/>
            </Stack>
            
            <Pricing open={pricingDialogOpened} onClose={handleClose} />
            
        </Stack>
    );
}