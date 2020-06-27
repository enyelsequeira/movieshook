import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { AiTwotoneEye, AiFillNotification, AiTwotoneLike } from 'react-icons/ai';
import { MdFavorite } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { selectGenre, selectCategory, getGenres } from '../../actions';
import styles from './Sidebar.module.scss';

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

  return (
    <>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value, icon }, i) => (
          <Link to="/">
            <ListItem onClick={() => dispatch(selectCategory(value, 1))} button key={i}>
              <ListItemText className={styles.links}>  {label}  <span>{icon}</span></ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres ? genres.map(({ name, id }) => (
          <Link to="/">
            <ListItem onClick={() => dispatch(selectGenre(id, 1))} button key={id}>
              <ListItemText primary={name} />
              <AiTwotoneEye />
            </ListItem>
          </Link>
        )) : null}
      </List>
    </>
  );
};

export default Sidebar;
