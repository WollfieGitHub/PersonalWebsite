import {Button, Tooltip, Typography, useTheme} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";
import {Pricing} from "./Pricing";
import {icon} from "@fortawesome/fontawesome-svg-core";

type PricingButtonProps = {
    showPricingDialog: () => void
}

export const PricingButton = (props: PricingButtonProps) => {
    
    const theme = useTheme();
    
    return <Tooltip title={'Prices for comissions'}>
        <Button endIcon={<FontAwesomeIcon icon={faCreditCard} color={theme.palette.info.main} style={{
            fontSize: '2rem'
        }}/>} onClick={props.showPricingDialog} variant={'outlined'} color={'info'} style={{margin: 0}}>
            Pricing
        </Button>
    </Tooltip>
}