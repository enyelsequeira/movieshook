import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { selectGenre, selectCategory, getGenres } from '../../actions';

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

  return (
    <>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }, i) => (
          <Link to="/">
            <ListItem onClick={() => dispatch(selectCategory(value, 1))} button key={i}>
              <ListItemText primary={label} />
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
            </ListItem>
          </Link>
        )) : null}
      </List>
    </>
  );
};

export default Sidebar;
