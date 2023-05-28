import {useState} from "react";
import {Button, Tooltip, Typography, useTheme} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

export const ContactButton = () => {

    const theme = useTheme();

    const [ showTooltip, setShowTooltip ] = useState(false);

    const discordIconClicked = () => {
        navigator.clipboard.writeText('Wollfie#2717').then()
        setShowTooltip(true);

        setTimeout(() => setShowTooltip(false), 1000);
    }
    
    return <Tooltip title={'Copied to Clipboard !'} disableHoverListener open={showTooltip} >
        <Button endIcon={
            <FontAwesomeIcon icon={faDiscord} color={theme.palette.primary.main} style={{
                fontSize: '2rem'
            }}/>
        } onClick={discordIconClicked} variant={'outlined'} color={'primary'} style={{margin: 0}}>
            Contact
        </Button>
    </Tooltip>
}