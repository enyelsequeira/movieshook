import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import { PhotoPlaceholder } from 'react-placeholder-image';

import { getMoviesGenre, selectGenre, selectCategory } from '../../actions';
import styles from './Sidebar.module.scss';

const categories = ['Popular', 'Top Rated', 'Upcoming'];

const Sidebar = () => {
  const genres = useSelector((state) => state.config.genres);
  const categoriesId = useSelector((state) => state.config.categories);
  const dispatch = useDispatch();

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
        {categories.map((category, i) => (
          // add onclick and send proper category//still not working
          <ListItem onClick={() => dispatch(selectCategory(categoriesId))} button key={i}>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres ? genres.map(({ name, id }) => (
          <ListItem onClick={() => dispatch(selectGenre(id))} button key={id}>
            <ListItemText primary={name} />
          </ListItem>
        )) : null}
      </List>
    </>
  );
};

export default Sidebar;
