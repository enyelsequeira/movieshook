import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AiTwotoneEye, AiFillNotification, AiTwotoneLike } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { useTheme } from '@material-ui/core/styles';
import { selectGenre, selectCategory, getGenres } from '../../actions';
import styles from './Sidebar.module.scss';
import Img from '../../Img/cinemas.svg';
import ImgNight from '../../Img/nightmode.svg';
import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular', icon: <AiTwotoneLike /> },
  { label: 'Top Rated', value: 'top_rated', icon: <BsGraphUp /> },
  { label: 'Upcoming', value: 'upcoming', icon: <AiFillNotification /> },
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
      {isDarkMode ? (
        <Link to="/" className={classes.image}>
          <img className={classes.testing} src={ImgNight} alt="logo" />
        </Link>

      ) : (
        <Link to="/" className={classes.image}>
          <img className={classes.testing} src={Img} alt="logo" />
        </Link>
      ) }
      {/* onClick={() => dispatch(selectCategory(categories.value: 'popular'))} */}

      <Divider />

      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value, icon }, i) => (
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
