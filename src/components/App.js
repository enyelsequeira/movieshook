import React, { useState } from 'react';
import { AppBar, CssBaseline, IconButton, Drawer, Hidden, Toolbar, Switch as MuiSwitch } from '@material-ui/core';
// import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BsMoon } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';
import { Search, Movies, Sidebar, MovieInfo } from '.';
// import MovieInfo from './Movies/MovieInformation/MovieInformation.js';
import useStyles from './AppStyles';

const App = ({ container }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const classes = useStyles();

  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: isDarkMode ? 'dark' : 'light',
        contrastThreshold: 0.2,
        tonalOffset: 1,
        background: {
          default: isDarkMode ? '#242526' : '#FFFFFF',
        },
      },
    }),
    [isDarkMode],
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => setMobileOpen(!mobileOpen)} className={classes.menuButton}>
                <MenuIcon />
              </IconButton>

              <Search />
              <FaSun />

              <MuiSwitch size="small" color="default" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
              <BsMoon />
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
              <Drawer container={container} variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'} open={mobileOpen} onClose={() => setMobileOpen(!mobileOpen)} classes={{ paper: classes.drawerPaper }} ModalProps={{ keepMounted: true }}>
                {/* <div className={classes.toolbar} /> */}
                <Sidebar />
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                {/* <div className={classes.toolbar} /> */}
                <Sidebar />
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <AnimatePresence>
              <Switch>
                <Route exact path="/movie">
                  <MovieInfo />
                </Route>
                <Route exact path="/">
                  <Movies />
                </Route>
              </Switch>
            </AnimatePresence>
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
