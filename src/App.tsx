import React from 'react';
import logo from './images/Renders/Others/Tonkar.png';
import './App.css';
import {createTheme, Divider, Stack, ThemeProvider} from "@mui/material";
import {Header} from "./View/Header/Header";
import Grid2 from "@mui/material/Unstable_Grid2";
import {MediaContent} from "./View/Projects/MediaContent";
import {DashboardTabs} from "./View/Header/DashboardTabs";
import {CookingRecipeGrid} from "./View/CookingRecipes/CookingRecipeGrid";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a5c8ff',
      contrastText: '#00315e',
    },
    secondary: {
      main: '#bcc7dc',
      contrastText: '#273141'
    },
    info: {
      main: '#dabde2',
      contrastText: '#3d2946',
    },
    error: {
      main: '#ffb4ab',
      contrastText: '#690005',
    },
    background: {
      default: '#1a1c1e',
      paper: 'rgba(165, 200, 255, 0.05)',
    }
  },
  typography: {
    allVariants: {
      color: 'whitesmoke',
      fontFamily: "'Zilla Slab', serif"
    },
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 300,
    fontSize: 25,
  },
})


function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className="App" style={{
        backgroundColor: theme.palette.background.default
      }}>
        <Stack direction={'column'} justifyContent={'center'} p={2}>
          <Header />

          <Divider orientation={'horizontal'}/>

          <DashboardTabs>
            {[
              {tabName: 'Illustrations', tab: <MediaContent/>},
              /* {tabName: 'Cooking Recipes', tab: <CookingRecipeGrid/>}, */
            ]}
          </DashboardTabs>
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
