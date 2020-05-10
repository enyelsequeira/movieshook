import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import { AppBar, CssBaseline, IconButton, Drawer, Hidden, Toolbar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { init } from './actions';
import { fetchMovies } from './api/index';
import { Search, Categories, Movies, Sidebar } from './components';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function PermanentDrawerLeft({ init, container }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  //   const [movies, setMovies] = useState([]);
  const movies = useSelector((state) => state.movies.results);
  const isLoading = useSelector((state) => state.config.isLoading);

  useEffect(() => {
    init();
  }, [init]);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Search />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer container={container} variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'} open={mobileOpen} onClose={handleDrawerToggle} classes={{ paper: classes.drawerPaper }} ModalProps={{ keepMounted: true }}>
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
        {/* <Categories movies={movies} /> */}
        <Movies movies={movies} />
      </main>
    </div>
  );
}

const mapStateToProps = ({ config }) => ({ isLoading: config.loading });

export default connect(
  mapStateToProps,
  { init },
)(PermanentDrawerLeft);
