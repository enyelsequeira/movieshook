import React, { useState, useEffect } from 'react';

import { AppBar, CssBaseline, Divider, IconButton, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import { PhotoPlaceholder } from 'react-placeholder-image';
import { fetchMovies } from './api/index';
import { Search, Categories, Movies } from './components';

import styles from './Test.module.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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

function PermanentDrawerLeft(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMovies = await fetchMovies();

      setMovies(fetchedMovies);
    };

    fetchData();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Family', 'Fantasy', 'History', 'Horror', 'Musical', 'Mystery', 'Romance', 'Sic-fi', 'TV movie', 'Thriller', 'War', 'Western'];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className={styles.userContainer}>
        <PhotoPlaceholder className={styles.image} width={50} height={50} />
        <div>
          <h5>Estelle Collins</h5>
          <h6>Montreal, QC</h6>
        </div>
      </div>
      <Divider />
      <List>
        {genres.map((genre) => (
          <ListItem button key={genre}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={genre} />
          </ListItem>
        ))}
      </List>

    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer container={container} variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'} open={mobileOpen} onClose={handleDrawerToggle} classes={{ paper: classes.drawerPaper }} ModalProps={{ keepMounted: true }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Search />
        <Categories movies={movies} />
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default PermanentDrawerLeft;
