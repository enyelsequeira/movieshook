import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';

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
      {/* <div className={styles.userContainer}>
        <PhotoPlaceholder className={styles.image} width={50} height={50} />
        <div>
          <h5>Estelle Collins</h5>
          <h6>Montreal, QC</h6>
        </div>
      </div> */}
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }, i) => (
          <ListItem onClick={() => dispatch(selectCategory(value, 1))} button key={i}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres ? genres.map(({ name, id }) => (
          <ListItem onClick={() => dispatch(selectGenre(id, 1))} button key={id}>
            <ListItemText primary={name} />
          </ListItem>
        )) : null}
      </List>
    </>
  );
};

export default Sidebar;
