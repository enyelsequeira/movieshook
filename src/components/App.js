import React, { useState } from 'react';
import { AppBar, CssBaseline, IconButton, Drawer, Hidden, Toolbar } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import moviesAPI from '../api/moviesAPI';
import { Search, Movies, Sidebar } from '.';
import MovieInfo from './MovieInformation';

import useStyles from './AppStyles';

const App = ({ container }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={() => setMobileOpen(!mobileOpen)} className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Search />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer container={container} variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'} open={mobileOpen} onClose={() => setMobileOpen(!mobileOpen)} classes={{ paper: classes.drawerPaper }} ModalProps={{ keepMounted: true }}>
              <div className={classes.toolbar} />
              <Sidebar />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
              <div className={classes.toolbar} />
              <Sidebar />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/movie">
              <MovieInfo />
            </Route>
            <Route exact path="/">
              <Movies />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
