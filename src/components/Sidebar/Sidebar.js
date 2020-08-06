import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import { selectGenre, selectCategory, getGenres } from '../../actions';
import Img from '../../Img/cinemas.svg';
import ImgNight from '../../Img/nightmode.svg';
import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const Sidebar = () => {
  const genres = useSelector((state) => state.config.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);
  const classes = useStyles();
  const theme = useTheme();

  const isDarkMode = theme.palette.type === 'dark';

  return (
    <>
      <Link to="/" className={classes.image}>
        <img className={classes.testing} src={isDarkMode ? ImgNight : Img} alt="logo" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }, i) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => dispatch(selectCategory(value, 1))} button key={i}>
              <ListItemText>  {label} </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres ? genres.map(({ name, id }) => (
          <Link key={name} className={classes.links} to="/">
            <ListItem onClick={() => dispatch(selectGenre(id, 1))} button key={id}>
              <ListItemText primary={name} />
              {/* <AiTwotoneEye /> */}
            </ListItem>
          </Link>
        )) : null}
      </List>
    </>
  );
};

export default Sidebar;
