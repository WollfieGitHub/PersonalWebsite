import {Box, Stack, Tab, Tabs, Typography} from "@mui/material";
import React, {useState} from "react";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

interface DashboardTabsProps {
    children?: {tab: JSX.Element, tabName: string}[]
}

export const DashboardTabs = (props: DashboardTabsProps) => {
    
    const [ value, setValue ] = useState(0);
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }
    
    return <Box style={{ width: '100%' }}>
        <Stack direction={'row'} justifyContent={'center'}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {
                    props.children?.map((child, i) => {
                        return <Tab key={i} label={
                            <Typography variant={'h5'}>{ child.tabName }</Typography>
                        } {...a11yProps(i)} sx={{marginLeft: 5, marginRight: 5}}/>
                    })
                }
            </Tabs>
        </Stack>
        {
            props.children?.map((child, i) => {
                return <TabPanel value={value} index={i} key={i}>{ child.tab }</TabPanel>
            })
        }
    </Box>
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`} {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>{ children }</Box>
            )}
        </div>
    );
}