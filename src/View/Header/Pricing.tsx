import {Dialog, DialogContent, DialogContentText, DialogTitle, Typography, useTheme} from "@mui/material";

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

export const Pricing = (props: SimpleDialogProps) => {

    const theme = useTheme();
    const { onClose, open } = props;
    const fontSize = 22;
    
    return <Dialog onClose={onClose} open={open}>
        <div style={{
            borderWidth: 1, borderStyle: 'solid', borderColor: theme.palette.info.main,
            borderRadius: 5, backgroundColor: theme.palette.background.default
        }}>
            <DialogTitle><Typography variant={'h4'} sx={{ 
                textDecoration: 'underline', textDecorationColor: theme.palette.info.main
            }}>
                Pricing
            </Typography></DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography variant={'body1'} fontSize={fontSize}>
                        ∘ Free - Depending on the artwork and whether or not I am available<br/>
                        Otherwise :<br/>
                        ∘ 5€ - Small profile picture<br/>
                        ∘ 5 to 30€ - Other requests<br/>
                        <br/>
                        ∘ 2.5 to 10€ fee - Prevent me from publishing the commission
                    </Typography>
                    
                </DialogContentText>
            </DialogContent>
        </div>
    </Dialog>
}